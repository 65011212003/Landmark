import { Component } from '@angular/core';
import { AppdataService, Landmark } from '../service/appdata.service';
import jsonData from '../../assets/landmark.json'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {


  id : number = 0 ;

  obj: Landmark = {} ;


  constructor(private ADS : AppdataService , private router : Router){
    console.log(this.ADS.id);
    this.id = this.ADS.id ;
    this.obj = this.ADS.object
    console.log(this.obj);
    
  }


  goBack() {
    this.router.navigate(['/']) ;
  }

  

}
