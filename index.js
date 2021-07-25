const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Routerfrom = require("./Router/from");

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}, () => {
    console.log("Connection to MONGODB");
});

//middware
app.use(express.json());
app.use("/api/from", Routerfrom);

app.listen(5000, () => {
    console.log(`my localhost is ${5000}`)
})