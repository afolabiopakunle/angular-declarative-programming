import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { ClientService } from './client.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  searchField: FormControl;
  filteredClients$: Observable<any>;

  constructor(private clientService: ClientService) {
    this.searchField = new FormControl('')
  }

  ngOnInit() {
    const client$ = this.clientService.getClients();
    const searchTerm$ = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    )
    this.filteredClients$ = combineLatest([client$, searchTerm$])
    .pipe(
      map(([clients, searchTerm]) => {
        return clients.filter(
          client => searchTerm === '' || 
          client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || client.lastName.toLowerCase().toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
    )
  }


}
