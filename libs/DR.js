const mysql = require('mysql');

module.exports = {
    selectDR: async (pool) => {
        var sql = 'select * from dr';
        return await pool.query(sql);
    }
    // selectDRById: async (pool, ClassID) => {
    //     var sql = "select * from dr "
    //         + "where ClassID = ? "
    //     sql = mysql.format(sql, [ClassID]);
    //     return await pool.query(sql);
    // },
}