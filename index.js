const express = require('express');
const app= express();
const test = require("./routes/test.route");

app.use("/Test", test)

app.listen(3001, ()=> console.log("server is running at port 3001"));