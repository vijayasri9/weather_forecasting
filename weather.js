    function checkWeather(){
    let city = document.getElementById('inp').value

    document.getElementById('inp').value =''

  fetch(`http://api.weatherapi.com/v1/current.json?key=235d62528ee8420eb89165130252008&q=${city}`)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        document.getElementById('location').innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`
        document.getElementById('tempc').innerHTML = `Temperature in C = ${data.current.temp_c}`

        let condition = data.current.condition.text; 
        const gif = document.getElementById('weatherGif');

const gifMap = {
  "cloudy": "cloudy.gif",
  "sunny": "sunny.gif",
  "Partly cloudy": "PartlyCloudy.gif"
};

if (condition == "cloudy") {
  gif.src = "cloudy.gif";}
else if (condition == "Sunny") {
  gif.src = "sunny.gif";}

else if (condition == "Partly cloudy") {
  gif.src = "PartlyCloudy.gif";
} else if (condition.includes("Clear")) {
  gif.src = "clear.gif";
} else if (condition.includes("Mist")) {
  gif.src = "mist.gif";
} else if (
  condition.includes("Patchy light drizzle") ||
  condition.includes("Light rain shower") ||
  condition.includes("Light drizzle") ||
  condition.includes("Light rain")
) {
  gif.src = "drizzle.gif";
} else {
  gif.src = "";
}
        document.getElementById('weatherGif').style.width = "140px"
        document.getElementById('wind').innerHTML = `Wind speed = ${data.current.wind_kph}`
    })
    .catch(error => {
  alert("City not found. Please try again.");
});
}


