const express = require('express');

const sequelize = require('./util/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','PST','PUT','DELETE');
    next();
});

app.use('/company', require('./routes/company'));
app.use('/employee', require('./routes/employee'));
app.use('/client-admin', require('./routes/clientAdmin'));

(async () =>{
    try {
        // wait for create db successful
        await sequelize.sync(
            {force: false}
        );
        console.log("start");
        app.listen(process.env.EXTERNAL_PORT || 3001);
    } catch (error) {
        console.error(error);
    }
})()