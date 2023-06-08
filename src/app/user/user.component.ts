import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { User } from '../model/user';
import { TeamService } from '../Service/team.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  mydata:any[]
  storedata:User
  raju:User
  addintoTeam:any 
  myUrl:string="editTeam/"
  

constructor(private https:UserService,private teamservice:TeamService,private route:Router){}

playerdata:any
  ngOnInit(): void {
    this.mydata= this.https.getAllPlayer();
    
  }
  editPlayer(index:number){
  this.route.navigate([this.myUrl+index])
  }
  addPlayaer(inputData:User){
    
    this.https.addPlayer(inputData);
    this.ngOnInit();
  }
  playerDelails(id:string){
    this.playerdata=this.https.playerDelails(Number(id))
    console.log(this.playerdata)
  }
  deletePLayer(index:number){
  this.https.deletePlayer(index);
  this.ngOnInit();
  }

  addToTeam(index:number){

    this.addintoTeam=this.https.playerDelails(index+1)
    this.teamservice.addPlayer(this.addintoTeam);
   

  }
}
