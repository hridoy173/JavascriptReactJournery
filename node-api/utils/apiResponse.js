const successResponse = (
    res,
    {
        statusCode = 200,
        message = "Success",
        token = null,
        data = null,
        meta = null
    } = {}
) => {

    return res.status(statusCode).json({
        success: true,
        message,
        token,
        data,
        meta
    });

};

module.exports = successResponse;