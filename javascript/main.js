var textElement = document.getElementById('text');

var button = document.getElementById('buttonExample');

button.onclick = function() {
  textElement.innerHTML = 'We clicked the button';
}

var input = document.getElementById('inputExample');

input.oninput = function() {
  document.getElementById('inputOut').innerHTML = this.value;
}

var arr = [];
arr.push(7);
arr.push('hello');

var person = {
  name: 'Surya',
  age: 16
};
