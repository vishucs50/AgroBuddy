require("dotenv").config();
const express = require("express");
const cors = require("cors");
const data=require('./crops.json');
const mongoose=require('mongoose');
const User = require("./models/user");
const weatherRoute = require("./routes/cropSuggestion/weatherRoute");
const SuggestRoute=require("./routes/cropSuggestion/suggestion")
const app = express();
const UserRoute=require("./routes/user")
const dbUrl = "mongodb://127.0.0.1:27017/AgroBuddy";

mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected"));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/weather", weatherRoute);
app.use('/api',SuggestRoute);
app.use("/user",UserRoute);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend is live on port ${PORT}`);
});
