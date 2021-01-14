const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoute");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// mongoose database
mongoose.connect(
  "mongodb+srv://judytan:soloproject@cluster0.t0zgj.mongodb.net/solo-project?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => console.log("connected to database"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(PORT, () => console.log(`connect to ${PORT}`));
