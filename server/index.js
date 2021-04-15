const express = require('express');

const app = express();

// STEP 1
app.get('/step-1-1', (req, res) => {
    res.status(200).send("[GET] Hello World! - Step 1-1")
});

app.get('/step-1-2', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*'); // Allow all origins!
    res.status(200).send("[GET] Hello World! - Step 1-2")
});

// STEP 2
app.get('/step-2-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({result: '[GET] Hello World! - Step 2-1'})
});

app.put('/step-2-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({result: '[PUT] Hello World! - Step 2-1'})
});

// STEP 3
app.options('/step-3-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send()
});
app.get('/step-3-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({result: '[GET] Hello World! - Step 3-1'})
});

// STEP 4
app.options('/step-4-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', 'GET,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).send()
});
app.get('/step-4-1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', 'GET,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json({result: '[GET] Hello World! - Step 4-1'})
});

app.options('/step-4-2', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', 'GET,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).send();
});

app.put('/step-4-2', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', 'GET,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json({result: "[PUT] Hello World! Step 4-2"})
});

// START
const port = process.env.PORT || 4000;
console.log(`SERVER STARTED ON PORT ${port}`);
app.listen(port);