import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import serverless from "serverless-http";  // Use this for serverless integration

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "../public")));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/pages/desktop/html/home.html"));
});

// Create serverless handler
export const handler = serverless(app);
