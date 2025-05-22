import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private headers = new HttpHeaders({
    'apikey': '4fBZTJLiyahvvhENfqmfffHpfzQMrS32'
  });

  constructor(private http: HttpClient) { }

  getConcurrencyList(): Observable<any> {
    return this.http.get('https://api.apilayer.com/currency_data/list', { headers: this.headers });
  }

  convert(from: string, to: string, amount: number): Observable<any> {
    const url = `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`;
    return this.http.get(url, { headers: this.headers });
  }
}
