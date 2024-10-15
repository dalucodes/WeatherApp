 const apikey ="e2de8bb7931178ab9cf7eb70a00cfdb3"
 const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
 const searchBox= document.querySelector(".search input");
 const searchBtn= document.querySelector(".search button")

 async function checkWeather(city){
        const response =await fetch(apiurl+ city +`&APPID=${apikey}`)
        var data = await response.json()
        console.log(data)
        // console.log("error", e)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
}
searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);
})


