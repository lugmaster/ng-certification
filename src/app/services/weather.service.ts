import {Injectable} from '@angular/core';
import {WeatherLocation} from '../dtos/weather-location';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WeatherForecastContainer} from '../dtos/weather-forecast-container';
import {WeatherForecast} from '../dtos/weather-forecast';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    private static readonly API_URL = "https://api.openweathermap.org/data/2.5/";
    private static readonly APP_ID = "5a4b2d457ecbef9eb2a71e480b947604";

    constructor(private http: HttpClient) {
    }

    public getWeatherLocationByZipcode(zipcode: number): Observable<WeatherLocation> {
        return this.http.get<any>(WeatherService.API_URL + 'weather?zip=' + zipcode + '&appid=' + WeatherService.APP_ID + '&units=metric').pipe(
            map(response => {
                return {
                    zipcode: zipcode,
                    name: String(response.name),
                    weatherCondition: String(response.weather[0].main),
                    weatherConditionIcon: String(response.weather[0].icon),
                    temperature: Number(response.main.temp),
                    minTemperature: Number(response.main.temp_min),
                    maxTemperature: Number(response.main.temp_max),
                } as WeatherLocation;
            }));
    }

    public getWeatherForecastByZipcode(zipcode: number): Observable<WeatherForecastContainer> {
        return this.http.get<any>(WeatherService.API_URL + 'forecast/daily?zip=' + zipcode + '&appid=' + WeatherService.APP_ID + '&units=metric' + '&cnt=5').pipe(
            map(response => {
                return {
                    zipcode: zipcode,
                    name: String(response.city.name),
                    weatherForecasts: this.mapWeatherforecast(response.list)
                } as WeatherForecastContainer;
            }));
    }

    private mapWeatherforecast(forecasts): WeatherForecast[] {
        let mappedForecasts: WeatherForecast[] = [];
        forecasts.forEach(forecast => {
            mappedForecasts.push({
                dateInMilliSeconds: forecast.dt * 1000,
                weatherCondition: String(forecast.weather[0].main),
                weatherConditionIcon: String(forecast.weather[0].icon),
                minTemperature: Number(forecast.temp.min),
                maxTemperature: Number(forecast.temp.max)
            } as WeatherForecast);
        })
        return mappedForecasts;
    }
}
