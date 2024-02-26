Using Service and Subject instead of input/output, knowing when to use observables and promises and how to switch using lastformValue, model is important go check it out and see how I bind it with the html of weather. GET/POST requests. environment variables for apikeys and endpoints.



<div *ngIf="weather$ | async as weather; else error">
    <p>Current Weather: {{ weather.main.temp }}°C</p>
    <p>Feels like: {{ weather.main.feels_like }}°C</p>
    <p>humidity: {{ weather.main.humidity }}%</p>
    <!-- UNIQUE SEE I CAN ONLY TAKE FIRST ENTRY-->
    <p>Description: {{ weather.weather[0].description }}</p>
  </div>


export interface Weather {  
    //you dont have to take everything.
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
}