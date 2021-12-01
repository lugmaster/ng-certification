import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-weather-locations',
  templateUrl: './weather-locations.component.html',
  styleUrls: ['./weather-locations.component.css']
})
export class WeatherLocationsComponent implements OnInit {

  private savedZipcodes: number[] = [];

  ngOnInit(): void {
    this.savedZipcodes = this.lsService.loadNumbers();
  }

  constructor(private lsService: LocalStorageService) {
  }

  public addZipcode(zipcode: number): void {
    this.savedZipcodes = this.lsService.saveNumber(zipcode);
  }


  public  getSavedZipcodes(): number[] {
    return this.savedZipcodes;
  }

  public removeZipCode(zipcode: number): void {
    this.savedZipcodes = this.lsService.deleteNumber(zipcode);
  }

}
