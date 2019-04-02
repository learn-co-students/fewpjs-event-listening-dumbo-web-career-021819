
let input = document.querySelector('#input');

function addingEventListener() {

  function eventAlert() {
    alert("Click Successful");
  }

  input.addEventListener('click', eventAlert);
}

addingEventListener();
