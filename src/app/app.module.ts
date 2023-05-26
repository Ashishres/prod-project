import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BuildpageComponent } from './components/buildpage/buildpage.component';
import { QuerypageComponent } from './components/querypage/querypage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LearningpageComponent } from './components/learningpage/learningpage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { CarouselModule,CardModule,AlertModule,TableModule,UtilitiesModule } from '@coreui/angular';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { CpuComponent } from './components/cpu/cpu.component';
import { MemoryComponent } from './components/memory/memory.component';
import { MotherboardComponent } from './components/motherboard/motherboard.component';
import { PowerSupplyComponent } from './components/power-supply/power-supply.component';
import { StorageComponent } from './components/storage/storage.component';
import { GpuComponent } from './components/gpu/gpu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BuildpageComponent,
    QuerypageComponent,
    HeaderComponent,
    FooterComponent,
    LearningpageComponent,
    AboutpageComponent,
    CpuComponent,
    MemoryComponent,
    MotherboardComponent,
    PowerSupplyComponent,
    StorageComponent,
    GpuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    CarouselModule,
    BrowserAnimationsModule,
    CardModule,
    TabsModule.forRoot(),
    FormsModule,
    TableModule,
    UtilitiesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
