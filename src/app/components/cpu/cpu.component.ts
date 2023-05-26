import { Component } from '@angular/core';
import cpuData from '../../json/cpu.json';
import { Router } from '@angular/router';
import { dataserviceService } from '../cpudataservice.service';
@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent {
  cpuData=cpuData


  constructor(private router: Router, private cpuservice: dataserviceService) {}

  onAddButtonClick(rowData: any) {
  
    this.cpuservice.setData([rowData]);

 
    this.router.navigate(['/build']);
  }
  // ngOnInit() : void {
  //   this.cpuservice.getData()
  // }
}
