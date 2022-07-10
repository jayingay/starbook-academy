const newConnection = require('../lib/mySqlDb.js');

//get all records
const view_records = (req, res)=>{
    let sql = 'SELECT * FROM tblstudents';
    let query = newConnection.query(sql, (err, records)=>{
        if(err) throw err;
        res.render('manageStudent', {
            header: "Manage Student",
            records: records
        })
        // res.json(records);

    });  
};

module.exports = {
    view_records
}