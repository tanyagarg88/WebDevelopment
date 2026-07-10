// Weather API Data Fetcher Service
class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.open-meteo.com/v1/forecast';
  }

  async getCurrentWeather(latitude, longitude) {
    const url = `${this.baseUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to retrieve forecast data');
    const data = await response.json();
    return {
      temperature: data.current_weather.temperature,
      windSpeed: data.current_weather.windspeed,
      time: data.current_weather.time
    };
  }
}


<!-- Updated: 2026-06-28T22:18:55+05:30 [Commit #253] -->


<!-- Updated: 2026-06-30T21:32:17+05:30 [Commit #260] -->


<!-- Updated: 2026-07-01T12:24:52+05:30 [Commit #265] -->


<!-- Updated: 2026-07-01T22:56:01+05:30 [Commit #270] -->


<!-- Updated: 2026-07-02T14:36:53+05:30 [Commit #274] -->


<!-- Updated: 2026-07-03T18:54:50+05:30 [Commit #283] -->


<!-- Updated: 2026-07-04T19:20:02+05:30 [Commit #288] -->


<!-- Updated: 2026-07-05T20:43:27+05:30 [Commit #293] -->


<!-- Updated: 2026-07-06T11:07:57+05:30 [Commit #297] -->


<!-- Updated: 2026-07-07T11:10:12+05:30 [Commit #302] -->


<!-- Updated: 2026-07-07T20:53:47+05:30 [Commit #307] -->


<!-- Updated: 2026-07-08T18:42:00+05:30 [Commit #310] -->


<!-- Updated: 2026-07-09T12:35:41+05:30 [Commit #312] -->


<!-- Updated: 2026-07-10T11:53:05+05:30 [Commit #317] -->
