import {
  searchbar,
  searchbutton,
  name,
  temp,
  desc,
  humidity,
  body,
} from './dom';

import getweather from './getdata';

const emptyresutl = () => {
  desc.innerHTML = '';
  name.innerHTML = '';
  temp.innerHTML = '';
  humidity.innerHTML = '';
};
const datapros = async (term) => {
  const data = await getweather(term);
  if (data.cod === 200) {
    emptyresutl();
    desc.innerHTML = ` Weather : ${data.weather[0].description}`;
    name.innerHTML = data.name;
    temp.innerHTML = `${data.main.temp} Celcius`;
    humidity.innerHTML = `Humidity : ${data.main.humidity} %`;
    if (data.weather[0].main === 'Rain') {
      body.className = 'rain';
    } else if (
      data.weather[0].main === 'Haze'
      || data.weather[0].main === 'Clouds'
    ) {
      body.className = 'haze';
    } else {
      body.className = 'clear';
    }
  } else {
    emptyresutl();
    desc.innerHTML = "Sorry ,we couldn't find the city :(";
    body.className = 'body';
    desc.className = 'error';
  }
};
datapros('fes');
searchbutton.addEventListener('click', (e) => {
  e.preventDefault();
  datapros(searchbar.value);
  searchbar.value = '';
});
