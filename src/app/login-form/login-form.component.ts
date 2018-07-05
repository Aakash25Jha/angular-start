import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../data.service';
// import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  users: any;
  constructor(private router: Router, private  _dataService: DataService) {

   }

  ngOnInit() {
  }

  LoginFunc(e): void
  {
    // e.preventDefault();
    console.log(e);
    var Username = e.target.elements[0].value;
    var Password = e.target.elements[1].value;
    let data ={
      Username : Username,
      Password : Password,
    }
    console.log(data);
    
    
    this._dataService.validateUsers(data).then(res => {this.users = res,
      console.log(this.users.data[0].Password);
      console.log(this.users.data);
      let passwd = this.users.data[0].Password;
      let username = this.users.data[0].Username;
      if(Password===passwd){
        console.log('login successfull');
        this.router.navigate(['/demo' ,{Username: username}]);
      }
      else{
        console.log('login unsuccessfull');
        window.alert('User Name and Password does not matches');
      }
    }); 
   
  }

  RegisterFunc(e)
  {
    // e.preventDefault();
    this.router.navigate(['/register']);
  }

  
}

