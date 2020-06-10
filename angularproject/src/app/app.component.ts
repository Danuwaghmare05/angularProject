import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello Angular';

  cityArr = ['Pune', 'Mumbai', 'Hydrabad'];
  //console.log(cityArr);

  studInfo = [
    {
      id: 1001,
      name: 'Danu',
      age: 25,
      address: 'Pune',
    },
    {
      id: 1002,
      name: 'Nitu',
      age: 22,
      address: 'Nagpur',
    },
    {
      id: 1003,
      name: 'Siddhi',
      age: 20,
      address: 'Bhandara',
    },
    {
      id: 1004,
      name: 'Shruti',
      age: 20,
      address: 'Tumsar',
    },
  ];
}
