//CONSTANTS
const express = require('express');
const path = require('path');
const dotenv = require('dotenv'); 


//DOTENV CONFIG
dotenv.config();


const app = express();
const port = process.env.PORT;


//BODY PARSING
app.use(express.json());
app.use(express.urlencoded({extended : false}))

//PATH
const views_path = path.join(__dirname, "../templates/views")
const static_path = path.join(__dirname, "../public")


//VIEW ENGINE CONFIG
app.set('view engine', 'ejs');
app.set('views', views_path);


//STATIC CONFIG
app.use(express.static(static_path))


//ROUTES
app.use(require('./routes/routes'))



//LISTENING
app.listen(3000, () => {
    console.log(`listening on port ${port}`)
})