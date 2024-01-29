import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    {path : '' , component : MainComponent} ,
    {path : 'detail' , component : DetailComponent}
];
