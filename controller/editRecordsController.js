const newConnection = require('../lib/mySqlDb.js');

//get record by ID
const edit_view = (req, res) => {
    const id = req.params.id;
    let sql = `SELECT * from tblstudents WHERE studentID = ${id}`;
    let query = newConnection.query(sql, (err, result) =>{
        if(err) throw err;
        res.render('editStudent', {
            records : result[0],
            title: "Records"
        });
    });
};

//updete records
const update_records = (req, res) => {
    const id = req.params.id;
    let sql = "UPDATE tblstudents SET first_name='"+req.body.first_name+"', last_name='"+req.body.last_name+"', address='"+req.body.address+"', gender='"+req.body.gender+"', dob='"+req.body.dob+"', email='"+req.body.email+"', status='"+req.body.status+"', average='"+req.body.average+"', subject1='"+req.body.subject1+"', subject2='"+req.body.subject2+"', subject3='"+req.body.subject3+"' WHERE studentID = "+id;
    let query = newConnection.query(sql,(err, results)=>{
        if(err) throw err;
        res.render('editStudent', {
            title:'',
            records:results,
            sucess: "Records updated succesfully!"
        });
    });
}

module.exports = {
    edit_view,
    update_records
}