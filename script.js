async function getWeatherAlerts(city) {
  const url = `https://weatherapi-com.p.rapidapi.com/alerts.json?q=${city}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '28c71c39ddmshdf849b90088a9bap1f8a4ajsn40b9669044bb', // ⚠️ keep it private
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    // ❗ alerts API may not return location
    if (result.location) {
      const location = result.location;

      document.getElementById("name").innerHTML = location.name;
      document.getElementById("name2").innerHTML = location.name;
      document.getElementById("region").innerHTML = location.region;
      document.getElementById("country").innerHTML = location.country;
      document.getElementById("lat").innerHTML = location.lat;
      document.getElementById("lat2").innerHTML = location.lat;
      document.getElementById("lon").innerHTML = location.lon;
      document.getElementById("tz_id").innerHTML = location.tz_id;
      document.getElementById("localtime_epoch").innerHTML = location.localtime_epoch;
      document.getElementById("localtime_epoch2").innerHTML = location.localtime_epoch;
      document.getElementById("localtime").innerHTML = location.localtime;
    } else {
      console.warn("No location data in alerts API");
    }

  } catch (error) {
    console.error('Error fetching weather alerts:', error);
  }
}

// ✅ DOM elements
const submit = document.getElementById("submit");
const city = document.getElementById("city");
const cityName = document.getElementById("cityName");

// ✅ Event listener (fixed typo)
submit.addEventListener("click", (e) => {
  e.preventDefault();
  cityName.innerHTML = city.value;
  getWeatherAlerts(city.value);
});

// ✅ Default load
getWeatherAlerts("New Delhi");