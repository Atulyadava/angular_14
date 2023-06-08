import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcontect',
  templateUrl: './addcontect.component.html',
  styleUrls: ['./addcontect.component.css']
})
export class AddcontectComponent implements OnInit {
  constructor(private rout:ActivatedRoute){

  }
  ngOnInit(): void {
    const routid=this.rout.snapshot.paramMap.get("id");
    console.log(routid);
  }
}
