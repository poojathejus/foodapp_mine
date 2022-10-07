import dotenv from "dotenv";
dotenv.config();
//import mongoose from "mongoose";
//import express
import express from "express";
//import cors
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import  {dbConnect}  from './configs/database.config';
dbConnect();

//create web application
//now app is express application,now we can define api using app
const app =express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
// app.use("/api/orders", orderRouter);


//listen to port
const port =5000;
app.listen(port,()=>{
    console.log("website served on http://localhost:" +port);
    
})
