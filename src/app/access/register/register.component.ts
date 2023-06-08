import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private rout:Router){}
  ngOnInit(): void {
    
  }

  RedirectLogin(){
  this.rout.navigate(['home'])
  }
  reactiveform =new FormGroup({
    userId:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('',Validators.compose([Validators.required,Validators.email]))
  });
  saveUser(){
    console.log(this.reactiveform.value)
  }
}
