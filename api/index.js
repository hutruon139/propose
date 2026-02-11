const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Build the correct path to the dist folder
const distPath = path.join(__dirname, "..", "site", "dist");

// Middleware to serve static files
app.use(express.static(distPath));

// CORS headers
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// Ping endpoint
app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

// SPA fallback - serve index.html for all other routes
app.get("*", (req, res) => {
  const indexPath = path.join(distPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Not found");
  }
});

module.exports = app;
