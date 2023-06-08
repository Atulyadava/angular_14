import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  salary=2000000;
  isActive=false;
  name="atul yadav"
  colorname="green"
  font="40px"

  className="Headclass"
  stylevalue={
    "color":"yellow",
    "font-size":"60px"
  }

lotes(vat:string){
alert(vat)
}

}
