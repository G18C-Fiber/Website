import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServerlessExpress } from '@vendia/serverless-express'; // Make sure it's installed

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export the serverless handler function (this is what Vercel expects)
export default createServerlessExpress({ app });
