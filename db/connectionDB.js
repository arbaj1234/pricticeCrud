import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connection successfuly`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb