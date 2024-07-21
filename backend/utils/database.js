
import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config({
    path: "../.env"
})


const databaseConnection = ()=>{
  
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("databse connected succesfully")
    }).catch((error)=>{
        console.log(error)
    })
}; 

export default databaseConnection;