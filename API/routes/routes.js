
import express from "express";
 
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct, showProductsToyata, showProductsBMW, showProductsAMG, showProductsPorsche, showProductsFord, showProductsLexus, showProductsMazda, showProductsNissan, showProductsMc, showProductsMit, showProductByname, showProductsorder, createProductOrder, deleteOrder, deleteAllOrder, showtotal, createProductest, showProducttest, showtotalid, createProductinOrder, updateordert, showcustomer, showcunt } from "../controllers/product.js";
import { updateorder1 } from "../models/productModel.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/products', showProducts);
router.get('/customers', showcustomer);
router.get('/order',showProductsorder);
//Get Toyata Product
router.get('/products/Toyota', showProductsToyata);
//Get BMW Product
router.get('/products/BMW', showProductsBMW);

router.get('/products/AMG', showProductsAMG);
router.get('/products/Porsche', showProductsPorsche);
router.get('/products/Ford', showProductsFord);
router.get('/products/Lexus', showProductsLexus);
router.get('/products/Mazda', showProductsMazda);
router.get('/products/Nissan', showProductsNissan);
router.get('/products/McLaren', showProductsMc);
router.get('/products/Mitsubishi', showProductsMit);
// Get Single Product
router.get('/products/:id', showProductById);
router.get('/order/sum', showtotal);
router.get('/cu', showcunt);
router.get('/order/sum/:No', showtotalid);
// Create New Product
router.post('/products', createProduct);
router.post('/test', createProductest);
router.get('/test', showProducttest);
router.post('/order',createProductOrder);
// Update Product
router.put('/products/:id', updateProduct);
router.post('/ordered',createProductinOrder);
// Delete Product
router.delete('/products/:id', deleteProduct);
router.delete('/order/:No', deleteOrder);
router.delete('/order', deleteAllOrder);
router.put('/order', updateordert);
router.get('/:Model', showProductByname);
// export default router
export default router;