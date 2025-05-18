function createDivs(numberOfDivs) {
    const container = document.querySelector("#container");

    numberOfDivs = parseInt(prompt("Enter the number of Squares you want!!"));
    

    for (let i = 0; i < numberOfDivs; i++) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.style.padding = '10px';
        newDiv.style.margin = '5px';
        newDiv.style.height = "120px"
        newDiv.style.width = "120px"
    }
}

const btn = document.querySelector("button");
btn.addEventListener("click", createDivs);


const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());
