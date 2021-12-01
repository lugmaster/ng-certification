import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherService} from '../../../services/weather.service';
import {WeatherLocation} from '../../../dtos/weather-location';

@Component({
  selector: 'app-weather-location-info',
  templateUrl: './weather-location-info.component.html',
  styleUrls: ['./weather-location-info.component.css']
})
export class WeatherLocationInfoComponent implements OnInit {

  weatherLocation: WeatherLocation;

  @Input()
  zipcode: number;

  @Output()
  weatherLocationRemovedEvent = new EventEmitter<Number>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherLocationByZipcode(this.zipcode).subscribe(weatherLocation => {
      this.weatherLocation = weatherLocation;
    });
  }

  public removeWeatherLocation(): void {
    this.weatherLocationRemovedEvent.emit(this.zipcode);
  }

}
