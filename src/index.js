const express = require('express');
const morgan = require('morgan');
const app = express();
const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars');
const port = 3000;
const path = require('path');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
            app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes initial
route(app);

app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`);
});
