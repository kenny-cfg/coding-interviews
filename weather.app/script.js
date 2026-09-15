const searchButton = document.getElementById('search');
const cityNameInput = document.getElementById('city-name');
searchButton.addEventListener('click', () => {
  const text = cityNameInput.value;
  console.log('CLICK!', text);
})