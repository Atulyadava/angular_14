import { Component } from '@angular/core';


@Component({
  selector: 'app-contect',
  template: `
    <h2>
      contect 
    </h2>
    <a routerLink="add">add contect</a>
    <br>
    <a routerLink="edit/2">Edit contect</a>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./contect.component.css']
})
export class ContectComponent {
  

 

}
