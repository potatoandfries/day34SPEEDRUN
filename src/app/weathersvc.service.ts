import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './models';
import { Subject, lastValueFrom } from 'rxjs';
import { environment } from '../enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class Weathersvc {
  // API KEY
  private APIKEY !: string;
  // URL 
  private URL !: string;

  // make it a subject here 
  public weatherSubject = new Subject<Weather>();


  constructor(private httpclient: HttpClient) {
    this.APIKEY = environment.WEATHER_KEY;
    this.URL = environment.WEATHER_URL;
  }

  //get request>> 
  // when to use promise and when to use observables? 
  // i only need 1 thing so i will use promise.
  public getWeather(city: string) {
    if (!this.APIKEY) {
      throw new Error('API key not initialized');
    }
  
    const params = new HttpParams()
      .set("q", city)
      .set("appid", this.APIKEY);
  
      return lastValueFrom(this.httpclient.get<Weather>(this.URL, { params }))
      .then(result => {
        this.weatherSubject.next(result);
      })
      .catch(error => {
        console.info("No entry found");
        return Promise.reject(error);
      });
  }
}