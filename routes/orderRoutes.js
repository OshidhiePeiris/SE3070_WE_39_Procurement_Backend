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
    getMyOrders
} from  '../controllers/orderController';

router.route('/').post(addOrder);
router.route('/myorders').get(getMyOrders);
router.route('/getorders').get(getAllOrders);
router.route('/getorders/:status').get(getOrdersByStatus);
router.route('/orderrequests').get(countOrderRequests);
router.route('/completed').get(countCompletedOrders);
router.route('/updatepaid/:id').put(updateOrderToPaid);
router.route('/pendingbills').get(countPendingBills);
router.routr('/paidbills').get(countPaidBills)
router.route('/updatestatus/:id').put(updateOrderStatus)
router.route('/mark/:id').put(markAsDelivered)

export default router;
