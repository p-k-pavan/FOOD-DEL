import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"



// app config
const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

//db connection

connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log("SERVER IS WORKING")
})

//mongodb+srv://pkpavan2003:Llr7Xn9V8rcCPWxP@cluster0.bhailsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0