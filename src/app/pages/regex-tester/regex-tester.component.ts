import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RegexServiceService} from '../../services/regex-service.service';

@Component({
  selector: 'app-regex-tester',
  templateUrl: './regex-tester.component.html',
  styleUrls: ['./regex-tester.component.css'],
})
export class RegexTesterComponent implements OnInit {
  regexString: string;
  stringToValidate: string;
  stringsToValidate: string;
  validationResult = undefined;

  constructor(private changeDetector: ChangeDetectorRef, private regexService: RegexServiceService) {}

  ngOnInit() {
  }

  validteInputAgainstRegex() {
    this.regexService
      .testRegex(this.regexString, this.stringToValidate)
      .subscribe(result => {
        this.validationResult = result;
        this.changeDetector.detectChanges();
      });
  }

  resetValidationResult() {
    this.validationResult = undefined;
  }

  getValidationMessage(): string {
    if (this.validationResult === true) {
      return 'Ergebnis: Die Eingabe erfüllt die Regex!';
    } else if (this.validationResult === false) {
      return 'Ergebnis: Die Eingabe erfüllt die Regex nicht!';
    } else {
      return '';
    }
  }

  getFormattingForValidationState() {
    if (this.validationResult === true) {
      return 'text-success border-success';
    } else if (this.validationResult === false) {
      return 'text-danger border-danger';
    } else {
      return '';
    }
  }
}
