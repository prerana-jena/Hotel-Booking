import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhookSecret from "./controllers/clerkWebhooks.jsx";

connectDB();

const app = express();

app.use(cors());

// Clerk webhook route (must come BEFORE express.json())
app.post(
  "/api/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhookSecret
);

// Parse JSON for all other routes
app.use(express.json());

// Clerk middleware
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API is working Fine");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});