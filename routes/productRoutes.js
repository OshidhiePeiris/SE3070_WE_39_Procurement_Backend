import express from 'express';
import {
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getProductDetails,


}from '../controllers/productController'


const router = express.Router()
router.route('/addproduct').post(createProduct);
router.route('/').get(getProducts);
router.route('/delete/:id').delete(deleteProduct);
router.route('/update/:id').put(updateProduct);
router.route('/:id').get(getProductDetails);

export default router;