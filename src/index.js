const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const { v4: uuid } = require('uuid');
const {format} = require('timeago.js');

//Inicializacciones
const app = express();
require('./database');



//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    filename: (req, file, cb, filename)=>{
        destination: path.join(__dirname, 'public/img/uploads')
      cb(null, uuid() + path.extname(file.originalname));      
    }
})

app.use(multer({
    storage: storage
}).single('image'))




//Variables Globales
app.use((req, res, next) => {
    app.locals.format = format;
    next();
});


//Routes
app.use(require('./routes/index'));



//Static Files
app.use(express.static(path.join(__dirname, 'public')));



//Server is starts
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});