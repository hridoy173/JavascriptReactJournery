const express = require.express();
const router = express.Router();


const { getProducts, createProduct, productUpdate, productDelete} = require("./../controllers/productController");

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", productUpdate);

router.delete("/:id", productDelete);



module.exports = router;