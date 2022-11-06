import express from 'express';
import colors from 'colors';
import path from 'path'
import dotenv from 'dotenv';
import morgan from 'morgan';

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import quotationRoutes from './routes/quotationRoutes.js'
import cors from "cors";

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
//initializing express server
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors({origin: '*'}));

//base URLs for routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/quotations',quotationRoutes);

//image upload folder path 
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));



// Error handling
app.use(notFound);
app.use(errorHandler);

//backend port
const PORT = process.env.PORT || 5000;

//backend server will serve on this port
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

