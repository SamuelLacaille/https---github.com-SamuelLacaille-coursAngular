import { Component, OnInit } from '@angular/core';
import { PONIES } from '../mock-ponies';
import { Pony } from '../pony';
import { ActivatedRoute, Router } from '@angular/router';


import{ PonyService } from '../pony.service';

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {

  newPony: Pony = new Pony();
  add: boolean = true;

  constructor(private router:Router, private route:ActivatedRoute, private ponyService: PonyService) { }

  ngOnInit(): void {

    //test de l'url 
    if(this.route.snapshot.paramMap.get('id') == null){
      this.add = true;
    }else{
      this.add = false;
      let s  = this.route.snapshot.paramMap.get('id');
      const id = parseInt(s == null ? "0" : s, 0);
      this.ponyService.getPony(id).subscribe(p=>this.newPony = p);
 /*     for (let i = 0; i < PONIES.length; i++){
        if(PONIES[i].id === id){
          this.newPony = PONIES[i];
          break;
        }
      } */
    }

  }

  onSubmit() : void {
    if (this.add){
    this.newPony.id = PONIES.length;
    PONIES.push(this.newPony);
    this.newPony = new Pony();
    }else{
     // this.ponyService.updatePony(this.newPony).subscribe();
    }
    this.router.navigate(['']);
  }
}
