import express from 'express'
const router = express.Router();
import {
    addOrder,
    updateOrderStatus,
    markAsDelivered,
    getAllOrders,
    getOrdersByStatus,
    countOrderRequests,
    countCompletedOrders,
    updateOrderToPaid,
    countPendingBills,
    countPaidBills,
    getMyOrders,
    updateApproval,
    getOneOrder,
    approvedorders,
    getApprovedOrders,
    getDeclined,
    getDelivered

} from '../controllers/orderController.js';

router.route('/').post(addOrder);
router.route('/myorders').get(getMyOrders);
router.route('/getorders').get(getAllOrders);
router.route('/getorders/:status').get(getOrdersByStatus);
router.route('/orderrequests').get(countOrderRequests);
router.route('/completed').get(countCompletedOrders);
router.route('/updatepaid/:id').put(updateOrderToPaid);
router.route('/pendingbills').get(countPendingBills);
router.route('/paidbills').get(countPaidBills)
router.route('/updatestatus/:id').put(updateOrderStatus)
router.route('/mark/:id').put(markAsDelivered)
router.route('/approval/:id').put(updateApproval)
router.route('/:id').get(getOneOrder);
router.route('/approved').get(approvedorders)
router.route('/').get(getApprovedOrders);
router.route('/get/declined').get(getDeclined),
    router.route('/get/delivered').get(getDelivered)
export default router;

