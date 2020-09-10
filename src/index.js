import { searchbar, searchbutton } from './dom';

const infodis = document.getElementById('desc');
let key = 'bdc41b55a4c712c6598fce628e1a5254';
let url = 'https://api.openweathermap.org/data/2.5/weather?q=';

let rdd = {};
const getweather = async (term) => {
  const res = await (await fetch(`${url}${term}&appid=${key}`)).json();
  return res;
};

const datapros = async (term) => {
  const data = await getweather(term);
  console.log(data.weather[0].description);
  infodis.innerHTML = data.weather[0].description;
};
datapros('fes');
searchbutton.addEventListener('click', (e) => {
  e.preventDefault();
  datapros(searchbar.value);
});
