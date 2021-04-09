//Susirandame vieta: 
const DOM = document.querySelector('.stove');
// const platesDOM = DOM.querySelector('.plates');


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

for (let i = 0; i < switches.length; i++){
    const sw = switches[i];
    
    sw.addEventListener('click', function (){
        sw.classList.toggle('green');
    })
}





