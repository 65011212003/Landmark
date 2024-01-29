import { Injectable } from '@angular/core';

export interface Landmark {
  idx?: number;
  name?: string;
  country?: string;
  detail?: string;
  url?: string;
}
@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  id: number = 0;

  object: Landmark = {};

  store: Landmark[] = [];

  constructor() {

    console.log(this.id);
    console.log(this.store);
  }

  setID(value: number) {
    this.id = value;
  }

  setObject(value: Landmark) {
    this.object = value;
  }

  setStore(value: Landmark[]) {
    this.store = value;
  }

}
