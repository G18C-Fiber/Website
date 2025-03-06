const express = require("express");
const path = require("path");
const axios = require("axios");


const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Helper function to detect mobile devices
function isMobile(req) {
  const userAgent = req.headers["user-agent"];
  return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
}

// Routes
app.use((req, res, next) => {
  if (req.hostname === "www.slbsalon.com" && req.path === "/") {
    return res.redirect(301, "/home");
  }
  next();
});


app.get("/shop", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/shop.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/shop.html"));
  }
});

app.get("/gallery", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/gallery.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/gallery.html"));
  }
});


app.get("/home", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/home.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/home.html"));
  }
});

app.get("/services", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/services.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/services.html"));
  }
});

app.get("/contact", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/contact.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/contact.html"));
  }
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../public/assets/pages/404.html"));
});
// Middleware to handle URI too long (414 status)
app.use((req, res, next) => {
  // Check if URI length is too long (example limit: 2048 chars)
  if (req.originalUrl.length > 2048) {
    res.status(414).sendFile(path.join(__dirname, "../public/assets/pages/uri-too-long.html"));
  } else {
    next();
  }
});


app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("", (req, res) => {
  res.redirect("/home");
});

// Export the app directly for Vercel
module.exports = app;
