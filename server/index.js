const express = require('express');

const app = express();
app.get('/step-1-1', (req, res) => {
    res.status(200).send("[GET] Hello World! - Step 1-1")
});

app.get('/step-1-2', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*'); // Allow all origins!
    res.status(200).send("[GET] Hello World! - Step 1-2")
});

app.post('/step-1-2', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send("[PUT] Hello World! - Step 1-2")
});

app.options('/step-2-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'OPTIONS,GET');
    res.set("Access-Control-Allow-Headers", "Content-Type, Accept");
    
    res.status(200).send()
});

app.get('/step-2-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'OPTIONS,GET');
    res.set("Access-Control-Allow-Headers", "Content-Type, Accept");
    
    res.status(200).json({result: 'Hello World! - Step 2-1'})
});

const port = process.env.PORT || 4000;
console.log(`SERVER STARTED ON PORT ${port}`);
app.listen(port);