import asyncHandler from 'express-async-handler'
import Quotation from '../models/quotation.js';
const createQuotation = asyncHandler(async(req,res)=>{
    const newQuotation = new Quotation ({
        firstName,
        lastName,
        email,
        mobile,
        companyName,
        companyAddres,
        message
    });
    const createQuotation = await newQuotation.save();
    req.status(200).json({status: 'Your quotation has been sent',createQuotation})
    
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

