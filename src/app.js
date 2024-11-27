const express = require('express');
const app = express();

// This function is knows as request handler
app.use("/", (req, res, next) => {
    if (req.path === "/") {
        res.send("Home Dashboard");
    } else {
        next(); // Pass control to the next middleware
    }
});

app.use("/user", (req, res) => {
    res.send("User Dashboard");
});

app.use("/admin", (req, res) => {
    res.send("Admin Dashboard");
});

app.listen(7777, () => {
    console.log("Server is listening on port 7777"); 
});

