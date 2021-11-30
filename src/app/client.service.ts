import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
private client$ = new BehaviorSubject<any>([
  {firstName: 'Arya', lastName: 'Stark'},
  {firstName: 'Robb', lastName: 'Starks'},
])



  constructor() { }

  getClients(): Observable<any> {
    return this.client$;
  }
}