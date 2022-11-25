const { Router } = require('express');
const router = Router();
const { 
    listProducts,
    listProduct,
    createProduct,
    deleteProduct,
    editProduct

 } = require('../Controller/productController')

router.get("/product",  listProducts);

router.get("/product/:id", listProduct);

router.post("/product", createProduct);

router.delete("/product/:id", deleteProduct);

router.put("/product/:id", editProduct);



module.exports = router;