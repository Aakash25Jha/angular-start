import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit 
{
      fname : string = '';
      lname : string ='';
      uname :string = '';
      pwd : any;
      emailid: any;
      phone: any;
      pwdPattern = '^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$';
      phonePattern ='[0-9]{10}';
      emailPattern ='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
      

  constructor(private router:Router, private _dataService: DataService) { }

  ngOnInit() {
  }
  registerUser(r)
  {
    //console.log(r)
    r.preventDefault();
    var flag = this.validationFunction(r);

    let data = {
      firstname:r.target.elements[0].value,
     lastname:r.target.elements[1].value,
     username:r.target.elements[2].value,
     password:r.target.elements[3].value,
     emailId:r.target.elements[4].value,
     phone:r.target.elements[5].value,
    }
  // console.log(data);
    if(flag==0)
    {
      this._dataService.saveUsers(data); 
      
    this.router.navigate([''])
    console.log("sucessfull!");
    }
  }
  
  validationFunction(r)
  {
    var firstname=r.target.elements[0].value;
    var lastname=r.target.elements[1].value;
    var username=r.target.elements[2].value;
    var password=r.target.elements[3].value;
    var emailId=r.target.elements[4].value;
    var phone=r.target.elements[5].value;
    if(this.firstNameValidate(firstname)==false)
      return 1;
    if(this.lastNameValidate(lastname)==false)
      return 1;
    if(this.userNameValidate(username,firstname)==false)
      return 1;
    if(this.passwordValidate(password)==false)
      return 1;
    if(this.emailValidate(emailId)==false)
      return 1;
    if(this.phoneValidate(phone)==false)
      return 1;
    else
    return 0;
  }

  firstNameValidate(firstname)
  {
    if(firstname == "")
    {
      //alert("First Name is Empty");
      //document.getElementById("fnameError").innerHTML= "First Name is empty";
      return false;
    }
    else if(firstname.length >= 10)
    {
      ////alert("Characters Should be less than 10");00
      return false;
    }
      return true;
  }

  lastNameValidate(lastname){
    if(lastname == ""){
      ////alert("last Name is Empty");
      return false;
    }
    else if(lastname.length >= 10){
      ////alert("Characters Should be less than 10");
      return false;
    }
    return true;
  }
  userNameValidate(username,firstname)
  {
    if(username == ""){
      //alert("user Name is Empty");
      return false;
    }
    else if(username.length >= 10){
     //alert("Characters Should be less than 10");
      return false;
    }
      return true;
  }

  passwordValidate(password)
  
  {
    var ze=/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    if(password.length<6)
    {
      //alert("Password should be longer than 6 characters");
      return false;
    }

    else if(!ze.test(password))
    {
      //alert("Password should contain atleast one lower case");
      return false;
    }
    return true;
  }
  emailValidate(emailId)
  {
    var re = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
    if(re.test(emailId.uppercase))
    {
      //alert("The email id is entered incorrectly");
      return false;
    }
    return true;
  }

  phoneValidate(phone)
  {
    var i=isNaN(phone);
    if(phone == null || phone== "")
    {
      //alert("Phone number should not be left empty");
      return false;
    }
    else if(i==true)
    {
      //alert("Phone number should only be integer");
      return false;
    }
    return true;
  }
}