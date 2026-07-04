const getProducts = (req, res) => {
    res.json({
        status: 200,
        message: "All Products",
        data: products
    });
}



const createProduct = (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json({
        message: "Product created",
        data: product
    });
}


const productUpdate = (req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    const productIndex = products.findIndex((p)=>p.id == id);

    if (productIndex === -1) {
        return res.status(404).json({ status: 404, message: "Product not found" });
    }

    products[productIndex] = {...products[productIndex],...updateData};
    res.json({
        status: 200,
        message: "Product updated",
        data: products[productIndex]
    });
}



const productDelete = (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ status: 404, message: "Product not found" });
    }
    products.splice(productIndex, 1);
    res.json({ status: 200, message: "Product deleted" });
}



module.exports = {
    getProducts,
    createProduct,
    productUpdate,
    productDelete
};