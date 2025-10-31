const express = require('express');
const router = express.Router();
const db = require('../routes/dbconfig');

// router.get("/login", (req, res) => {
//     //Check if the request is valid
//     if (req.body.username == null || req.body.password == null) {
//         res.status(400).json({
//             title: "Error",
//             message: "Invalid request",
//             status: 400
//         });
//         console.log("Invalid 'Login' request received from: " + req.headers.host);
//         return;
//     } else {
//         console.log("'Login' request received from: " + req.headers.host);
//     }

//     // Add code to check if the user exists in the database
//     let username = req.body.username;

//     //Query username
//     let query = "SELECT * FROM `admin` WHERE `AdminUsername` = '" + username + "'";
//     db.query(query, (err, result) => {
//         if (err) {
//             res.status(500).json({
//                 title: "Error",
//                 message: "An error occurred while checking the username",
//                 status: 500
//             });
//         } else {
//             if (result.length > 0) {
//                 //Check if the password is correct
//                 let password = req.body.password;
//                 let storedPassword = result[0].AdminPassword;
//                 if (password == storedPassword) {
//                     //Generate token
//                     let token = Math.random().toString(36).substr(2);
//                     //Update token
//                     let updateQuery = "UPDATE `admin` SET `AdminToken` = '" + token + "' WHERE `AdminUsername` = '" + username + "'";
//                     db.query(updateQuery, (err, result) => {
//                         if (err) {
//                             res.status(500).json({
//                                 title: "Error",
//                                 message: "An error occurred while updating the token",
//                                 status: 500
//                             });
//                         }
//                     });
//                     res.status(200).json({
//                         title: "Success",
//                         message: "Login successful",
//                         status: 200,
//                         data: {
//                             username: result[0].AdminUsername,
//                             token: token
//                         }
//                     });
//                 } else {
//                     res.status(401).json({
//                         title: "Error",
//                         message: "Incorrect password",
//                         status: 401
//                     });
//                 }
//             } else {
//                 res.status(404).json({
//                     title: "Error",
//                     message: "Username not found",
//                     status: 404
//                 });
//             }
//         }
//     });
// });

router.post("/verify", (req, res) => {
    //Check if the request is valid
    if (req.body.username == null || req.body.token == null) {
        res.status(400).json({
            title: "Error",
            message: "Invalid request",
            status: 400
        });
        console.log("Invalid 'Verify' request received from: " + req.headers.host);
        return;
    } else {
        console.log("'Verify' request received from: " + req.headers.host);
    }

    // Add code to check if the user exists in the database
    let username = req.body.username;
    let token = req.body.token;

    //Query username
    let query = "SELECT * FROM `admin` WHERE `AdminUsername` = '" + username + "'";
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json({
                title: "Error",
                message: "An error occurred while checking the username",
                status: 500
            });
            console.log(err);
        } else {
            if (result.length > 0) {
                //Check if the token is correct
                let storedToken = result[0].SessionToken;
                if (token == storedToken) {
                    res.status(200).json({
                        title: "Success",
                        message: "Token verified",
                        status: 200
                    });
                } else {
                    res.status(401).json({
                        title: "Error",
                        message: "Incorrect token",
                        status: 401
                    });
                }
            } else {
                res.status(404).json({
                    title: "Error",
                    message: "Username not found",
                    status: 404
                });
            }
        }
    });
});

module.exports = router;