import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  users: Array<any>;
  name : any;

  constructor(private _dataService: DataService, private route : ActivatedRoute) {
    this.name = this.route.snapshot.params['Username'];
    console.log(this.name);

    // this._dataService.getUsers()
    // .subscribe(res => this.users =res);
   }

  ngOnInit() {
  }

}
