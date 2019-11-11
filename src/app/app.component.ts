import { Component } from '@angular/core';
import { Cat } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedCat: Cat;
  title = 'app-cats-list-test';

  public openSelectedCatCard(value: Cat) {
    this.selectedCat = value;
  }
}
