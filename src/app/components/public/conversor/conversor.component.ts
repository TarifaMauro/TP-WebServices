import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversorService } from '../../../services/public/conversor/conversor.service';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent implements OnInit {

  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'ARS';
  currencies: any = [];
  result: number | null = null;

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
    this.conversorService.getConcurrencyList().subscribe((data: any) => {
      this.currencies = data.currencies;
    });
  }

  convertir(): void {
    this.conversorService.convert(this.fromCurrency, this.toCurrency, this.amount).subscribe((data: any) => {
      this.result = data.result;
    });
  } 

}

