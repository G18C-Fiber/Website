import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import serverlessExpress from "@vendia/serverless-express"; // Import default export

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
  try {
    if (isMobile(req)) {
      res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/shop.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/shop.html"));
    }
  } catch (error) {
    console.error("Error in /shop route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/home", (req, res) => {
  try {
    if (isMobile(req)) {
      res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/home.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/home.html"));
    }
  } catch (error) {
    console.error("Error in /home route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/services", (req, res) => {
  try {
    if (isMobile(req)) {
      res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/services.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/services.html"));
    }
  } catch (error) {
    console.error("Error in /services route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/contact", (req, res) => {
  try {
    if (isMobile(req)) {
      res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/contact.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/contact.html"));
    }
  } catch (error) {
    console.error("Error in /contact route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  try {
    if (isMobile(req)) {
      res.sendFile(path.join(__dirname, "../public/assets/pages/mobile/html/index.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/index.html"));
    }
  } catch (error) {
    console.error("Error in / route:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Export the app as a serverless function
export const handler = serverlessExpress({ app });
