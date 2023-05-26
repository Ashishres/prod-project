import { Component,OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
  
})
export class HomepageComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
 
  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/images/carousel1.jpg',
    };
    this.slides[1] = {
      src: './assets/images/carousel2.jpg',
    }
    this.slides[2] = {
      src: './assets/images/carousel3.webp',
    } 
  }
  
}
