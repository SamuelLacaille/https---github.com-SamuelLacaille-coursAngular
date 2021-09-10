import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username : string = "";
  askcon : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(this.askcon){
      sessionStorage.setItem('idUser', this.username);
      this.askcon=false;
    }else{
      sessionStorage.removeItem('idUser');
      this.username="";
      this.askcon=true;
    }
  }

}
