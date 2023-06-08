import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamChanged=new EventEmitter<User[]>();
  playerId:number

  i:number=0;
  j:number=0;
  k:number=0;
 msg:string
  constructor(private userservice:UserService) { }

  private team:User[]=[];

  getTeam(){
  return this.team.slice();
  }
  editPlayer(id:number,nwPlayer:User){
  const index=this.team.findIndex(User=>User.id===id)
 this.team[index]=nwPlayer;
 
  }
  addPlayer(player:User){  
    if(player.role=='batter'){
      this.i++;
      if(this.i<2){
        alert("your team has not requred batter")
      }
    }
    if(player.role=='bower'){
      this.j++;
      if(this.j<2){
        alert("your team has not requred bowler");
      }
    }
    if(player.role=='wicketKeeper'){
      this.k++;
      if(this.k<1){
        alert("your team has not requred bowler")
      }
    }
  return this.team.push(player)
  
  }
  deletePlayer(id:number){
   return this.team.splice(id,1)
  }
  getStatus(){
    var status:string[]=[];
    return status;
  }
}
