import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class ClientService {
private client$ = new BehaviorSubject<any>([
  {firstName: 'Arya', lastName: 'Stark'},
  {firstName: 'Robb', lastName: 'Starks'},
  {firstName: 'Olenna', lastName: 'Tyrell'},
  {firstName: 'Tyrion', lastName: 'Lannister'},
  {firstName: 'Davos', lastName: 'Seaworth'},
  {firstName: 'Renly', lastName: 'Baratheon'},
  {firstName: 'Stannis', lastName: 'Baratheon'},
  {firstName: 'Roose', lastName: 'Bolton'},
])



  constructor() { }

  getClients(): Observable<any> {
    return this.client$;
  }
}