var spanGang = "<span> Item1 </span> <span> Item2 </span> <span> Item3 </span> <span> Item4 </span> <span> Item5 </span> "; 
var containter = document.querySelector('.container');
containter.innerHTML= spanGang;

let count = 0

var button = document.querySelector('#button')
var btnContainer = document.querySelector('#display');

button.addEventListener('click', () => {
    count ++;
    btnContainer.innerHTML = `<p>Counter: ${count}</p>`;
})



