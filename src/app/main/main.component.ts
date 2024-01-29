import { Component } from '@angular/core';
import jsonData from '../../assets/landmark.json'
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppdataService, Landmark } from '../service/appdata.service';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  temp = jsonData;
  landmarks: any[] = jsonData;
  landmark: any;
  idx: any;


  constructor(private activeatedRouter: ActivatedRoute, private router: Router, private ADS: AppdataService) {

    console.log(this.landmark);
    console.log(this.ADS.id);
    this.getLandmarkCountry();
    if(this.ADS.store.length > 0 ){
      this.landmarks = this.ADS.store ;
      this.landmark = null ;
    }


  }




  findOne(id: HTMLInputElement) {
    this.landmarks = jsonData;
    console.log(id.value);
    this.landmark = null;
    this.landmark = this.landmarks.filter((item) => item.idx === Number(id.value))[0];
    this.ADS.setStore([this.landmark]);
    // for (const lm of this.landmarks) {
    //   if (lm.idx.toString() == id.value) {
    //     console.log(lm);
    //     this.landmark = lm;
    //     return;
    //   }
    // }


  }




  gotoDetail(idx: number) {
    this.landmarks = jsonData;
    let object = this.landmarks.filter((item) => item.idx === idx);
    this.ADS.setObject(object[0]);
    this.router.navigate(['/detail'])
  }


  searchName(value: string) {
    this.landmarks = jsonData;
    console.log(value);
    let searchLandmark: Landmark[] = [];
    let search = this.landmarks.map((item) => {
      if (item.name.match(value)) {
        searchLandmark.push(item);
      }
    });
    console.log(searchLandmark);
    this.landmarks = searchLandmark;
    this.ADS.setStore(searchLandmark);
    this.landmark = null;
  }


  getLandmarkCountry() {
    let country: any = {};
    let landmarkAll = jsonData;
    landmarkAll.map((item) => {
      if (!country[String(item.country)]) {
        country[String(item.country)] = {

        }
      }
    })
    return Object.keys(country);
  }


  findSelected(val: HTMLSelectElement) {
    this.landmarks = jsonData;
    // console.log(val.value);
    let land = this.landmarks.filter((item) => item.country === val.value);
    // console.log(land);
    this.landmarks = land;
    this.ADS.setStore(land) ; 
    console.log(this.ADS.store);
    this.landmark = null;
  }






}
