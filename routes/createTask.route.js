const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware");

const pool = require("../database/connectDB");

router.post("/", authenticateToken,async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Task details are missing in the request body' });
    }
    const taskDetails = req.body;
    const {
        title, 
        description,
        status, 
        assignee_id, 
        created_at, 
        updated_at
    } = taskDetails;
    const addTaskQuery = `
        INSERT INTO 
            Tasks (title, description, status, assignee_id, created_at, updated_at)
        VALUES
        (
            '${title}', 
            '${description}',
            '${status}', 
            ${assignee_id}, 
            ${created_at}, 
            ${updated_at}
        )
    `
    pool.query(addTaskQuery, (err, result)=>{
        if (err){
            console.log('Error: ' + err);
            res.status(500).send('*Error while inserting data into database*');
        }else{
            
            // console.log('query: ' + addTaskQuery);
            // console.log("id: " + result.insertId);
            res.send({'taskId': result.insertId});
        }
    })    
});

module.exports = router;
/*
{
    "title": "EpiMax Backend Assignment", 
    "description": "Complete backend task at any cost by today night 11:30 PM",
    "status" : "Completed", 
    "assignee_id" : 1, 
    "created_at" : "4/30/2024", 
    "updated_at" : "4/30/2024"
}

*/