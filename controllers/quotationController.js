import asyncHandler from 'express-async-handler'
import Quotation from '../models/quotation.js';
const createQuotation = asyncHandler(async(req,res)=>{
    const newQuotation = new Quotation ({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        mobile:req.body.mobile,
        companyName:req.body.companyName,
        companyAddress:req.body.companyAddress,
        message:req.body.message
    });
    const createQuotation = await newQuotation.save();
    res.status(200).json(createQuotation)
    
})

const getQuotations = asyncHandler (async(req,res)=>{
    await Quotation.find().then((quotes)=>{
        res.json(quotes)
    }).catch((err)=>{
        console.log(err)
    })
})

const getQuotationDetails = asyncHandler(async(req,res)=>{
    await Quotation.findById(req.params.id).then((quote)=>{
        res.json(quote);
    }).catch((err)=>{
        console.log(err);
    })
})

export {
    createQuotation,
    getQuotations,
    getQuotationDetails,
}

