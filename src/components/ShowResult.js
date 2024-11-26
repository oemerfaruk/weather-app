import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner,faSun,faMoon, faCloud,faCloudSun,faCloudSunRain, faCloudMoon,faCloudMoonRain, faSnowflake,faCloudBolt, faSmog, faCloudRain } from '@fortawesome/free-solid-svg-icons';

export default function ShowResult({ weatherData, loading, toggleTheme }) {
    if (loading) {
      return <FontAwesomeIcon className='text-4xl' icon={faSpinner} spin />;
    }
  
    if (!weatherData) {
      return <p>Henüz Sorgu Yapılmadı..</p>;
    }

    const getIcon = (iconCode) => {
        switch (iconCode) {
            case "01d":
                toggleTheme("day_background")
                return <FontAwesomeIcon icon={faSun} />
            case "01n":
                toggleTheme("night_background")
                return <FontAwesomeIcon icon={faMoon} />
            case "02d":
                toggleTheme("day_background")
                return <FontAwesomeIcon icon={faCloudSun} />
            case "02n":
                toggleTheme("cloudly_background")
                return <FontAwesomeIcon icon={faCloudMoon} />
            case "03d":
            case "03n":
                toggleTheme("cloudly_background")
                return <FontAwesomeIcon icon={faCloud} />
            case "04d":
            case "04n":
                toggleTheme("cloudly_background")
                return <FontAwesomeIcon icon={faCloud} />
            case "09d":
                toggleTheme("normal_background")
                return <FontAwesomeIcon icon={faCloudRain} />
            case "09n":
                toggleTheme("normal_background")
                return <FontAwesomeIcon icon={faCloudMoonRain} />
            case "10d":
                toggleTheme("normal_background")
                return <FontAwesomeIcon icon={faCloudSunRain} />
            case "10n":
                toggleTheme("normal_background")
                return <FontAwesomeIcon icon={faCloudMoonRain} />
            case "11d":
            case "11n":
                toggleTheme("normal_background")
                return <FontAwesomeIcon icon={faCloudBolt} />
            case "13d":
            case "13n":
                toggleTheme("normal_background")
                return <FontAwesomeIcon icon={faSnowflake} />
            case "50d":
            case "50n":
                toggleTheme("normal_background")
                return <FontAwesomeIcon icon={faSmog} />
            default:
                return <FontAwesomeIcon icon={faSpinner} />
        }
    };
  
    return (
    <div className='text-center leading-10'>
        <h2>{weatherData.name}</h2>
        <p className='text-2xl'>{getIcon(weatherData.weather[0].icon)}</p>
        <p>{weatherData.main.temp}°C</p>
    </div>
    );
  }
  