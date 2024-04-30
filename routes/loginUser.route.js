const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../database/connectDB");

router.post('/', async(req,res) => {
    const { username, password } = req.body;
    const selectUserQuery = `SELECT * FROM Users WHERE username = '${username}'`;
    console.log(selectUserQuery);
    pool.query(selectUserQuery, async (err,result)=> {
        if(err){
            console.log("Err: " + err);
        }else{
            // console.log("db username: " + result);
            // res.send(result[0]['username']);
            if (result[0]['username'] === username){
                // console.log("loginuser_Password: " + password);
                // console.log("db_Password: " + result[0]['password_hash']);

                const isPasswordMatched = await bcrypt.compare(password, result[0]['password_hash']);
                if(isPasswordMatched === true){
                    res.status(200).send("Login Success");
                }
                else{
                    res.status(400).send("Invalid Password");
                }
            }else{
                res.status(400).send("Invalid User");
            }
        }
    })
})

module.exports = router;