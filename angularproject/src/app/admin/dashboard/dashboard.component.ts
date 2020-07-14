import { DashboardProductService } from './../../service/dashboard-product.service';
import { Component, OnInit } from '@angular/core';
import { MobParts } from 'src/app/models/mob-parts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private dps: DashboardProductService) {}
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    let dps = new DashboardProductService();
    this.mobParts = dps.getMobParts();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };
  }
  mobParts: MobParts[];
}
