import mongoose from 'mongoose';
// order schema
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    //orderItems is an array
    orderItems: [
      {
        name: { type: String, required: false },
        quantity: { type: Number, required: false },
        image: { type: String, required: false },
        price: { type: Number, required: false },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: 'Product',
        },
      },
    ],
    siteAddress: {
     type:String,
     required:false
    },
   
    totalPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    status:{
        type:String,
        required:false,
        default:"Pending"
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
      required:false,
      default:false
    },
    paidAt:{
      type:Date
    },
    approval:{
      type:Boolean,
      required:false,
      default:false
    },
   
    deadlineDate : {
      type : Date ,
      required : false
    },
    productID :{
      type : String,
      required:false
    },
    quantity:{
      type:Number,
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