class QueryBuilder {

    constructor(model, queryString) {
        this.model = model;
        this.query = model.find();
        this.queryString = queryString;
        this.page = Number(queryString.page) || 1;
        this.limit = Number(queryString.limit) || 10;
    }


    // search method to search for users by name or email
    search(fields = []) {

        const search = this.queryString.search;

        if (search) {

            this.query = this.query.find({

                $or: fields.map(field => ({
                    [field]: {
                        $regex: search,
                        $options: "i"
                    }
                }))

            });

        }

        return this;
    }



    // filter method to filter users by age or email
    filter() {

        const queryObj = { ...this.queryString };

        const excludedFields = [
            "page",
            "limit",
            "sort",
            "search"
        ];

        excludedFields.forEach(field => {
            delete queryObj[field];
        });

        this.query = this.query.find(queryObj);

        return this;

    }


    // paginate method to paginate users

    paginate() {
        const page = Number(this.queryString.page) || 1;
        const limit = Number(this.queryString.limit) || 10;

        const skip = (page - 1) * limit;

        this.query = this.query
            .skip(skip)
            .limit(limit);

        return this;
    }


      
async execute() {

    const data = await this.query;
    const total = await this.model.countDocuments();

    return {

        data,

        meta: {

            page: this.page,

            limit: this.limit,

            total,

            totalPages: Math.ceil(total / this.limit),

            count: data.length,

            hasNextPage:
                this.page < Math.ceil(total / this.limit),

            hasPrevPage:
                this.page > 1

        }

    };

}

}

module.exports = QueryBuilder;