import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[] = [
    {
    id: 1,
    name: 'Magneto',
    superPower: 'magnetic',
    address: 'Washington',
    },
    {
    id: 2,
    name: 'Dr X',
    superPower: 'X cut',
    address: 'Budapest',
    },
    {
    id: 3,
    name: 'Jack',
    superPower: 'magic',
    address: 'Bécs',
    },
    {
    id: 4,
    name: 'Cat Women',
    superPower: 'levitation',
    address: 'Tokió',
    },
    {
    id: 5,
    name: 'Black Joe',
    superPower: 'Dark magic',
    address: 'Berlin',
    },
  ]


  constructor() { }

  getAll(): Hero[] {
    return this.heroes;
  }
}
