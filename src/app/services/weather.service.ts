import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${environment.apiUrl}?q=${city}&appid=${environment.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
