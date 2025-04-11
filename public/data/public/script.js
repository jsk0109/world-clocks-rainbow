async function loadCities() {
  const responses = await Promise.all([
    fetch('/data/cities1.json'),
    fetch('/data/cities2.json'),
    fetch('/data/cities3.json'),
    fetch('/data/cities4.json'),
    fetch('/data/cities5.json')
  ]);
  const cityArrays = await Promise.all(responses.map(res => res.json()));
  return cityArrays.flat();
}

async function initializeClocks() {
  const cities = await loadCities();
  const initialCities = cities.slice(0, INITIAL_LOAD);
  displayedCities = INITIAL_LOAD;
  allClocks = cities.map(city => ({ clock: createClock(city), city }));
  // 나머지 코드 유지
}

let weatherData = {};
const CACHE_DURATION = 30 * 60 * 1000;
const INITIAL_LOAD = 50;
const LOAD_INCREMENT = 25;
let displayedCities = 0;
let allClocks = [];

async function fetchWeatherChunk(citiesChunk) {
    const promises = citiesChunk.map(city => fetchWeather(city));
    return await Promise.all(promises);
}

async function fetchWeather(city) {
    const cached = localStorage.getItem(`weather_${city.name}`);
    let cachedData = cached ? JSON.parse(cached) : null;
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) return cachedData.data;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}¤t_weather=true&hourly=relativehumidity_2m&timezone=auto`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("API error");
        const data = await response.json();
        const weather = {
            temperature: data.current_weather.temperature,
            humidity: data.hourly.relativehumidity_2m[0],
            weatherIcon: getWeatherIcon(data.current_weather.weathercode)
        };
        localStorage.setItem(`weather_${city.name}`, JSON.stringify({ data: weather, timestamp: Date.now() }));
        return weather;
    } catch (error) {
        console.error(`Weather fetch failed for ${city.name}: ${error}`);
        return { temperature: "20°C", humidity: "50%", weatherIcon: "☀️" };
    }
}

function getWeatherIcon(code) {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "❄️";
    return "🌩️";
}

function createClock(city) {
    const container = document.getElementById("clocks-container");
    const clockDiv = document.createElement("div");
    clockDiv.className = "clock-container";
    clockDiv.dataset.continent = city.continent;
    clockDiv.dataset.city = city.name;
    clockDiv.innerHTML = `
        <div class="city-header">
            <img class="flag-img" src="https://flagcdn.com/24x18/${city.flag}.png" alt="${city.flag}">
            <div class="city-name">${city.name}</div>
        </div>
        <div class="digital-clock"></div>
        <div class="weather-info loading">Weather: Loading</div>
    `;
    container.appendChild(clockDiv);
    return clockDiv;
}

function updateClock(clock, offset, weather) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (3600000 * offset));
    const hours = localTime.getHours().toString().padStart(2, "0");
    const minutes = localTime.getMinutes().toString().padStart(2, "0");
    const seconds = localTime.getSeconds().toString().padStart(2, "0");
    clock.querySelector(".digital-clock").innerHTML = `${hours}:${minutes}:<span class="seconds">${seconds}</span>`;
    clock.querySelector(".weather-info").classList.remove("loading");
    clock.querySelector(".weather-info").innerHTML = weather.temperature !== "N/A" ?
        `Weather: <span class="weather-icon">${weather.weatherIcon}</span> <span class="temperature">${weather.temperature}</span>, Humidity: <span class="humidity">${weather.humidity}</span>` :
        "Weather: N/A";
}

function createFilterButtons() {
    const continents = ["All", "Asia", "Europe", "N America", "S America", "Africa", "Oceania"];
    const container = document.getElementById("filter-buttons");
    continents.forEach(continent => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = continent;
        btn.dataset.continent = continent === "All" ? "" : continent.replace("N ", "North ").replace("S ", "South ");
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterClocks(btn.dataset.continent);
        });
        container.appendChild(btn);
    });
    document.querySelector(".filter-btn").classList.add("active");
}

function filterClocks(continent) {
    const clocks = document.querySelectorAll(".clock-container");
    clocks.forEach(clock => {
        const matchesContinent = continent === "" || clock.dataset.continent === continent;
        const matchesSearch = document.getElementById("search").value.toLowerCase() === "" ||
            clock.dataset.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase());
        clock.style.display = matchesContinent && matchesSearch ? "block" : "none";
    });
}

async function initializeClocks() {
    const initialCities = cities.slice(0, INITIAL_LOAD);
    displayedCities = INITIAL_LOAD;

    allClocks = cities.map(city => ({ clock: createClock(city), city }));

    allClocks.forEach(({ clock }, index) => {
        clock.style.display = index < INITIAL_LOAD ? "block" : "none";
    });

    const chunkSize = 10;
    for (let i = 0; i < initialCities.length; i += chunkSize) {
        const chunk = initialCities.slice(i, i + chunkSize);
        const results = await fetchWeatherChunk(chunk);
        chunk.forEach((city, index) => {
            weatherData[city.name] = results[index];
            const clock = allClocks.find(c => c.city.name === city.name);
            updateClock(clock.clock, clock.city.offset, weatherData[city.name]);
        });
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    return allClocks;
}

async function loadMoreClocks() {
    const nextCities = cities.slice(displayedCities, displayedCities + LOAD_INCREMENT);
    const newClocks = allClocks.slice(displayedCities, displayedCities + LOAD_INCREMENT);
    displayedCities += LOAD_INCREMENT;

    newClocks.forEach(({ clock }) => {
        clock.style.display = "block";
    });

    const chunkSize = 10;
    for (let i = 0; i < nextCities.length; i += chunkSize) {
        const chunk = nextCities.slice(i, i + chunkSize);
        const results = await fetchWeatherChunk(chunk);
        chunk.forEach((city, index) => {
            weatherData[city.name] = results[index];
            const clock = allClocks.find(c => c.city.name === city.name);
            updateClock(clock.clock, clock.city.offset, weatherData[city.name]);
        });
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    document.getElementById("load-more").disabled = displayedCities >= cities.length;
}

function setupSearch() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        allClocks.forEach(({ clock }) => {
            const matchesSearch = query === "" || clock.dataset.city.toLowerCase().includes(query);
            const matchesContinent = document.querySelector(".filter-btn.active").dataset.continent === "" ||
                clock.dataset.continent === document.querySelector(".filter-btn.active").dataset.continent;
            clock.style.display = matchesSearch && matchesContinent ? "block" : "none";
        });
    });

    searchInput.addEventListener("keyup", () => {
        const query = searchInput.value.toLowerCase();
        const suggestions = cities.filter(city => city.name.toLowerCase().startsWith(query)).slice(0, 5);
        console.log("Suggestions:", suggestions.map(c => c.name));
    });
}

const continentColors = {
    "North America": "#388E3C",
    "Europe": "#FBC02D",
    "Asia": "#F57C00",
    "South America": "#1976D2",
    "Africa": "#303F9F",
    "Oceania": "#7B1FA2"
};

initializeClocks().then(clocks => {
    allClocks = clocks;
    createFilterButtons();
    setupSearch();

    document.querySelectorAll(".clock-container").forEach(clock => {
        const continent = clock.dataset.continent;
        clock.querySelector(".digital-clock").style.color = continentColors[continent] || "#000000";
    });

    setInterval(() => allClocks.forEach(({ clock, city }) => 
        updateClock(clock, city.offset, weatherData[city.name] || { temperature: "20°C", humidity: "50%", weatherIcon: "☀️" })
    ), 1000);

    document.getElementById("load-more").addEventListener("click", () => {
        console.log("Load more clicked, displayedCities:", displayedCities);
        loadMoreClocks();
    });
});
