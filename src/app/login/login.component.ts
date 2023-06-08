import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private rout:Router){}
proceedlogin(logindata:any){
console.log(logindata);
  }

  redirectRegister(){
 return this.rout.navigate(['access/register'])
  }
}
