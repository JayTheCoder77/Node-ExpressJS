import express from "express";
import { config as configDotenv } from "dotenv";
import contactRoute from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

// Load environment variables from .env file
configDotenv();

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts" , contactRoute)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
