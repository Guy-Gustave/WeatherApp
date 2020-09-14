const key = 'bdc41b55a4c712c6598fce628e1a5254';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const getweather = async (term) => {
  try {
    const res = await (
      await fetch(`${url}${term}&units=metric&appid=${key}`)
    ).json();
    return res;
  } catch (err) {
    return err;
  }
};

export default getweather;
