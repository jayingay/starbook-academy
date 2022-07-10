const newConnection = require('../lib/mySqlDb.js');

const view_details = (req, res) => {
    const id = req.params.id;
    let sql = `SELECT * from tblstudents WHERE studentID = ${id}`;
    let query = newConnection.query(sql, (err, result) =>{
        if(err) throw err;
        res.render('viewStudent', {
            records : result[0],
            title: "Records"
        });
    });
};

module.exports = {view_details};
