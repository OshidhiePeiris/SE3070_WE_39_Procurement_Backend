import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

//create product
const createProduct = asyncHandler(async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        image: req.body.image,
        supplier: req.body.supplier,
        supplierMobile: req.body.supplierMobile,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity

    })
    const createProduct = await newProduct.save();
    res.status(200).json(createProduct);
})

//get all products
const getProducts = asyncHandler(async (req, res) => {
    Product.find().then((products) => {
        res.json(products)
    }).catch((err) => {
        console.log(err)
    })
})

//delete product
const deleteProduct = asyncHandler(async (req, res) => {
    await Product.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json("deleted")
    }).catch((err) => {
        console.log(err);
    })
})

//update product
const updateProduct = asyncHandler(async (req, res) => {
    const { name, image, supplier, supplierMobile, description, price, quantity } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
        product.name = name;
        product.image = image;
        product.supplier = supplier;
        product.supplierMobile = supplierMobile;
        product.description = description;
        product.price = price;
        product.quantity = quantity;

    }
    const updateProduct = await product.save();
    res.json(updateProduct);
})
//get product details of a product
const getProductDetails = asyncHandler(async (req, res) => {
    await Product.findById(req.params.id).then((product) => {
        res.json(product)
    }).catch((err) => {
        console.log(err)
    })
})

export {
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getProductDetails,

}