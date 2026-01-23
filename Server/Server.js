const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/DB");
const training =require("./routes/TrainingRoute")
const seminarRoutes =require("./routes/SeminarRoute")
const adminLoginRoute =require("./routes/Admin_LoginRoute")
const audioBookRoute = require("./routes/AudioBookRoute");

connectDB();
 
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/training", training);
app.use("/api/seminar", seminarRoutes);
app.use("/api/admin", adminLoginRoute);
app.use("/api/audiobook", audioBookRoute);

// http://localhost:3006/api/audiobook/all

app.get("/", (req, res) => {
  res.send("API Is Perfectly Running...");
});


// module.exports=app



const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is Live on PORT ${PORT}`);
});



