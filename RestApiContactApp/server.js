import express from "express";
import { config as configDotenv } from "dotenv";
import contactRoute from "./routes/contactRoutes.js";
import userRoute from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDb } from "./config/dbConnection.js";

// Load environment variables from .env file
configDotenv();
connectDb()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts" , contactRoute)
app.use("/api/users" , userRoute)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
