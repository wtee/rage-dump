function checkKey(event) {
  if (event.which == 13) {
    postRage();
  }
}

function deleteRage(event) {
  event.target.remove();
}

function postRage() {
  var out_id = 'dumped-rage' + iterator;
  iterator++;

  var out = document.createElement('p');
  var input = document.getElementById('rage-text').value;
  document.getElementById('rage-text').value = '';

  out.innerHTML = input;

  out.setAttribute('class', 'fade-out');
  out.setAttribute('id', out_id);
  out.addEventListener('animationend', deleteRage, false);

  document.getElementById('output').append(out);
}

var iterator = 0;

document.getElementById('rage-text').addEventListener("keydown", checkKey, false);
document.getElementById('submit').addEventListener('click', postRage, false);
