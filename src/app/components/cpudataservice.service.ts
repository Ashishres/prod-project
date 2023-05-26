import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class dataserviceService {

  public sharedData: any = [];

  private oncpuSelected = new BehaviorSubject<any>(this.sharedData);
  currentcpu = this.oncpuSelected.asObservable();

  setData(data: any) {  
    this.oncpuSelected.next(data);

  }
  private ongpuSelected = new BehaviorSubject<any>(this.sharedData);
  currentgpu = this.ongpuSelected.asObservable();
  setgpudata(data:any){
      
    this.ongpuSelected.next(data);
  }

  private onmemSelected = new BehaviorSubject<any>(this.sharedData);
  currentmem = this.onmemSelected.asObservable();
  setmemdata(data:any){
      
    this.onmemSelected.next(data);
  }

  private onmotherSelected = new BehaviorSubject<any>(this.sharedData);
  currentmother = this.onmotherSelected.asObservable();
  setmotherdata(data:any){
      
    this.onmotherSelected.next(data);
  }

  private onsuppSelected = new BehaviorSubject<any>(this.sharedData);
  currentsupp = this.onsuppSelected.asObservable();
  setsuppdata(data:any){
      
    this.onsuppSelected.next(data);
  }

  private onstoreSelected = new BehaviorSubject<any>(this.sharedData);
  currentstore = this.onstoreSelected.asObservable();
  setstoredata(data:any){
      
    this.onstoreSelected.next(data);
  }

 }
