const searchButton = document.getElementById('search');
const cityNameInput = document.getElementById('city-name');

searchButton.addEventListener('click', () => {
  const text = cityNameInput.value;
  populateSearch(text);
})

const populateSearch = async (cityName) => {
  const response = await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });
  const body = await response.json()
  const joke = body.joke;
  console.log(joke)
}