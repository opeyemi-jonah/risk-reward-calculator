import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


interface RiskOptions {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  riskOpts: RiskOptions[] = [
    {value: 'USD', viewValue: '$'},
    {value: 'percent', viewValue: '%'},
  ];

  constructor(
    private formBuilder: FormBuilder
  ){}

  calculatorForm = new FormGroup({
    accountBalance: new FormControl(''),
    risk: new FormControl('')
  })
}
