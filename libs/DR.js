const mysql = require('mysql');

module.exports = {
    selectDr : async(pool) => {
        var sql = "select * from dr";
        return await pool.query(sql);
    },

    selectDrById : async(pool,ClassID) => {
        var sql = "select * from dr"
                + " where ClassID = ?"
        sql = mysql.format(sql,[ClassID]);
        console.log(sql);
        return await pool.query(sql);
    },

    deleteDr : async(pool,ClassID) => {
        var sql = "delete from dr"
                + " where ClassID = ?"
        sql = mysql.format(sql, [ClassID]);
        return await pool.query(sql);
        console.log(sql);
    },

    insertDr : async(pool, ClassName, ClassDetail, ClassTreatment) => {
        var sql = "INSERT INTO dr (ClassName, ClassDetail, ClassTreatment)"
                + " VALUES (?,?,?) "
                sql = mysql.format(sql, [ClassName, ClassDetail, ClassTreatment]);
        console.log(sql);
        return await pool.query(sql);

    },

    updateDr : async(pool,ClassName, ClassDetail, ClassTreatment ,ClassID ) => {
        var sql = "UPDATE dr"
                + " SET ClassName = ?, ClassDetail = ?, ClassTreatment = ?"
                + " WHERE ClassID = ?"
                sql = mysql.format(sql, [ClassName, ClassDetail, ClassTreatment, ClassID ]);
        console.log(sql);
        return await pool.query(sql);

    },
}