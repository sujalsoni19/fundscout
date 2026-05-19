import "dotenv/config";

import app from "./app.js";
import connectDB from "./database/index.js";

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from backend url");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
