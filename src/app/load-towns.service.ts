import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class LoadTownsService {

  constructor(private http :HttpClient) {
     this.getJSON().subscribe(data=> {return (data);});
  }


  //  public getJSON(): Observable<any> {
    public getJSON() {
         return this.http.get("./assets/data.json");
     }

   }
