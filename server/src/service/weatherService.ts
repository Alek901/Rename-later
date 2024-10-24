import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

interface Coordinates {
  lat: number;
  lon: number;
}

class weather {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: number;

  constructor(data: any) {
    this.temperature = data.temp || data.main.temp;
    this.description = data.description || data.weather[0].description;
    this.humidity = data.humidity || data.main.humidity;
    this.windSpeed = data.windSpeed || data.wind.speed;
    this.icon = data.icon || data.weather[0].icon;
  }
}

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
