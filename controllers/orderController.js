import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

//create order
const addOrder = asyncHandler(async(req,res)=>{
    const {orderItems, siteAddress,totalPrice,status,isDelivered,deliveredAt} = req.body;
    if (orderItems && orderItems.length == 0){
        res.status(400);
        throw new Error('No items')
    }else {
        const newOrder = new Order ({
            orderItems,
            siteAddress,
            totalPrice,
            status,
            isDelivered,
            deliveredAt
        });
        const createOrder = await newOrder.save();
        res.status(200).json({status:'Order placed',createOrder})

    }
})
//updte  order status
const updateOrderStatus = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id);
    if (order){
        order.status = req.body.status;
        const updateStatus = order.save();
        res.json(updateStatus)
    }else {
        res.status(400);
        throw new Error('Order not found')
    }
    
})

//update order to delivered
const markAsDelivered = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id);
    if (order){
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updateDeliveryStatus = await order.save();
        res.status(200).json(updateDeliveryStatus)
    }else {
        res.status(400);
        throw new Error ('Order not found')
    }
})

//get all orders
const getAllOrders = asyncHandler(async(req,res)=>{
    const orders = await Order.find();
    res.status(200).json(orders);

})

//get orders by status
const getOrdersByStatus = asyncHandler(async(req,res)=>{
    const status = req.params.status;
    Order.find({status:{$eq:status}},{__id:0}).then((orders)=>{
        res.status(200).json(orders);
    }).catch((err)=>{
        console.log(err)
    })

})

//count order requests
const countOrderRequests = asyncHandler(async(req,res)=>{
    Order.countDocuments({isDelivered:{$eq:false}}).then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})
//count completed orders
const countCompletedOrders = asyncHandler(async(req,res)=>{
    await Order.countDocuments(({isDelivered:{$eq:true}})).then((orders)=>{
        res,json(orders);
    }).catch((err)=>{
        console.log(err);
    })
})
//update paid status
const updateOrderToPaid = asyncHandler(async(req,res)=>{
    const order = await Order(req.params.id);
    if (order){
        order.isPaid = true;
        const updated = await order.save()
        res.json(updated)
    }else{
        throw new Error('Order not found')
    }
})
//count pending bills
const countPendingBills = asyncHandler(async(req,res)=>{
    await Order.countDocuments({
        isPaid:{$eq:"Pending"}
    }).then((orders)=>{
        res.status(200).json(orders)
    }).catch((err)=>{
        console.log(err);
    })
})
//count paid bills
const countPaidBills = asyncHandler(async(req,res)=>{
    await Order.countDocuments({
        isPaid:{$eq:"Paid"}
    }).then((orders)=>{
        res.status(200).json(orders)
    }).catch((err)=>{
        console.log(err);
    })
})

//get logged inuser orders
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
  
    res.json(orders);
  });

export{
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
}