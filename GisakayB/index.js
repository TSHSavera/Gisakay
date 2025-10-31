require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./routes/dbconfig');
const corsOptions = {
    origin: 'http://localhost',
    credentials: false,
    method: 'POST GET',
    headers: ['Access-Control-Allow-Origin', 'Content-Type']
};
const router = express.Router();
const path = require('path');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

const { StatusCodes, ReasonPhrases } = require('http-status-codes');

app.use(cors());

app.use("/auth", require('./routes/auth.js'));
app.use("/admin", require('./routes/admin.js'));

app.get("/", (req, res) => {
    res.status(StatusCodes.OK).json({
        title: "Server ready for requests",
        status: StatusCodes.OK,
    });
    console.log("Home request received from: " + req.headers.host);
});

//Handle all non-existent routes
app.get("*", (req, res) => {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
        title: "Error",
        status: StatusCodes.METHOD_NOT_ALLOWED,
        reason: ReasonPhrases.METHOD_NOT_ALLOWED
    });
    console.log("Invalid request received from: " + req.headers.host + " via " + req.headers.referer);
});

const httpServer = app.listen(process.env.PORT, function() {
    console.log("Server successfully started! Now listening on port " + process.env.PORT);
});



module.exports = app;