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


export interface Search {

    city: string ;
}

