import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../models';
import { Weathersvc } from '../weathersvc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{


  weather$! : Observable<Weather>;

  constructor(private svc: Weathersvc){
  }

  ngOnInit(): void {
    //YAYYY ITS THIS ONE YOU LISNEN TO THE LIGHTHOUSE.
    this.weather$ = this.svc.weatherSubject.asObservable();
    }
}