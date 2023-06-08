import { Component, OnInit } from '@angular/core';
import { TeamService } from '../Service/team.service';
import { User } from '../model/user';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{

  teamPlayer:User
  myteamplayer:any
  constructor(private teamservice:TeamService){}
  ngOnInit(): void {
    this.myteamplayer=this.teamservice.getTeam();
  }


}
