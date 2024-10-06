const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config(); 
const authRoutes = require("../server/route/routes");


const app = express();

mongoose.connect(
  process.env.MONGODB_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("Connected to MongoDB successfully...");
})
.catch((err) => {
  console.error("Error connecting to MongoDB: ", err);
});


app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`My server is starting at port ${PORT}...`);
});
