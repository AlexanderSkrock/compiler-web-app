import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from '../pages/welcome/welcome.component';
import {RegexTesterComponent} from '../pages/regex-tester/regex-tester.component';
import {ScannerComponent} from '../pages/scanner/scanner.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'regex', pathMatch: 'full', component: RegexTesterComponent },
  { path: 'scanner', pathMatch: 'full', component: ScannerComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
