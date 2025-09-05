import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import router from "./routes/loginroute.js";
import updateUserRoute from "./routes/updateUser.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Attach Clerk auth to all requests so req.auth is populated
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Auth routes
app.use("/api", router);
app.use("/api.updateuser",updateUserRoute)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
