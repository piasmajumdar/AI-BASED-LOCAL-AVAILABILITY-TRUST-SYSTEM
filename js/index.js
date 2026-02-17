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




// Auto Update Year
document.getElementById("year").textContent = new Date().getFullYear();

// Back to Top Button Logic
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






// Card-Container Responsive Part
document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("hero-card-container");
    const cards = container.querySelectorAll("a");

    let currentIndex = 0;
    let interval;

    function getScreenType() {
        const width = window.innerWidth;

        if (width < 768) return "small";
        if (width >= 768 && width < 1024) return "medium";
        return "large";
    }

    function resetCards() {
        cards.forEach(card => {
            card.style.display = "none";
            card.classList.remove("mx-auto");
        });
    }

    function showCards() {
        const screen = getScreenType();
        resetCards();

        if (screen === "small") {
            cards[currentIndex].style.display = "block";
            cards[currentIndex].classList.add("mx-auto");
        }

        else if (screen === "medium") {
            cards[currentIndex].style.display = "block";
            cards[(currentIndex + 1) % cards.length].style.display = "block";
        }

        else {
            // large screen → show all
            cards.forEach(card => card.style.display = "block");
            clearInterval(interval);
            return;
        }
    }

    function startSlider() {
        clearInterval(interval);

        if (getScreenType() === "large") return;

        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            showCards();
        }, 3000); // change every 3 seconds
    }

    function init() {
        currentIndex = 0;
        showCards();
        startSlider();
    }

    window.addEventListener("resize", init);

    init();
});


