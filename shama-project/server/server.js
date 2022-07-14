const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('./config/db');
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

app.use(express.static(path.join(__dirname,'../build')))

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.get('/api', function(req,res){
    db.query("SELECT * FROM test", (err, data) => {
        if(!err) res.send(data);
        else res.send(err);
    })
})

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, '../build/index.html'))
})