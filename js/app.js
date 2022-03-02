const Api_Key = `1879f01fb3b7c382990919e7ad66f1dc`;

const searchTemperature = () => {
    const inputField = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${Api_Key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
    // console.log(inputField);
}