const express = require('express');
const util = require('util');
const app = express();
const cors = require('cors');
const port = 8080;

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clinic'
});

const bodyParser = require('body-parser');
pool.query = util.promisify(pool.query);
app.use(cors());
app.use(bodyParser.json());

const DR = require("./libs/DR");
const DS2 = require("./libs/DS2");


app.get("/api/sel", async (req, res) => {

    try {

        var results = await DR.selectDR(pool);

        res.json({
            result: true,
            data: results
        });

    } catch (ex) {
        res.json({
            result: false,
            message: ex.message
        });
    }
});

app.get("/api/sel/ById/:ClassID", async (req, res) => {
    const classid = req.params.ClassID;

    try {

        var results = await DS2.selectDRById(pool.classid);

        res.json({
            result: true,
            data: results
        });

    } catch (ex) {
        res.json({
            result: false,
            message: ex.message
        });
    }
})

app.get('/', (req, res) => {
    res.send('Hello exam');
});

app.listen(port, () => { console.log(`exam app port${port}`)});

