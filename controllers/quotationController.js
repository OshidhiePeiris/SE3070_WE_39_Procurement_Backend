import asyncHandler from 'express-async-handler'
import Quotation from '../models/quotation.js';

//request quotations
const createQuotation = asyncHandler(async(req,res)=>{
    const newQuotation = new Quotation ({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        mobile:req.body.mobile,
        companyName:req.body.companyName,
        companyAddress:req.body.companyAddress,
        message:req.body.message,
        approval:req.body.approval
    });
    const createQuotation = await newQuotation.save();
    res.status(200).json(createQuotation)
    
})
//get all quotations
const getQuotations = asyncHandler (async(req,res)=>{
    await Quotation.find().then((quotes)=>{
        res.json(quotes)
    }).catch((err)=>{
        console.log(err)
    })
})

//get quotation details
const getQuotationDetails = asyncHandler(async(req,res)=>{
    await Quotation.findById(req.params.id).then((quote)=>{
        res.json(quote);
    }).catch((err)=>{
        console.log(err);
    })
})

//update approval status
const updateApproval =asyncHandler(async(req,res)=>{
    const quotation = await Quotation.findById(req.params.id);
    if(quotation){
        quotation.approval=true;
        const update = await quotation.save();
        res.status(200).json(update)
    }else{
        res.status(400);
        throw new Error('Approved')
    }
})
export {
    createQuotation,
    getQuotations,
    getQuotationDetails,
    updateApproval
}

