import { Component } from '@angular/core';
import gpuData from '../../json/gpu.json';
import { Router } from '@angular/router';
import { dataserviceService } from '../cpudataservice.service';
@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css']
})
export class GpuComponent {
  gpuData = gpuData;

  constructor(private router: Router, private cpuservice: dataserviceService) {}

  onAddButtonClick(rowData: any) {
  
    this.cpuservice.setgpudata([rowData]);

 
    this.router.navigate(['/build']);
  }
}
