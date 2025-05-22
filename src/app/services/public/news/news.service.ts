import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://livescore6.p.rapidapi.com/news/v2/list';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'b9a2b3f90cmshc22811b22d0d250p1669aejsn1196988201c7',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}
