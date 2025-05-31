const clock = document.querySelector('#clock');


setInterval(function(){},1000)
let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
