import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


interface RiskOptions {
  value: string;
  viewValue: string;
}

interface Instruments {
  pair: string;
  viewValue: string; 
}

interface Currency {
  description: string;
  symbol: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  //Output
  preciseLotSize: number = 0;
  negApproxLotSize: number = 0;
  posApproxLotSize: number = 0;
  riskAmount: number = 0;

  xAccountBalance: number= 0;
  xInstrument: any;


  

  riskOpts: RiskOptions[] = [
    {value: 'USD', viewValue: '$'},
    {value: 'percent', viewValue: '%'},
  ];

  instruments: Instruments[]=[
    {pair: 'eurusd', viewValue:'EUR/USD'},
    {pair: 'gbpusd', viewValue:'GBP/USD'},
    {pair: 'nas100', viewValue:'NAS100'},
    {pair: 'sp500', viewValue:'SP500'},
  ];

  currency: Currency[] = [
    {symbol: 'USD', description: 'US dollar'},
    {symbol: 'USD', description: 'US dollar'},
    {symbol: 'JPY', description: 'Japanese Yen'},
  ]

  constructor(

  ){}

  calculatorForm = new FormGroup({
    instruments:new FormControl(this.instruments[1]),
    currency: new FormControl(this.currency[0]),
    accountBalance: new FormControl(''),
    risk: new FormControl(''),
    riskFormat: new FormControl(this.riskOpts[0]),
    stopLoss: new FormControl(''),
    openPrice: new FormControl(''),
    stopLossPrice: new FormControl(''),
    contractSize: new FormControl(''),

  })
  

  calculate() {
    console.log('Solution is processed')
    this.xInstrument = this.calculatorForm.controls.instruments.value;
    console.log(this.xInstrument)
    
  }


}
