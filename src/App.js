import React, { useState } from "react";
import axios from "axios";
import ShowResult from "./components/ShowResult";
import Search from "./components/Search";

function App() {
  const [city, setCity] = useState("");
  const [theme, setTheme] = useState("normal");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    const API_KEY = "xxx";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    setLoading(true); // Yüklenme süreci başladı
    try {
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Hava durumu verileri alınamadı:", error);
    } finally {
      setLoading(false); // Yüklenme süreci bitti
    }
  };
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme}`}>
      <div className="bg-gray-200 bg-opacity-50 rounded-lg w-1/3 pt-10 flex flex-col items-center">
        
        <Search city={city} setCity={setCity} fetchWeather={fetchWeather} />
        
        <div className="h-52 w-full flex items-center justify-center">
          <ShowResult toggleTheme={toggleTheme} weatherData={weatherData} loading={loading}/>
        </div>

      </div>
    </div>
  );
}

export default App;
