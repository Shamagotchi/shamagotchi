require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
// const db = require('./config/db');
const db = require('./database/database')
const PORT = process.env.PORT || 3001;
const session = require('express-session')
const passport = require('passport');
const discordStrategy = require('./strategies/discordstrategy')
// Routes
const authRoute = require('./routes/auth')
const dashboardRoute = require('./routes/dashboard')

db.then(() => console.log('Connected to MongoDB,')).catch(err => console.log(err))

app.use(express.json())
app.use(cors())

app.use(session({
    secret : 'some random secret',
    cookie : {
        maxAge : 60000 * 60 * 24,
    },
    saveUninitialized : false,
    name : 'discord.oauth2'
}))

//passport
app.use(passport.initialize());
app.use(passport.session());

//Middleware Routes
app.use('/auth', authRoute)
app.use('/dashboard', dashboardRoute)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

//MySQL
// app.get('/api', function(req,res){
//     db.query("SELECT * FROM test", (err, data) => {
//         if(!err) res.send(data);
//         else res.send(err);
//     })
// })

function isAuthorized(req, res, next){
    if(req.user){
        console.log("User is logged in.")
        res.redirect('/dashboard')
    }
    else{
        console.log("User is not logged in.")
        next()
    }
} 

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

app.use(express.static(path.join(__dirname,'../build')))
