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
const getALLTasks = require("./routes/getAllTasks.route");
const getTask = require("./routes/getTask.route");


app.use("/tasks", createNewTask);
app.use("/tasks", getALLTasks);
app.use("/tasks", getTask);
app.use("/Test", test);



app.listen(3001, ()=> console.log("server is running at port 3001"));