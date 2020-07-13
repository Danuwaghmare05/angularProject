import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styles: [],
})
export class TempFormsComponent {
  showData(tempVar) {
    console.log(tempVar);
  }
}
