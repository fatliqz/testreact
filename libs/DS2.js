const mysql = require('mysql');
const {selectDR} = require('./DR');

module.exports = {
    selectDR: async (pool) => {
        var sql = `select * from dr `;
        return await pool.query(sql);
    },
    selectDRById: async (pool,ClassID) => {
        var sql = `select * from dr `
            + `where ClassID = ? `
            sql = mysql.format(sql,[ClassID]);
        return await pool.query(sql);
    }
}