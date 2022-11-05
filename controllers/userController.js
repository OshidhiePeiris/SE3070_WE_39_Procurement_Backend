import asyncHandler from 'express-async-handler'
import User from '../models/User.js';

const authUser = asyncHandler(async(req,res)=>{
    const {email,password,role}= req.body;
    if (((email !== null && password == null))|| (email == null && password !== null)){
        res.status(400);
        throw new Error("Enter Email or password")
    }else{
        if(email!==null && password!==null){
            const user = await User.findOne({email});
            if (!user){
                res.status(400);
                throw new Error ("User with this email does not exist")
            }else{
               
                    if (password===user.password || role===user.role){
                        res.json(user)
                    }else{
                        res.status(400);
                        throw new Error('invalid role or password')
                    }
                
            }
        }
     
       
    }
})


const registerUser = asyncHandler(async(req,res)=>{
    const {empID,name,email,password,phoneNumber,role}= req.body;
    const existingUser = await User.findOne({email});
    if (existingUser){
        res.status(400);
        throw new Error("User with this email already exists")
    }
    const user = await User.create({
        empID,name,email,password,phoneNumber,role
    });
     if (user){
        res.status(200).json("Account created")
     }else {
        throw new Error("Invalid data")
     }
})


export {
    authUser,
    registerUser,
}