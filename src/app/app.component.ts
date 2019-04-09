import { Component, OnInit } from '@angular/core';
import { LoadTownsService } from './load-towns.service';
LoadTownsService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cities';
  cities;

/*  constructor(
     private wilayas : LoadTownsService
 ) {

this.cities = wilayas.getJSON;

};*/

//ngOnInit(){
  /*return   this.wilayas.getJSON().subscribe(data => {
         console.log(data);
     });*/
//}
}
