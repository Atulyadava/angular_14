import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  proccessedLogin(inputDta:any){

  }
  playerChanged =new Subject<User[]>();
  private players:User[]=[
    new User(1,'atul','erhrc',"batter"),
    new User(2,'atul','wer','bower'),
    new User(3,'atul','tyu', 'wicketKeeper')
    
  ];

  getAllPlayer(){
    return this.players.slice();
  }
  addPlayer(nwplayer:User){
   
    return this.players.push(nwplayer);
    
  }
  
  playerDelails(id:number){
    return this.players.find((p:User)=>p.id===id)
     
  }
  deletePlayer(index:number){
    this.players.splice(index,1)
  }
  updatePlayer(index:number){
   
  }
 
}
