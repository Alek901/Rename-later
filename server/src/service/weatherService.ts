import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

interface Coordinates {
  lat: number;
  lon: number;
}

class Weather {
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

class WeatherService {
  private baseURL = 'https://api.openweathermap.org';
  private apiKey = process.env.WEATHER_API_KEY;
  private cityName: string = '';

  private async fetchLocationData(_query: string): Promise<any> {
    const response = await axios.get(`${this.buildGeocodeQuery()}`);
    return response.data[0];
  }

  private destructureLocationData(locationData: any): Coordinates {
    return {
      lat: locationData.lat,
      lon: locationData.lon,
    };
  }

  private buildGeocodeQuery(): string {
    return `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&limit=1&appid=${this.apiKey}`;
  }

  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`;
  }

  private async fetchAndDestructureLocationData(): Promise<Coordinates> {
    const locationData = await this.fetchLocationData(this.cityName);
    return this.destructureLocationData(locationData);
  }

  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    const response = await axios.get(this.buildWeatherQuery(coordinates));
    return response.data;
  }

  private parseCurrentWeather(response: any): Weather {
    return new Weather(response);
  }

  async getWeatherForCity(city: string): Promise<Weather> {
    this.cityName = city;
    const coordinates = await this.fetchAndDestructureLocationData();
    const weatherData = await this.fetchWeatherData(coordinates);
    return this.parseCurrentWeather(weatherData);
  }
}
// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object
export default new WeatherService();
// TODO: Complete the WeatherService class

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



