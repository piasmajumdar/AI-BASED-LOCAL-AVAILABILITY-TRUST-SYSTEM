const cityBtn = document.getElementById("cityBtn");
const cityDropdown = document.getElementById("cityDropdown");
const selectedCity = document.getElementById("selected-city");
const cityItems = document.querySelectorAll(".city-item");
const useLocationBtn = document.getElementById("useLocation");

// Toggle dropdown
cityBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cityDropdown.classList.toggle("hidden");
});

// Close when clicking outside
document.addEventListener("click", () => {
  cityDropdown.classList.add("hidden");
});

// Select city manually
cityItems.forEach(item => {
  item.addEventListener("click", () => {
    const cityName = item.innerText.trim();
    selectedCity.innerText = cityName;
    localStorage.setItem("selectedCity", cityName);
    cityDropdown.classList.add("hidden");
  });
});

// Load saved city on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedCity = localStorage.getItem("selectedCity");
  if (savedCity) {
    selectedCity.innerText = savedCity;
  }
});

// Use Current Location
useLocationBtn.addEventListener("click", () => {

  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  selectedCity.innerText = "Detecting...";

  navigator.geolocation.getCurrentPosition(async (position) => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );

      const data = await response.json();

      const city =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        "Unknown";

      selectedCity.innerText = city;

      localStorage.setItem("selectedCity", city);
      localStorage.setItem("userLat", lat);
      localStorage.setItem("userLon", lon);

    } catch (error) {
      selectedCity.innerText = "Vijayawada";
      alert("Unable to detect city");
    }

    cityDropdown.classList.add("hidden");

  }, () => {
    alert("Location permission denied");
    selectedCity.innerText = "Vijayawada";
  });

});
