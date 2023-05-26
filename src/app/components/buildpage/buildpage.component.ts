import { Component,OnInit } from '@angular/core';
import { dataserviceService } from '../cpudataservice.service';
@Component({
  selector: 'app-buildpage',
  templateUrl: './buildpage.component.html',
  styleUrls: ['./buildpage.component.css']
})
export class BuildpageComponent implements OnInit {
  tableData: any;
  total : number = 0;
  constructor(public cpuservice:dataserviceService){
    this.cpuservice.currentcpu.subscribe((dataSub: any) => {
      this.cpudataa = dataSub;
      if(dataSub.length != 0){
      this.updateTotal(dataSub[0].price)
      }

     
  
    });
    this.cpuservice.currentgpu.subscribe((dataSub: any) => {
      this.gpudataa = dataSub;
      if(dataSub.length != 0){
      this.updateTotal(dataSub[0].price)
      }})

      this.cpuservice.currentmem.subscribe((dataSub: any) => {
        this.memdataa = dataSub;
        if(dataSub.length != 0){
        this.updateTotal(dataSub[0].price)
        }})

        this.cpuservice.currentmother.subscribe((dataSub: any) => {
          this.motherdataa = dataSub;
          if(dataSub.length != 0){
          this.updateTotal(dataSub[0].price)
          }})

          this.cpuservice.currentsupp.subscribe((dataSub: any) => {
            this.suppdataa = dataSub;
            if(dataSub.length != 0){
            this.updateTotal(dataSub[0].price)
            }})

            this.cpuservice.currentstore.subscribe((dataSub: any) => {
              this.stordataa = dataSub;
              if(dataSub.length != 0){
              this.updateTotal(dataSub[0].price)
              }})
    
  } 
  cpudataa:any;
  gpudataa:any;
  memdataa:any;
  stordataa:any;
  motherdataa:any;
  suppdataa:any;
  updateTotal(price:number){
    this.total += price
  }
 ngOnInit() {

  // this.tableData = this.cpuservice.getData();
  console.log(this.tableData);
  
  


  


//   this.http.get('../../json/cpu.json').subscribe((data: any[]) => {
//        this.tableData = data;
//       });
//       const sharedData = this.dataTransferService.getData();
 }
//  callCpuService(){
  
//   this.cpuservice.getData().subscribe({
//     next: x => {
//      this.cpudataa = x
//      console.log(x)
//     }
  
//   });
//   console.log(this.cpudataa);
 
}
