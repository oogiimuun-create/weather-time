const super1 = document.getElementById("cityname");
const tolov = document.getElementById("tolov");
const temp = document.getElementById("temp");
const main = async () => {
  console.log(super1.value);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${super1.value}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a`
  );
  const data = await response.json();
  tolov.innerHTML = data.weather[0].description;
  temp.innerHTML = data.main.temp;
  console.log(data);
};
