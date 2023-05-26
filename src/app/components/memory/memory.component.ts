import { Component } from '@angular/core';
import memoryData from '../../json/memory.json';
import { Router } from '@angular/router';
import { dataserviceService } from '../cpudataservice.service';
@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent {
  memoryData = memoryData;

  constructor(private router: Router, private cpuservice: dataserviceService) {}

  onAddButtonClick(rowData: any) {
  
    this.cpuservice.setmemdata([rowData]);

 
    this.router.navigate(['/build']);
  }
}
