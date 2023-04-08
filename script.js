let container = document.querySelector(".container");
let searchBtn = document.querySelector(".search-button");
let searchBox = document.querySelector(".search-box");
let weatherCtn = document.querySelector(".weatherCtn");
let weatherDetails = document.querySelector(".weather-detailCtn");
let notFound = document.querySelector(".not-found");
let weatherImg = document.querySelector(".weather-img");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity span");
let wind = document.querySelector(".wind span")


searchBtn.addEventListener('click',()=>{
    let apiKey = "8114ef9d89f50a274a98b97b296169d2";
    let city = searchBox.value;

    if(city === ""){
        return;
    }

    getWeatherData = async()=>{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let data = await response.json();

        if(data.cod === '404'){
            container.classList.add("not-active");
            weatherCtn.style.display = "none";
            weatherDetails.style.display = "none";
            notFound.style.display = "block";
            notFound.classList.add("animate__animated","animate__fadeIn");
        }else{

            container.classList.remove("not-active");
            notFound.classList.remove("animate__animated","animate__fadeIn");
            notFound.style.display = "none";
            container.classList.add("active");
            weatherCtn.style.display = "flex";
            weatherDetails.style.display = "flex";

            switch(data.weather[0].main){
                case 'Clear':
                    weatherImg.src = 'images/clear.png';
                    break;

                case 'Rain':
                    weatherImg.src = 'images/rain.png';
                    break;

                case 'Snow':
                    weatherImg.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    weatherImg.src = 'images/cloud.png';
                    break;

                case 'Mist':
                    weatherImg.src = 'images/mist.png';
                    break;

                default:
                    weatherImg.src = '';
            }

            console.log("123456");
        }


        temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
        description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;



    },getWeatherData();

    
    

    
})

