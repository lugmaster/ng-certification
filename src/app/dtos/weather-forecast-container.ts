import {WeatherForecast} from './weather-forecast';

export interface WeatherForecastContainer {
    zipcode: number,
    name: string,
    weatherForecasts: WeatherForecast[]
}
