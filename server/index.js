const express = require('express');

const app = express();

app.get('/hello-world', (req, res) => {
    console.log("GET hello-world")
});

app.put('/hello-world', (req, res) => {
    console.log("PUT hello-world")
})

const port = process.env.PORT || 4000;
console.log(`SERVER STARTED ON PORT ${port}`);
app.listen(port);