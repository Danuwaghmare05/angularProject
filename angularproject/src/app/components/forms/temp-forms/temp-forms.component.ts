import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styles: [],
})
export class TempFormsComponent {
  cities = [
    { code: 1, name: 'Pune' },
    { code: 2, name: 'Mumbai' },
    { code: 3, name: 'Nagpur' },
    { code: 4, name: 'Hyderabad' },
    ,
  ];

  showData(tempVar) {
    console.log(tempVar);
  }

  formShow(fTempVar) {
    console.clear();
    console.log(fTempVar);
  }
}
