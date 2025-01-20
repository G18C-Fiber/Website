import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import serverlessExpress from "@vendia/serverless-express"; // Correct import

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
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

// Default route (for the main page)
app.get("/", (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/index.html"));
  }
});

// Export the handler for Vercel serverless functions
export default serverlessExpress({ app });
