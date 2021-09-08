import {Pony} from './pony';
export class Race {


    id_race: number;
    location: string;
    date: Date;
    ponies : Array<Pony>;
    

    constructor(id_race?:number, location?:string, date?:Date){

        this.id_race = id_race === undefined ? 0 : id_race;
        this.location = location === undefined ? "ici" : location;
        this.date = date === undefined ? new Date() : date;
        this.ponies = [];
        
    }
}
