import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit 
{
  registrationForm : FormGroup;
      Firstname : string = '';
      Lastname : string ='';
      uname :string = '';
      pwd : any;
      emailid: any;
      phone: any;
      pwdPattern = '^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$';
      phonePattern ='[0-9]{10}';
      emailPattern ='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
      Firstname1 : any;
      // registerForm : NgForm;
      // @ViewChild('myForm') currentForm: NgForm;
      

  constructor(private router:Router, private _dataService: DataService, private _formbuilder : FormBuilder) {
    // console.log(this.registerForm)
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this._formbuilder.group({
      Firstname: ['', Validators.required ],
      Lastname: ['', Validators.required ],
      Username : ['', Validators.required],
      EmailID : ['', Validators.required],
      Phone: ['', Validators.required],
      Password :['', Validators.required]
    });
  }

  submitRegistrationForm(){
    console.log(this.registrationForm);
    let Firstname = this.registrationForm.value.Firstname;
    let Lastname = this.registrationForm.value.Lastname;
    let Username = this.registrationForm.value.Username;
    let EmailID = this.registrationForm.value.EmailID;
    let Phone = this.registrationForm.value.Phone;
    let Password = this.registrationForm.value.Password;
    
    if(Firstname==="" || Lastname==="" || Username==="" || EmailID ==="" || Phone ==="" || Password===""){
    this.registrationForm.controls['Lastname'].markAsTouched();
    this.registrationForm.controls['Username'].markAsTouched();
    this.registrationForm.controls['EmailID'].markAsTouched();
    this.registrationForm.controls['Phone'].markAsTouched();
    this.registrationForm.controls['Firstname'].markAsTouched();
    this.registrationForm.controls['Password'].markAsTouched();
    }
    else{
    let data={
    Firstname : Firstname,
    Lastname : Lastname,
    Username : Username,
    EmailID : EmailID,
    Phone : Phone,
    Password: Password
    }
    console.log(data);
    // this._dataService.saveUsers(data); 
      
    this.router.navigate([''])
    console.log("sucessfull!");
    }
  }
  registerUser(r)
  {
    //console.log(r)
    r.preventDefault();
    var flag = this.validationFunction(r);


    let data = {
      Firstname:r.target.elements[0].value,
      Lastname:r.target.elements[1].value,
      Username:r.target.elements[2].value,
      Password:r.target.elements[3].value,
      EmailID:r.target.elements[4].value,
      Phone:r.target.elements[5].value,
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
    var Password=r.target.elements[3].value;
    var emailId=r.target.elements[4].value;
    var phone=r.target.elements[5].value;
    if(this.firstNameValidate(firstname)==false)
      return 1;
    if(this.lastNameValidate(lastname)==false)
      return 1;
    if(this.userNameValidate(username,firstname)==false)
      return 1;
    if(this.passwordValidate(Password)==false)
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
      // this.Firstname1.markAsTouched();
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
      lastname.markAsTouched();
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

  passwordValidate(Password)
  
  {
    var ze=/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    if(Password.length<6)
    {
      //alert("Password should be longer than 6 characters");
      return false;
    }

    else if(!ze.test(Password))
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
      //alert("The EmailID id is entered incorrectly");
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