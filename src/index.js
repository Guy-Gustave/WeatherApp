import {
  searchbar,
  searchbutton,
  name,
  temp,
  desc,
  humidity,
  body,
  tempswitchBtn,
} from './dom';

import getweather from './getdata';

const emptyresutl = () => {
  desc.innerHTML = '';
  name.innerHTML = '';
  temp.innerHTML = '';
  humidity.innerHTML = '';
  tempswitchBtn.className = 'none';
};

const tempswitch = (val, type) => {
  let temp = null;
  if (type === '℃') {
    temp = (val * (9 / 5) + 32).toFixed(2);
    type = '℉';
  } else {
    temp = ((val - 32) * (5 / 9)).toFixed(2);
    type = '℃';
  }
  return { temp, type };
};

const datapros = async (term) => {
  const data = await getweather(term);
  if (data.cod === 200) {
    emptyresutl();
    desc.innerHTML = ` Weather : ${data.weather[0].description}`;
    name.innerHTML = data.name;
    temp.innerHTML = `${data.main.temp} Celcius`;
    humidity.innerHTML = `Humidity : ${data.main.humidity} %`;
    tempswitchBtn.className = 'temp_unit';

    let tempoutput = data.main.temp;
    tempswitchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const tempSwitch = tempswitch(tempoutput, tempswitchBtn.innerHTML);
      tempoutput = tempSwitch.temp;
      tempswitchBtn.innerHTML = tempSwitch.type;
      temp.innerHTML = `${tempSwitch.temp} ${tempSwitch.type}`;
    });

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
    desc.innerHTML = data.message;
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
