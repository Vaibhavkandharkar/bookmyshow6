const express = require("express");
const app = express();
const connectDB = require('./dbConnection')
const Ticket = require('./schema');
const cors = require("cors");

app.use(cors());

app.use(express.json());

connectDB();
app.use(express.urlencoded({ extended: false }))

app.use("/api", require("./routes"));

app.listen(8080,()=>{
    console.log("App listening to port 8080")
});