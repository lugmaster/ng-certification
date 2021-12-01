import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../../services/weather.service';
import {WeatherForecastContainer} from '../../dtos/weather-forecast-container';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

    zipcode: number;

    weatherForecastContainer: WeatherForecastContainer;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private weatherService: WeatherService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.zipcode = params['zipcode'];
        });
        this.weatherService.getWeatherForecastByZipcode(this.zipcode).subscribe(forecastContainer => {
            this.weatherForecastContainer = forecastContainer
        });
    }

}
