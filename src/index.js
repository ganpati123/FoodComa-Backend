const express = require("express");
//const bodyParser = require('body-parser');

const serverConfig = require('./config/serverConfig');
const connentDB = require("./config/dbConfig");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
// const User = require('./schema/userSchema');

const app = express();

/*app.use(bodyParser.json()); 
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());*/

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

// Routing middleware
// If your req route starts with /users then handle it using userRouter
app.use('/users', userRouter); // connects the router to the server 
app.use('/carts', cartRouter);

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message: "pong"});
})

app.listen(serverConfig.PORT, async() => {
   await connentDB();
   console.log(`Server started at port ${serverConfig.PORT}...!!`);

  /* const newUser = await User.create({
    email:'j@b.com',
    password: '723456',
    firstName: 'Ganniuu',
    LastName: 'jiiifi',
    mobileNumber: '1234563894'
   });

   console.log("created new user");
   console.log(newUser);*/
});


//LtTbjjXOT0sdJQMK