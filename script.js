
var newCol = document.getElementById("newCol");
var colOut = document.getElementById("col");
var select1 = document.querySelector(".container");
var btn1 = document.getElementById("apply");

for(let i = 0; i < 256; i++){

    select1.setAttribute('style', 'grid-template-columns: repeat(16, auto);');

    const div1 = document.createElement("div");
    div1.classList.add('gridBox');

    select1.appendChild(div1);

    div1.addEventListener('mousedown', function() {
        div1.setAttribute('style', 'background-color: blue;');
    });
    
}

colOut.innerHTML = newCol.value + " x " + newCol.value;

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

        div2.addEventListener('click', function() {
            div2.setAttribute('style', 'background-color: blue;');
        });

    }

});
