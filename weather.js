const inputVal = document.querySelector('#cityInput');
const btn = document.querySelector('#add');
const city = document.querySelector('#cityoutput');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');
const wind = document.querySelector('#wind');
const apiKey = '3045dd712ffe6e78283245525ac7fa38';

// Kelvin to Celsius conversion
function conversion(val) {
  return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function(){
    const cityName = inputVal.value.trim();

    if (cityName === '') {
      alert('Please enter a city name');
      return;
    }
    //This is the api link from where all the information will be collected
    
          fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
          .then(res => res.json())
    
           //.then(data => console.log(data))
    
          .then(data => {
    
    //Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.
    
              const nameval = data['name']
              const descrip = data['weather']['0']['description']
              const tempature = data['main']['temp']
              const wndspd = data['wind']['speed']
    //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
              city.innerHTML=`Weather of <span>${nameval}<span>`
              temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
              description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
              wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
    
          })
    
    //Now the condition must be added that what if you do not input anything in the input box.
          .catch(err => alert('You entered Wrong city name'))
      })
    //If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be seen.
     
