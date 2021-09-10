import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyDetailComponent } from './pony-detail/pony-detail.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { LocationRacePipe } from './location-race.pipe';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { MenuComponent } from './menu/menu.component';
import { AddRaceComponent } from './add-race/add-race.component';
import { AddPonyReactComponent } from './add-pony-react/add-pony-react.component';
import { AddRaceReactComponent } from './add-race-react/add-race-react.component';
import { UserGuard } from './user.guard';



const ROUTES: Routes =[
  {path: "", component: PoniesComponent },
  {path: "races", component: RacesComponent},
  {path: "add-pony", component: AddPonyReactComponent, canActivate: [UserGuard]},
  {path: "update-pony/:id", component: AddPonyComponent, canActivate: [UserGuard]},
  {path: "add-race", component: AddRaceComponent, canActivate: [UserGuard]},
  {path: "update-race/:id_race", component: AddRaceComponent, canActivate: [UserGuard] }

]


@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyDetailComponent,

    RaceDetailComponent,
    LocationRacePipe,
    AddPonyComponent,
    MenuComponent,
    AddRaceComponent,
    
    AddPonyReactComponent,
         AddRaceReactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
