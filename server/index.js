require("dotenv").config();
const express = require("express");
const cors = require("cors");
const data=require('./crops.json');
const mongoose=require('mongoose');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const session=require("express-session")
const weatherRoute = require("./routes/cropSuggestion/weatherRoute");
const SuggestRoute=require("./routes/cropSuggestion/suggestion")
const app = express();
const UserRoute=require("./routes/user")
const dbUrl = "mongodb://127.0.0.1:27017/AgroBuddy";
sessionConfig = {
  name: "yelpcamp",
  secret: "this should be a better session key",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
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
