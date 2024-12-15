const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let boats = [];

app.get("/boats", (req, res) => {
    console.log("Get Request");
  res.json(boats);
});

app.post("/boats", (req, res) => {
  console.log("Received body:", req.body);
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Boat name is required" });
  }
  boats.push({ name, description });
  res.status(201).json({ message: "Boat added successfully" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
