import { Component } from '@angular/core';
import supplyData from '../../json/powerSupply.json';
import { Router } from '@angular/router';
import { dataserviceService } from '../cpudataservice.service';
@Component({
  selector: 'app-power-supply',
  templateUrl: './power-supply.component.html',
  styleUrls: ['./power-supply.component.css']
})
export class PowerSupplyComponent {
  supplyData = supplyData;

  constructor(private router: Router, private cpuservice: dataserviceService) {}

  onAddButtonClick(rowData: any) {
  
    this.cpuservice.setsuppdata([rowData]);

 
    this.router.navigate(['/build']);
  }
}
