const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const topic = require('./routes/topicRoute');
const WriteReview = require('./routes/writeReviewRoute')
const ReadReview = require('./routes/readReviewRoute')

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/",topic)
app.use("/",WriteReview)
app.use("/",ReadReview)
app
// app.get('/',(req,res)=> res.send(`Hello world`))
mongoose.connect(
  "mongodb+srv://modnoy:modnaetuanoy@modnae.olhb5sg.mongodb.net/modnaeDB"
);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connected.");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});