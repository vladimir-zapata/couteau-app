import { WeatherAPIResponse } from './WeatherAPIResponse';

export async function getCurrentWeather(): Promise<WeatherAPIResponse> {
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Dominican+Republic`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: WeatherAPIResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}
