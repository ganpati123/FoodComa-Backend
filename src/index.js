const express = require("express");
//const bodyParser = require('body-parser');

const serverConfig = require('./config/serverConfig');
const connentDB = require("./config/dbConfig");

const app = express();

/*app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());*/

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message: "pong"});
})

app.listen(serverConfig.PORT, async() => {
   await connentDB();
   console.log(`Server started at port ${serverConfig.PORT}...!!`);
});


//LtTbjjXOT0sdJQMK