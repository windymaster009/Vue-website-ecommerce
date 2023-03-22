// Import function from Product Model
import { getProducts, getProductById, insertProduct, updateProductById, deleteProductById, getProductToyota, getProductBMW, getProductLexus, getProductAMG, getProductPorsche, getProductNissan, getProductMc, getProductMitsu, getProductMazda, getProductFord, getProductByName, getProductsorder, insertProductorder, deleteOrderById, deleteAllOrderById, getsum,  insertProductordertest, getProductsordertest, getsumall, insertProductinOrder, updateorder1, getcustomer, count } from "../models/productModel.js";
 
// Get All Products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showcustomer = (req, res) => {
   getcustomer((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showProductstest = (req, res) => {
    getProductstest((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showProductsorder = (req, res) => {
    getProductsorder((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createProductOrder = (req, res) => {
    const data = req.body;
    insertProductorder(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get Toyota Product
export const showProductsToyata = (req, res) => {
    getProductToyota((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get BMW Product
export const showProductsBMW = (req, res) => {
    getProductBMW((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get Lexus Product
export const showProductsLexus = (req, res) => {
    getProductLexus((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get AMG Product
export const showProductsAMG = (req, res) => {
    getProductAMG((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get Porsche Product
export const showProductsPorsche = (req, res) => {
    getProductPorsche((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get Nissan Product
export const showProductsNissan = (req, res) => {
    getProductNissan((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get McLaren Product
export const showProductsMc = (req, res) => {
    getProductMc((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get Mitsu Product
export const showProductsMit = (req, res) => {
    getProductMitsu((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get Mazda Product
export const showProductsMazda = (req, res) => {
    getProductMazda((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showProducttest = (req, res) => {
    getProductsordertest((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get Ford Product
export const showProductsFord = (req, res) => {
    getProductFord((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Get Single Product 
export const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showProductByname = (req, res) => {
    getProductByName(req.params.Model, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Create New Product
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createProductest = (req, res) => {
    const data = req.body;
    insertProductordertest(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Update Product
export const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateordert = (req, res) => {
    const data  = req.body;

    updateorder1(data,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteOrder = (req, res) => {
    const No = req.params.No
    ;
    deleteOrderById(No, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteAllOrder = (req, res) => {
   
    
    deleteAllOrderById( (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showtotal = (req, res) => {
    getsumall((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showcunt = (req, res) => {
    count((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showtotalid = (req, res) => {
    getsum(req.params.id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createProductinOrder = (req, res) => {
    const data = req.body;
   
   insertProductinOrder(data,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}