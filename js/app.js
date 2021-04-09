//Susirandame vieta: 
const DOM = document.querySelector('.stove');


//Sukuriame turini: 

const symbols = ['1', '2', '3', '4'];

let HTML = '';

for (let i = 0; i < symbols.length; i++){
    HTML += `<div class="key" data-symbol="${symbols[i]}"></div>`;
}

//Istatome turini i vieta:

DOM.insertAdjacentHTML('beforeend', HTML);

//Susirandame sukurtus mygtukus:
const switches = document.querySelectorAll('.key');
console.log(switches);



