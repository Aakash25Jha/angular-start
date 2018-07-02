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
    // con.connect(function(err){
    //     if(err) throw err;
    //     console.log(connect);
    // });
    con.query("select * from registration" , function(err, result){
        if(err) throw err;
        response.data = result;
        res.json(response);
        console.log(result);
    });

});

let response = {
    status: 200,
    data: [],
    message: "successful!"
};

module.exports = router;