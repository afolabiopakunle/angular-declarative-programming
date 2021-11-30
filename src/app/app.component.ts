import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientModel } from './client.model';

import { ClientService } from './client.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  form: FormGroup;
  searchField: FormControl;
  filteredClients$: Observable<ClientModel[]>;

  constructor(private clientService: ClientService) {
    this.searchField = new FormControl('');
  }

  ngOnInit() {
    const client$ = this.clientService.getClients();
    const searchTerm$ = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    )
    this.filteredClients$ = combineLatest([client$, searchTerm$])
    .pipe(
      map(([clients, searchTerm]) => 
         clients.filter(
          client => searchTerm === '' || client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || client.lastName.toLowerCase().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

}
