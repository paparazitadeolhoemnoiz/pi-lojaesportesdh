const express = require('express');
const path = require('path');
const myParser = require('body-parser');

const app = express();

const port = 80

app.listen(port, () => {
    console.log('Iniciando servidor....');
});

app.get('/dhSports', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
});