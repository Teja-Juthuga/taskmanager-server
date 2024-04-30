const express = require('express');
var cors = require('cors');

const app= express();
app.use(cors(
    {
        origin : "*"
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const test = require("./routes/test.route");
const createNewTask = require("./routes/createTask.route");
const getTasks = require("./routes/getTasks.route");


app.use("/tasks", createNewTask);
app.use("/tasks", getTasks);
app.use("/Test", test);



app.listen(3001, ()=> console.log("server is running at port 3001"));