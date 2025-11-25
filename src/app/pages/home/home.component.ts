import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/weather.model';
import { SearchComponent } from '../../components/search/search.component';
import { WeatherCardComponent } from '../../components/weather-card/weather-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, SearchComponent, WeatherCardComponent]
})
export class HomeComponent {

  weatherData?: Weather;

  constructor(private weatherService: WeatherService) {}

  onSearch(city: string) {
    this.weatherService.getWeather(city).subscribe((res) => {
      this.weatherData = {
        city: res.name,
        temperature: res.main.temp,
        humidity: res.main.humidity,
        description: res.weather[0].description,
        icon: `assets/icons/${res.weather[0].main.toLowerCase()}.png`
      };
    });
  }
}
