import mongoose from 'mongoose';
//product schema


const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    supplier: {
      type: String,
      required: true,
    },

    supplierMobile: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
