import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuerypageComponent } from './components/querypage/querypage.component';
import { LearningpageComponent } from './components/learningpage/learningpage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { BuildpageComponent } from './components/buildpage/buildpage.component';
import { CpuComponent } from './components/cpu/cpu.component';
import { GpuComponent } from './components/gpu/gpu.component';
import { StorageComponent } from './components/storage/storage.component';
import { PowerSupplyComponent } from './components/power-supply/power-supply.component';
import { MemoryComponent } from './components/memory/memory.component';
import { MotherboardComponent } from './components/motherboard/motherboard.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'build', component:BuildpageComponent, children:[
    {path:'cpu',component:CpuComponent},
    {path:'gpu', component:GpuComponent},
    {path:'storage', component:StorageComponent},
    {path:'supply', component:PowerSupplyComponent},
    {path:'memory', component:MemoryComponent},
    {path:'motherboard', component:MotherboardComponent}
  ]},
  {path:'chat', component:QuerypageComponent},
  {path:'learn', component:LearningpageComponent},
  {path:'about', component:AboutpageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
