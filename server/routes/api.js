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
    var Firstname = req.body.Firstname;
    var Lastname = req.body.Lastname;
    var Username = req.body.Username;
    var Password = req.body.Password;
    var EmailID = req.body.EmailID;
    var Phone = req.body.Phone;

    var sql = "INSERT INTO registration (Firstname,Lastname,Username,Password,EmailID,Phone) VALUES (?,?,?,?,?,?)";
    con.query(sql,[Firstname,Lastname,Username,Password,EmailID,Phone], function (err, result){
        if(err) throw err;
    });

});

router.post('/validate',function(req,res){
    var Username= req.body.Username;
    // console.log(req);
    var Password= req.body.Password;
    var sql="SELECT *  FROM registration WHERE Username=?" 
    con.query(sql,[Username], function(err, result){
        if(err) throw err;
        response.data = result;
        res.json(response);
        // console.log(Password);
    });

let response = {
    status: 200,
    data: [],
    message: "successful!"
};
});
module.exports = router;


