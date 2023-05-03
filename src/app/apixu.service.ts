import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location:any){
    return this.http.get(
        'http://api.weatherapi.com/v1/current.json?key=f27b62a9e4ee4ff68f4144739230305&q='+location+'&aqi=no'
    );
}
}
