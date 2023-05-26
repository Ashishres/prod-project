import { Component } from '@angular/core';
import motherboardData from '../../json/motherboard.json';
import { Router } from '@angular/router';
import { dataserviceService } from '../cpudataservice.service';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent {
  motherboardData = motherboardData;

  constructor(private router: Router, private cpuservice: dataserviceService) {}

  onAddButtonClick(rowData: any) {
  
    this.cpuservice.setmotherdata([rowData]);

 
    this.router.navigate(['/build']);
  }
}
