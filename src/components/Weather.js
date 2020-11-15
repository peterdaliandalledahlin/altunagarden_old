import axios from 'axios';
import icons from '../assets/images/icons/*.png';

const Weather = async () => {
	const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=altuna&units=metric&APPID=a2cbebe3bc93590c1718ca98425f0512');
  const weather = res.data;
  console.log(weather);

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
  var solUppgang = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  let sunset = weather.sys.sunset;
  var date = new Date(sunset * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var solNedgang = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

	const template = `
    <div class="card">
      <div class="card-body">
        <h1>${weather.name}</h1>
        <ul>
          <li>${Math.round(weather.main.temp)}°c</li>
          <li>${Math.round(weather.main.temp_max)}°c</li>
          <li>${Math.round(weather.main.temp_min)}°c</li>
          <li>${weather.weather[0].main}</li>
          <li><img src="${icons[weather.weather[0].icon]}" alt="väderikon" /></li>
          <li>Solen går upp ${solUppgang}</li>
          <li>Solen går ner ${solNedgang}</li>
        </ul>
      </div>
    </div>
  `;

	return template;
};

export default Weather;
