import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RACES } from '../mock-races';
import { Router, ActivatedRoute } from '@angular/router';
import { PONIES } from '../mock-ponies';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {

  newRace: Race = new Race();
  poniesBool = Array<boolean>();
  allPonies = PONIES;
  add: boolean = true;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  //test de l'url 
  if(this.route.snapshot.paramMap.get('id_race') == null){
    this.add = true;
  }else{
    this.add = false;
    let s  = this.route.snapshot.paramMap.get('id_race');
    const id_race = parseInt(s == null ? "0" : s, 0);
    for (let i = 0; i < RACES.length; i++){
      if(RACES[i].id_race === id_race){
        this.newRace = RACES[i];
        break;
      }
    }
  }


  }
  onSubmit() : void {

    if (this.add){
   this.newRace.id_race = RACES.length;
    RACES.push(this.newRace);
    this.newRace = new Race();
    }
    this.router.navigate(['races']);
    
  }
}
