const KEY = "RFVVXLK4PSWPU7LZH7NX7MU8Z";

const locationText = document.querySelector("#location-text");
const tempText = document.querySelector("#temperature-text");
const conditionText = document.querySelector("#condition-text");

const locationInput = document.querySelector("#location-input");
const unitDropdown = document.querySelector("#unit-dropdown");

async function getWeather() {
  const location = locationInput.value;
  const unit = unitDropdown.value;

  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${KEY}&contentType=json`,
    { mode: "cors" }
  );
  response
    .json()
    .finally(() => {
      locationText.textContent = "Loading...";
    })
    .then((response) => {
      const newResponse = formatData(response);

      locationText.textContent = newResponse.location;
      tempText.textContent = newResponse.temperature;
      unit === "us"
        ? (tempText.textContent += "°F")
        : (tempText.textContent += "°C");
      conditionText.textContent = newResponse.condition;
    })
    .catch((error) => {
      console.log(error);
    });
}

function formatData(data) {
  return {
    location: data.address,
    temperature: data.currentConditions.temp,
    condition: data.currentConditions.conditions,
  };
}
