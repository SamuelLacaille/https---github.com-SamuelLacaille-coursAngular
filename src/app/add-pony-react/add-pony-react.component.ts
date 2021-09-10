import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PONIES } from '../mock-ponies';
import { Pony } from '../pony';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PonyService } from '../pony.service';
import {InputTextModule} from 'primeng/inputtext';


@Component({
  selector: 'app-add-pony-react',
  templateUrl: './add-pony-react.component.html',
  styleUrls: ['./add-pony-react.component.css']
})
export class AddPonyReactComponent implements OnInit {


  ponyForm = this.fb.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    age: [0, Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private ponyService: PonyService, private itm: InputTextModule) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let res: Pony = this.ponyForm.value;
    PONIES.push(res);
    this.ponyService.addPony(res);
    this.router.navigate(['']);
   
  }
  
}
