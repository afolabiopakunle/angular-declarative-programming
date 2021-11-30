import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

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
    
  }

  ngOnInit() {
    const client$ = this.searchField.valueChanges
    .pipe(
      startWith(this.searchField.value)
    )
  }

  
}
