import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  users: Array<any>;

  constructor(private _dataService: DataService) {

    this._dataService.getUsers()
    .subscribe(res => this.users =res);
   }

  ngOnInit() {
  }

}
