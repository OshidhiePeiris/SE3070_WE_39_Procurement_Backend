import express from 'express'
const router = express.Router();

import {
    createQuotation,
    getQuotationDetails,
    getQuotations,
    updateApproval
}from '../controllers/quotationController.js'

router.route('/').get(getQuotations);
router.route('/addquote').post(createQuotation);
router.route('/:id').get(getQuotationDetails)
router.route('/update/:id').put(updateApproval);

export default router;