import { Component, OnInit } from '@angular/core';
import {ScannerServiceService} from '../../services/scanner-service.service';
import {log} from 'util';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  textToScan: string;
  tokenDefinitionText: string;
  scanResult = '';

  private static buildTokenDefinitions(tokenDefinitionText: string): any {
    return tokenDefinitionText.split('\n').map(tokenDefinition => {
      return {
        type: tokenDefinition.split('=')[0],
        regex: tokenDefinition.split('=')[1],
      };
    });
  }

  constructor(private scanService: ScannerServiceService) { }

  ngOnInit() {
  }

  scanText() {
    const tokenDefinitions = ScannerComponent.buildTokenDefinitions(this.tokenDefinitionText);
    this.scanService.scanString(tokenDefinitions, this.textToScan).subscribe(result => {
      this.scanResult = result
        .map(token => `${token.type}(${token.content})`)
        .reduce(((previousValue, currentValue) => previousValue + currentValue));
    });
    log(this.scanResult);
  }
}
