import { Component, OnInit } from '@angular/core';
import {wilaya} from '../wilaya';
import{WILAYAS} from '../mock-wilaya'

@Component({
  selector: 'app-wilaya',
  templateUrl: './wilaya.component.html',
  styleUrls: ['./wilaya.component.css']
})
export class WilayaComponent implements OnInit {

titre ="Wilaya";
wilayas= WILAYAS;
/*city:wilaya={
  code: '15',
   number_daira: '25',
  number_commune: '156',
   area: '450',
   population_66: '10532',
  population_77: '256',
  population_08: '2566',
   density: '35'



}*/

selectedWilaya: wilaya;
onSelect(city: wilaya): void {
  this.selectedWilaya = city;
}
  constructor() { }

  ngOnInit() {

  }

}
