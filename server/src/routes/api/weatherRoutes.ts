import { Router, type Request, type Response } from 'express';
import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

const router = Router();
const weatherService = new WeatherService();
const historyService = new HistoryService();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { city } = req.body;
    
    if (!city) {
      return res.status(400).json({ error: 'City name is required' });
    }

    const weatherData = await weatherService.getWeatherByCity(city);
    await historyService.addToHistory(city);

    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

router.get('/history', async (req: Request, res: Response) => {
  try {
    const searchHistory = await historyService.getHistory();
    res.status(200).json(searchHistory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch search history' });
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;