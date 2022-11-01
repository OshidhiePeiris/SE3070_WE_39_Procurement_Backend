import express from 'express'
const router = express.Router();

import {
    createQuotation,
    getQuotationDetails,
    getQuotations,
}from '../controllers/quotationController.js'

router.route('/').get(getQuotations);
router.route('/addquote').post(createQuotation);
router.route('/:id').get(getQuotationDetails)

export default router;