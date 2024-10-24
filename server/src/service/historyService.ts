// TODO: Define a City class with name and id properties
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

class city {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  private filePath = path.join(process.cwd(), 'data', 'searchHistory.json');

  private async read(): Promise<city[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  private async write(cities: city[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2));
  }

  async addCity(cityName: string): Promise<city> {
    const cities = await this.read();
    const newCity =  new city(cityName);
    cities.push(newCity);
    await this.write(cities);
    return newCity;
  }

  async removeCity(id: string): Promise<boolean> {
    const cities = await this.read();
    const filteredCities = cities.filter(city => city.id !== id);
    if (filteredCities.length === cities.length) {
      return false;
    }
    await this.write(filteredCities);
    return true;
  }
  }

  export default new HistoryService();
  // TODO: Define a read method that reads from the searchHistory.json file
  // private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}



