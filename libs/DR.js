const mysql = require('mysql');

module.exports = {
selectDR : async(pool) => {
    var sql = 'select * from dr';
    return await pool.query(sql);
}
}