const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');
const pkg = require('@vendia/serverless-express'); // CommonJS import
const { createServerlessExpress } = pkg; // Destructure the createServerlessExpress function

// Get __dirname in CommonJS
const __filename = fileURLToPath(__filename);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Helper function to detect mobile devices
function isMobile(req) {
  const userAgent = req.headers["user-agent"];
  return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
}

// Routes
app.get("/shop", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/shop.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/shop.html"));
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

app.get("/", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/index.html"));
  }
});

// Export the app as a serverless function
module.exports.handler = createServerlessExpress({ app });
