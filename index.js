const express = require('express');
const app= express();
const test = require("./routes/test.route");
const users = require("./routes/getTasks.route")

app.use("/Test", test)
app.use('/users', users);

app.listen(3001, ()=> console.log("server is running at port 3001"));