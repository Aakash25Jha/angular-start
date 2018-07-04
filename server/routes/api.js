const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const con = mysql.createConnection({
host: "localhost",
user: "root",
password: "1234567890",
database: 'db_form', 
});
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "INSERT INTO registration (Firstname,Lastname,Username,Password,EmailID,Phone) VALUES ('r.target.elements[0].value', 'r.target.elements[0].value','r.target.elements[1].value','r.target.elements[2].value','r.target.elements[3].value','r.target.elements[4].value','r.target.elements[5].value')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

router.get('/users',(req, res) =>{
    con.query("select * from registration" , function(err, result){
        if(err) throw err;
        response.data = result;
        res.json(response);
        console.log(result);
    });

});

router.post('/data', function(req, res){
    console.log('here............');
    //     res.send(JSON.stringify({
    //         firstName: req.body.r.target.elements[0].value|| null,
    //         lastName: req.body.r.target.elements[0].value|| null,
    //         userName: req.body.r.target.elements[0].value|| null,
    //         passworD: req.body.r.target.elements[0].value|| null,
    //         EmailId: req.body.r.target.elements[0].value|| null,
    //         phone: req.body.r.target.elements[0].value|| null,
    // }));

    Firstname = req.body.firstname;
    Lastname = req.body.lastname;
    Username = req.body.username;
    Password = req.body.password;
    EmailID = req.body.emailId;
    Phone = req.body.phone;

    console.log('..............' +Firstname);
    var sql = "INSERT INTO registration (Firstname,Lastname,Username,Password,EmailID,Phone) VALUES ('firstName,lastName,userName,passworD,EmailId,phone')";
    con.query(sql, function (err, result){
        if(err) throw err;
        // console.log("1 record inserted");
        // response.data = result;
        // res.json(response);
        console.log(result);
    });

});

let response = {
    status: 200,
    data: [],
    message: "successful!"
};

module.exports = router;