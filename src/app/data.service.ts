import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
;
@Injectable({
  providedIn: 'root'
})
export class DataService {
  result:any;

  constructor(private _http: Http) { }

  getUsers()
  {
    return this._http.get("/api/users")
    .map(result => this.result = result.json().data);
  }

  saveUsers(data)
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(data);
    return this._http.post("/api/data" , data, options).toPromise();
  }




}
