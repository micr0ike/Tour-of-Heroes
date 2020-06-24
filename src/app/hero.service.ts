import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
  constructor(private MessageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    this.MessageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
