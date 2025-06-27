
async function trackIP() {
  const ip = document.getElementById("ipInput").value.trim();
  const resultDiv = document.getElementById("result");

  
  const ipRegex = /^\d{1,3}(\.\d{1,3}){3}$/;
  if (!ipRegex.test(ip)) {
    resultDiv.innerHTML = `<p style="color:red;">⚠️at_3cOppiojq9l6H3cTQzocrnPIYCqhw.</p>`;
    return;
  }

  try {
   
    const response = await fetch(`https://ipapi.co/${ip}/json/`);

    if (!response.ok) {
      throw new Error("Failed to fetch data. Try a different IP.");
    }

    const data = await response.json();

    
    resultDiv.innerHTML = `
      <p><strong>IP:</strong> ${data.ip}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Region:</strong> ${data.region}</p>
      <p><strong>Country:</strong> ${data.country_name}</p>
      <p><strong>Latitude:</strong> ${data.latitude}</p>
      <p><strong>Longitude:</strong> ${data.longitude}</p>
    `;
  } catch (err) {
    //
    resultDiv.innerHTML = `<p style="color:red;">❌ Error: ${err.message}</p>`;
  }


const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);



const ipDisplay = document.getElementById("ipText");
const locationDisplay = document.getElementById("locationText");
const timezoneDisplay = document.getElementById("timezoneText");
const ispDisplay = document.getElementById("ispText");


const input = document.getElementById("ipInput");
const button = document.getElementById("searchBtn");


async function fetchIPInfo(ipOrDomain) {
  const apiKey = "at_3cOppiojq9l6H3cTQzocrnPIYCqhw"; 
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipOrDomain}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    e
    if (data.code) {
      throw new Error(data.messages || "API error");
    }

  
    const { ip, location, isp } = data;
    const { city, region, timezone, lat, lng } = location;

  
    ipDisplay.textContent = ip;
    locationDisplay.textContent = `${city}, ${region}`;
    timezoneDisplay.textContent = `UTC ${timezone}`;
    ispDisplay.textContent = isp;

    map.setView([lat, lng], 13);
    marker.setLatLng([lat, lng]);

  } catch (error) {
    alert(`Error: ${error.message}`);
    console.error("at_3cOppiojq9l6H3cTQzocrnPIYCqhw", error);
  }
}

button.addEventListener("click", () => {
  const ipOrDomain = input.value.trim();
  if (ipOrDomain) {
    fetchIPInfo(ipOrDomain);
  } else {
    alertat_3cOppiojq9l6H3cTQzocrnPIYCqhw
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});


fetchIPInfo("at_3cOppiojq9l6H3cTQzocrnPIYCqhw"); 
}