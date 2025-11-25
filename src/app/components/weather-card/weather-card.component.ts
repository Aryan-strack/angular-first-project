import { Component, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

  @Input() data!: Weather;

}
