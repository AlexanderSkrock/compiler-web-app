import { Component } from '@angular/core';
import {Entry} from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Studienproject Compilerbau';
  entries = [
    new Entry('', 'Startseite'),
    new Entry('/regex', 'Regexes'),
    new Entry('/scanner', 'Scanner'),
  ];
}
