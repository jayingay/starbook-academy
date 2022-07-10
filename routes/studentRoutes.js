const express = require('express');
const router = express.Router();
const newConnection = require('../lib/mySqlDb.js');
const path = require('path');
const jwt = require('jsonwebtoken');

//controllers
const staticPageController = require('../controller/staticPageController.js');
const viewRecordsController = require('../controller/viewRecordsController.js');
const editRecordsController = require('../controller/editRecordsController.js');
const addRecordsController = require('../controller/addRecordsController.js');
const viewDetailsController = require('../controller/viewDetailsController.js');
const { loginValidation } = require('../middleware/validation.js')

//static view

//home
router.get('/home', staticPageController.homepage_view);

//about
router.get('/about', staticPageController.about_view);

//login
router.get('/login', staticPageController.login_view );


//dashboard view
router.get('/dashboard', staticPageController.dashboard_view);

//dashboard
router.get('/dashboard/manage-student', viewRecordsController.view_records);


//add-student view add record
router.get('/dashboard/add', addRecordsController.add_view);
router.post('/dashboard/update', addRecordsController.add_student);

//edit-student view and update
router.get('/dashboard/edit/:id', editRecordsController.edit_view);
router.post('/dashboard/edit/:id', editRecordsController.update_records);


//view-student-details
router.get('/dashboard/view/:id', viewDetailsController.view_details);

//login 
// router.post('/login', async(req, res)=>{
    
//     let user = {};

//     const {error} = loginValidation(req.body);
//     if(error) return res.redirect('/?error=' + encodeURIComponent(error.details[0].message));

//     newConnection.query(
//         "SELECT * tbluser WHERE email =?", [req.body.email], (err, rows, fields) => {
//             rows.length ? user = rows[0] : user = {};
//         }
//     );

//     const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
//     await sleep(1000);

//     if(!user.email) return res.redirect('/?error=' + encodeURIComponent('Email Does not exists! '));
    
//     redirect('/login');
// });

module.exports = router;