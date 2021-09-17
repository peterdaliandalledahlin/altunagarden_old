import axios from 'axios';
import icons from '../assets/images/icons/*.png';
import sunriseIcon from '../assets/images/sunrise.svg';
import sunsetIcon from '../assets/images/sunset.svg'

const Weather = async () => {
	const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=altuna&units=metric&APPID=a2cbebe3bc93590c1718ca98425f0512');
  const weather = res.data;

  switch(weather.weather[0].main) {
    case 'Fog':
      weather.weather[0].main = 'Dimma';
      break;
    case 'Snow':
      weather.weather[0].main = 'Snö';
      break;
    case 'Thunderstorm':
      weather.weather[0].main = 'Åska';
      break;
    case 'Drizzle':
      weather.weather[0].main = 'Duggregn';
      break;
    case 'Rain':
      weather.weather[0].main = 'Regn';
      break;
    case 'Mist':
      weather.weather[0].main = 'Dimma';
      break;
    case 'Clouds':
      weather.weather[0].main = 'Molnigt';
      break;
    case 'Clear':
      weather.weather[0].main = 'Klar himmel';
      break;
    default:
      weather.weather[0].main = 'Vädertyp inte tillgänglig';
  }

  let sunrise = weather.sys.sunrise;
  var date = new Date(sunrise * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var solUppgang = hours + ':' + minutes.substr(-2);
  let sunset = weather.sys.sunset;
  var date = new Date(sunset * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var solNedgang = hours + ':' + minutes.substr(-2);

	const template = `
    <div class="weather-container">
      <p>${weather.name} ${Math.round(weather.main.temp)}°C | ${weather.weather[0].main} <img src="${icons[weather.weather[0].icon]}" width="20px" height="20px" alt="väderikon" /> | <img src="${sunriseIcon}" width="18px" height="18px" alt="soluppgång" /> ${solUppgang} | <img src="${sunsetIcon}" width="18px" height="18px" alt="solnedgång" /> ${solNedgang}</p>
    </div>
  `;
	return template;
};

export default Weather;
