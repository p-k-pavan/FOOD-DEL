import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://pkpavan2003:Llr7Xn9V8rcCPWxP@cluster0.bhailsf.mongodb.net/FOOD-DEL"
    )
    .then(() => console.log("DATABASE IS CONNECTED"));
    
};


