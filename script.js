
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  function getPreviousSearch(value){
    
  }

  function savePreviousSearch(dropdownID,currentVal){
    localStorage.setItem(dropdownID, currentVal);
    document.getElementById(dropdownID).innerHTML = currentVal

  }

  function test(currentVal){
    var storages = 0
    for(let i = 1; i <= 5; i++)
    {
      if(document.getElementById('storage'+i).innerHTML != "TBD"){
        console.log("Not Null")
        storages ++
      }
    }
    if(storages < 5){
      var ID = storages+1
      var storageID = "storage" + ID
      savePreviousSearch(storageID, currentVal);
    }
    else{
      for(let x = 1; x<=4; x++){
        var nextID = x+1
        document.getElementById('storage'+x).innerHTML = document.getElementById('storage'+nextID).innerHTML
      }
      savePreviousSearch('storage5', currentVal);
    }
  }
  
  
  function searchWeather() {
    var city = document.getElementById("searchCity");
    var currentVal = city.value;
    test(currentVal);
    

    if (currentVal !== "") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentVal}&appid=f8b11d0ecace8823a325a2d79405c086`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    console.log(data.main.temp)
    console.log(data.wind.speed)
    console.log(data.main.humidity)
    document.getElementById('currentDate').innerHTML = today
    document.getElementById('cityName').innerHTML = data.name
    document.getElementById('currentTemp').innerHTML = "Temp: " + Math.round((data.main.temp - 273.15) * 9/5 + 32) + "\u00B0 Fahrenheit"
    document.getElementById('currentWind').innerHTML = "Wind: " + data.wind.speed + " MPH"
    document.getElementById('currentHumidity').innerHTML = "Humidity: " + data.main.humidity + " %"
    });
    }

    } 
