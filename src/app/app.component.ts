import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  
  title = 'Angular14';
  isMenuVisible=true;

  constructor(private rout:Router){}
  ngDoCheck(): void {
    const currentRout=this.rout.url;
    if(currentRout=='/login'){
      this.isMenuVisible=false
    }else{
      this.isMenuVisible=true
    } 
  }
}
