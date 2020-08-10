
function getDogPicture(dogBreed) {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error;
      }
    })
    .then(responseJson => renderDogImage(responseJson))
    .catch(error => alert('Please enter a valid dog breed'));
}

function renderDogImage(responseJson) {
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img"></img>`
  )
  $('.results').show();
}

function formHandler() {
  $('#dog-btn').on('click', () => {
    const dogBreed = $('#breedInput').val().toLowerCase();
    console.log(dogBreed);
    getDogPicture(dogBreed);
  });
}

$(function() {
  console.log("Just waiting for an imput doggy!");
  formHandler();
})