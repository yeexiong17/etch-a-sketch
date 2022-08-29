
var newCol = document.getElementById("newCol");
var colOut = document.getElementById("col");
var select1 = document.querySelector(".container");
var btn1 = document.getElementById("apply");
var black = document.querySelector(".btn-1");
var rainbow = document.querySelector(".btn-2");
var erase = document.querySelector(".btn-3");
var clear = document.querySelector(".btn-4");

let state_1;
let state_2;
let state_3;
let state_4;  

function state_of_button(state1, state2, state3, state4){

    if(state1 == 1 && state2 == 0 && state3 == 0 && state4 == 0){
        black.style.backgroundColor = `black`;
        black.style.color = `white`;
    }else{
        black.style.backgroundColor = `white`;
        black.style.color = `black`;
    }

    if(state1 == 0 && state2 == 1 && state3 == 0 && state4 == 0){
        rainbow.style.backgroundColor = `black`;
        rainbow.style.color = `white`;
    }else{
        rainbow.style.backgroundColor = `white`;
        rainbow.style.color = `black`;
    }

    if(state1 == 0 && state2 == 0 && state3 == 1 && state4 == 0){
        erase.style.backgroundColor = `black`;
        erase.style.color = `white`;
    }else{
        erase.style.backgroundColor = `white`;
        erase.style.color = `black`;
    }

    if(state1 == 0 && state2 == 0 && state3 == 0 && state4 == 1){
        clear.style.backgroundColor = `black`;
        clear.style.color = `white`;
    }else{
        clear.style.backgroundColor = `white`;
        clear.style.color = `black`;
    }

}

//For painting grid
function paintGrid(element, color){ 

    if(color !== "rainbow"){
        if(element.buttons == 1){
            if(element.target.classList == 'gridBox'){
                let box1 = element.target;    
                    box1.style.backgroundColor = color;
            }  
        }else{
            //Exit condition if mouse is not clicked.
            return;
        }
    
    // If color is equal to rainbow
    }else{

        if(element.buttons == 1){
            if(element.target.classList == 'gridBox'){
                let box2 = element.target;
                    box2.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            }
        }else{
            return;
        }

    }
}

// Generate random number between 0 - 255
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

// Default grid of 16 x 16
for(let i = 0; i < 256; i++){

    select1.setAttribute('style', 'grid-template-columns: repeat(16, auto);');

    const div1 = document.createElement("div");
    div1.classList.add('gridBox');

    select1.appendChild(div1);
}

// Print 16 x 16 below slider
colOut.innerHTML = newCol.value + " x " + newCol.value;

// Print new slider value (eg: 5 x 5) when dragged
newCol.oninput = function() {
  colOut.innerHTML = this.value + " x " + this.value;
}

/* Make new grid based on user input of width and height*/
btn1.addEventListener('click', function(){

    var dlt1 = document.querySelectorAll('.gridBox');

    dlt1.forEach(gridBox1 => {
        gridBox1.remove();
    });

    /* Total box needed for the specific number of row and column*/
    totalBox = newCol.value * newCol.value;

    for(let i = 0; i < totalBox; i++){
        
        const div2 = document.createElement("div");
        div2.classList.add('gridBox');
        select1.style.gridTemplateColumns = `repeat(${newCol.value}, auto)`;

        select1.appendChild(div2);

    }

});

// Event Listener & paintGrid are made based on Pau Rodriguez Molina's (Odin Project) code.
// Paint only when mouse being clicked / clicked and drag.
black.addEventListener('click', function(){

    state_1 = 1;
    state_2 = 0;
    state_3 = 0;
    state_4 = 0;

    state_of_button(state_1, state_2, state_3, state_4);

    select1.addEventListener('mousedown', event =>{ 
        
        selectedColor = "black";

        paintGridEvent = paintGrid(event, selectedColor);

        if(event.buttons == 1){        
            window.addEventListener('mouseover', (e) => {
                if(selectedColor == 'black'){
                    paintGrid(e, selectedColor);
                }            
            });
        }

    });
});

rainbow.addEventListener('click', function(){

    state_1 = 0;
    state_2 = 1;
    state_3 = 0;
    state_4 = 0;

    state_of_button(state_1, state_2, state_3, state_4);

    select1.addEventListener('mousedown', event => {

        selectedColor = "rainbow";

        gridBoxEvent = paintGrid(event, selectedColor);

        if(event.buttons == 1){

            window.addEventListener('mouseover', (e) => {
                if(selectedColor == "rainbow"){
                    gridBoxEvent = paintGrid(e, selectedColor);
                }
            });
        }
    });
});

// Erase grid box by click or click and drag around the grid box
erase.addEventListener('click', function(){

    state_1 = 0;
    state_2 = 0;
    state_3 = 1;
    state_4 = 0;
    
    state_of_button(state_1, state_2, state_3, state_4);

    select1.addEventListener('mousedown', event => {
        selectedColor = "white";

        gridBoxEvent = paintGrid(event, selectedColor);

        if(event.buttons == 1){
            window.addEventListener('mouseover', (e) => {
                if(selectedColor == 'white'){
                    paintGrid(e, selectedColor);
                }
            });
        }
    })
    
});

// Clear whole grid when CLEAR button is being pressed
clear.addEventListener('click', function(){

    state_1 = 0;
    state_2 = 0;
    state_3 = 0;
    state_4 = 1;

    state_of_button(state_1, state_2, state_3, state_4);    

    var gridBox = document.querySelectorAll(".gridBox");
    
    gridBox.forEach(grid2 => {
        grid2.style.backgroundColor = `white`;
    });

    select1.addEventListener('mousedown', event => {
        selectedColor = "white";

        gridBoxEvent = paintGrid(event, selectedColor);

        if(event.buttons == 1){
            window.addEventListener('mouseover', (e) => {
                if(selectedColor == 'white'){
                    paintGrid(e, selectedColor);
                }
            });
        }
    })

});