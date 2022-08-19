
function makeNewGrid(numRow, numCol){

}

for(let i = 0; i < 256; i++){

    const select1 = document.querySelector(".container");

    const div1 = document.createElement("div");
    div1.classList.add('gridBox');

    select1.appendChild(div1);

    div1.addEventListener('mouseover', function() {
        div1.setAttribute('style', 'background-color: blue;');
    });
    
}

const btn1 = document.querySelector(".popup-btn");

btn1.addEventListener('click', function(){

    let numRow;  
    let numCol; 

    numRowl = prompt("Enter number of row");
    numCol = prompt("Enter number of column");

    makeNewGrid(numRow, numCol);

});