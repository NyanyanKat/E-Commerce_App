const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// API

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));

app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("HelloOOO"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request received, BOOM for this total: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: "usd",
  });

  // 201 - okay, created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example API
// http://localhost:5001/clone-d5d57/us-central1/api
