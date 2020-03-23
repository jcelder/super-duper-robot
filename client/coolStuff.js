const display1 = document.getElementById('display');
const display2 = document.getElementById('display2');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  display.innerHTML = 'Welcome to Hack Reactor';
  display2.innerHTML = 'P.S. Help Desk Rocks!'
});