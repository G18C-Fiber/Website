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
app.get("/shop", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/shop.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/shop.html"));
  }
});

app.get("/gallery", async (req, res) => {
  const desktopURL = "https://b097a24c-9c3e-4c73-9281-069e8ae4c692-00-2w5ale0arjeoh.picard.replit.dev";

  try {
    const response = await axios.get(desktopURL);
    res.set("Content-Type", "text/html"); // Ensure the content type is set correctly
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching content:", error.message);
    res.status(500).send("Error fetching gallery content.");
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
  res.redirect("/home");
});

// Export the app directly for Vercel
module.exports = app;
