import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
;
@Injectable({
  providedIn: 'root'
})
export class DataService {
  result:any;
  r :any;

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
    this._http.post("/api/data" , data, options).subscribe(result => {
       console.log('sucessful!!')
  }); 
  }

  validateUsers(data): Promise<any>
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // console.log(data);
  //   this._http.post("/api/validate",data, options).subscribe(result => {this.r = result,
  //   console.log(this.r),
  //   return this.r.body;
  // });

  let res = this._http.post("/api/validate",data, options).toPromise().then(this.extractData)
  .catch(this.handleErrorPromise);
  console.log(res)
  return res;
    // .map(result => this.result = result.json().data);
  }

  private extractData(res: Response) {
    let body = res.json();
          return body || {};
      }

      private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
          }	




}
