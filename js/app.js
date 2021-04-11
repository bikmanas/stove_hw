//Susirandame vieta: 
const plates = document.querySelector('.plates');
const num = ['1', '2', '3', '4'];


let HTML = '';

for (let i = 0; i < num.length; i++){
    HTML += `<div class="heat" data-number="${num[i]}"></div>`;
}


plates.innerHTML = HTML;

const switches = document.querySelector('.switches');
const press = ['1', '2', '3', '4'];

HTML = '';

for (let i = 0; i < press.length; i++){
    HTML += `<div class="button" data-button="${press[i]}"></div>`;
}

switches.innerHTML = HTML;

const controlButtons = document.querySelectorAll('.button');

for (let i = 0; i < controlButtons.length; i++){
    const controlButton = controlButtons[i];
    const controlButtonNum = controlButton.dataset.button;

    controlButton.addEventListener('click', function(){
        const heats = document.querySelectorAll('.heat');

        for(let i = 0; i < heats.length; i++){
            const heat = heats[i];
            const heatNum = heat.dataset.number;
            if(controlButtonNum === heatNum){
                heat.classList.toggle('active');
            }
        }
    });
}






