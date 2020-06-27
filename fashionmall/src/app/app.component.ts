import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class FirstComponent {
  title = 'Angular Welcome ...!';

  mobParts = [
    {
      id: 1001,
      name: 'Screen 1',
      instock: 0,
      titleColor: 'pink',
      isOnline: true,
    },
    {
      id: 1002,
      name: 'Screen 2',
      instock: 15,
      titleColor: 'green',
      isOnline: false,
    },
    {
      id: 1003,
      name: 'Screen 3',
      instock: 45,
      titleColor: 'blue',
      isOnline: true,
    },
  ];
}
