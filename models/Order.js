import mongoose from 'mongoose';
// order schema
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    siteAddress: {
     type:String,
     required:true
    },
   
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    status:{
        type:String,
        required:true
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    isPaid :{
      type:Boolean,
      required:false
    },
    paidAt:{
      type:Date
    },
    approval:{
      type:Boolean,
      required:false
    }
  },
  {
    timestamps: true,
  }
);

orderSchema.methods.calculatePrice = async function(){
  let tot;
  for(let i=0; i<orderItems.length;i++){
    tot += orderItems[i].price * orderItems[i].quantity
  }
  return tot;
}
const Order = mongoose.model('Order', orderSchema);

export default Order;