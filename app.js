window.addEventListener('load', ()=>{
let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');

if (navigator.geolocation) {
 
   navigator.geolocation.getCurrentPosition(position =>{
       long = position.coords.longitude;
       lat = position.coords.altitude;
       const proxy = 'https://cors-anywhere.herokuapp.com/'

       const api = `${[proxy]}https://api.darksky.net/forecast/38f30bc150e01297737cec1cfdf2b887/${lat},${long}`;

       fetch(api)
       .then(response =>{
           return response.json();
       })
       .then(data => {
           
           const {temperature, summary}= data.currently;
        //    set DOM elementsfrom the api
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent =data.timezone;



         });
   });

}
});