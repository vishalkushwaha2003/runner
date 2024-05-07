import mongoose from "mongoose";

const connection=async()=>{

    try {
         await mongoose.connect(process.env.MONGODB_URL)
         console.log('connect successfuly')
    } catch (error) {
        console.log("connection failed ",error.message)
    }


}
export default connection;