const newConnection = require('../lib/mySqlDb.js');


//add student view
const add_view = (req, res) =>{
    res.render('addStudent', {header:'Add Student', message:'Add Student', });
}

//add student
const add_student = (req, res) =>{
    var post = req.body;
    var firstName = post.first_name;
    var lastName = post.last_name;
    var address = post.address;
    var gender = post.gender;
    var dob = post.dob;
    var email = post.email;
  
    if(!req.files)
        return res.status(400).send('No files were uploaded');
        var file = req.files.uploaded_image;
        var img_name = file.name;
        
        if(file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif"){
            file.mv('public/images/uploaded_images/'+file.name, function(err){

                if(err)

                    return res.status(500).send(err);
                    let sql = "INSERT INTO `tblstudents` (`first_name`, `last_name`, `address`, `gender`, `dob`, `email`, `image`) VALUES ('"+ firstName +"', '"+ lastName +"', '"+ address +"', '"+ gender +"', '"+ dob +"', '"+ email +"', '"+ img_name +"')"; 
                    let query = newConnection.query(sql, (err, results)=>{
                        if(err) throw err;
                        res.render('addStudent', {title: "Add Student", message:"Records added successfully", records:results})
                    });
            });
        }else {
            res.render('addStudent', {title: "Add Student", message:"jpeg,png,gif only", records:results})
        }
};

module.exports = {
    add_view,
    add_student
}