import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private host = 'car-specs.p.rapidapi.com';
  private apiKey = 'b9a2b3f90cmshc22811b22d0d250p1669aejsn1196988201c7';

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': this.apiKey,
    'X-RapidAPI-Host': this.host
  });

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<any> {
    return this.http.get(`https://${this.host}/v2/cars/makes`, { headers: this.headers });
  }

  getModelosPorMarca(marcaId: string): Observable<any> {
    return this.http.get(`https://${this.host}/v2/cars/makes/${marcaId}/models`, { headers: this.headers });
  }
}
