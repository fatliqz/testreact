const express = require('express');
const util = require('util');
const app = express();
const cors = require('cors');
const port = 8080;

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'clinic',
});

const bodyParser = require('body-parser');
pool.query = util.promisify(pool.query);
app.use(cors());
app.use(bodyParser.json());

const Dr = require("./libs/DR");

app.get("/api/sel", async (req, res) => {
    try {
        var results = await Dr.selectDr(pool);
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
app.get("/api/selById/:ClassID", async (req, res) => {
    const ClassID = req.params.ClassID;
    try{
        var results = await Dr.selectDrById(pool, ClassID);
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

app.post("/api/del", async (req, res) => {
    const input = req.body;
    try{
        var results = await Dr.deleteDr(pool, input.ClassID);
        res.json({
            result: true,
        });

    } catch (ex) {
        res.json({
            result: false,
            message: ex.message
        });
    }
});

app.post("/api/insert", async (req, res) => {
    const input = req.body;
    try{
        var results = await Dr.insertDr(pool, input.ClassName , input.ClassDetail , input.ClassTreatment);
        res.json({
            result: true,
        });

    } catch (ex) {
        res.json({
            result: false,
            message: ex.message
        });
    }
});




// uyfu

app.post("/api/update", async (req, res) => {
    const input = req.body;
    try{
        var results = await Dr.updateDr(pool , input.ClassName , input.ClassDetail , input.ClassTreatment , input.ClassID);
        res.json({
            result: true,
        });

    } catch (ex) {
        res.json({
            result: false,
            message: ex.message
        });
    }
});
 
app.get('/', (req,res) => {
    res.send('Hello express1');
});

app.listen(port,() => {
    console.log(`Example app port ${port}`);
});