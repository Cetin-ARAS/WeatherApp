const url = 'https://api.openweathermap.org/data/2.5/'
const key = '6f064ac18a3b56c2beaa1d07ac2937f7'

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

const getResult = (cityName) =>{
  let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=eng`
//console.log(query);
  fetch(query) //? url request
  .then(weather => { // with chain pattern catch the return value
    return weather.json()
  })
  .then(displayResult) //? with this func we can display comıng date
}

const displayResult = (result) => {//* we cathed weather 
  let city = document.querySelector('.city')
  city.innerText = `${result.name}, ${result.sys.country}`

  let temp = document.querySelector('.temp')
  temp.innerText = `${Math.round(result.main.temp)}°C`

  let desc = document.querySelector('.desc')
  desc.innerText = result.weather[0].description

  let minmax = document.querySelector('.minmax')
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`   
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)