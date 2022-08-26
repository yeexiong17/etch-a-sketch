
var newCol = document.getElementById("newCol");
var colOut = document.getElementById("col");
var select1 = document.querySelector(".container");
var btn1 = document.getElementById("apply");

// Event Listener & paintGrid are made based on Pau Rodriguez Molina's (Odin Project) code.
// Paint only when mouse being clicked / clicked and drag.
select1.addEventListener('mousedown', event =>{ 
    
    selectedColor = "blue";

    paintGridEvent = paintGrid(event, selectedColor);

    if(event.buttons == 1){        
        window.addEventListener('mouseover', (e) => {
            if(selectedColor == 'blue'){
                paintGrid(e, selectedColor);
            }            
        });
    }

});

function paintGrid(element, color){ 

    if(element.buttons == 1){

        if(element.target.classList == 'gridBox'){
            let box = element.target;    
             box.style.backgroundColor = color;
        }  
    }else{
        //Exit condition if mouse is not clicked.
        return;
    }

}

// Default grid of 16 x 16
for(let i = 0; i < 256; i++){

    select1.setAttribute('style', 'grid-template-columns: repeat(16, auto);');

    const div1 = document.createElement("div");
    div1.classList.add('gridBox');

    select1.appendChild(div1);
}

// Print 16 x 16 beside slider
colOut.innerHTML = newCol.value + " x " + newCol.value;

// Print new slider value (eg: 5 x 5) when dragged
newCol.oninput = function() {
  colOut.innerHTML = this.value + " x " + this.value;
}

/* Make new grid based on user input of width and height*/
btn1.addEventListener('click', function(){

    var dlt1 = document.querySelectorAll('.gridBox');

    dlt1.forEach(gridBox => {
        gridBox.remove();
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
