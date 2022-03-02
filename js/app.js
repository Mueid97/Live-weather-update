const Api_Key = `1879f01fb3b7c382990919e7ad66f1dc`;

const searchTemperature = () => {
    const inputField = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${Api_Key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
    // console.log(inputField);
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temp => {
    setInnerText('city', temp.name);
    setInnerText('temperature', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
     console.log(temp);

    //  set weather icon 
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}

