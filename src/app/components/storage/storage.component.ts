import { Component } from '@angular/core';
import storageData from '../../json/storage.json';
import { Router } from '@angular/router';
import { dataserviceService } from '../cpudataservice.service';
@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {
  storageData = storageData;

  constructor(private router: Router, private cpuservice: dataserviceService) {}

  onAddButtonClick(rowData: any) {
  
    this.cpuservice.setstoredata([rowData]);

 
    this.router.navigate(['/build']);
  }
}
