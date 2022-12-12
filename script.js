const url = 'https://api.openweathermap.org/data/2.5/'
const key = '6f064ac18a3b56c2beaa1d07ac2937f7'

const setQery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

const getResult = (cityName) =>{
  let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
//console.log(query);
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQery)