// leomarqz
const express = require('express');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 3000); // port assignment
app.set('json spaces', 2);

// routes
app.use(require('./routes/api.js'));

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// server listening
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port [ ${app.get('port')} ]`);
});

