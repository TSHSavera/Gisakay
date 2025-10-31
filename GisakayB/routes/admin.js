const express = require('express');
const router = express.Router();
const db = require('../routes/dbconfig');
const con = require('../routes/dbconfig');

//Add Barangay
router.post("/", (req, res) => {
    //Check if the request is valid
    if (req.body.barangayName == null || req.body.barangayLimits == null) {
        res.status(400).json({
            title: "Error",
            message: "Invalid request",
            status: 400,
        });
        console.log("Invalid 'Add Barangay' request received from: " + req.headers.host);
        console.log(req.body.barangayName);
        return;
    } else {
        console.log("'Add Barangay' request received from: " + req.headers.host);
    }

    // Add code to check if the barangay exists in the database
    let barangayName = req.body.barangayName;
    let barangayLimits = req.body.barangayLimits;

    //Query barangay
    let query = "SELECT * FROM `barangay` WHERE `BarangayName` = '" + barangayName + "'";
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json({
                title: "Error",
                message: "An error occurred while checking the barangay",
                status: 500
            });
        } else {
            if (result.length > 0) {
                res.status(409).json({
                    title: "Error",
                    message: "Barangay already exists",
                    status: 409
                });
            } else {
                //Add barangay
                let insertQuery = "INSERT INTO `barangay` (`BarangayName`, `BarangayLimits`) VALUES ('" + barangayName + "', '" + barangayLimits + "')";
                db.query(insertQuery, (err, result) => {
                    if (err) {
                        res.status(500).json({
                            title: "Error",
                            message: "An error occurred while adding the barangay",
                            status: 500
                        });
                    } else {
                        res.status(201).json({
                            title: "Success",
                            message: "Barangay added successfully",
                            status: 201
                        });
                    }
                });
            }
        }
    });
});





module.exports = router;