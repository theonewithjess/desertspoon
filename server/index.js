require('dotenv').config()
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    session = require('express-session'),
    {CONNECTION_STRING, SERVER_PORT: PORT, SESSION_SECRET, APP_ID, APP_KEY} = process.env,
    fl = require('./controller/FoodLog')

app.use(bodyParser.json())

// app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('desertspoon connected')
})



//user endpoints



//food log endpoints
app.get('/api/foodlog', fl.getLog)
app.post('/api/foodlog', fl.addToLog)
app.put('/api/foodlog', fl.updateLogItem)
app.delete('/api/foodlog', fl.deleteLogItem)



app.listen(PORT, () => {
    console.log('desertspoon listening on port', PORT)
})