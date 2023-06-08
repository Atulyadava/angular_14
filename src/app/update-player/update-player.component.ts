import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../Service/team.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit{

  constructor(private route:ActivatedRoute,private teamservice:TeamService){

  }
  id:number
  ngOnInit(): void {
    let index=this.route.snapshot.paramMap.get('id');
    this.id= Number(index)
  }
  
  player:User
  updateSubmit(player:User){

    let index=this.route.snapshot.paramMap.get('id');
    player.id=Number(index)
   this.teamservice.editPlayer(Number(index),player)
   console.log(player)
  }
}
