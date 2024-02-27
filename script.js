const mainContainer = document.querySelector(".main-container");
const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".sliderText");
const STARTING_VALUE = 16;

//Remove previous squares
function clearGrid() {
    mainContainer.innerHTML = "";
}

//Create grid size based off slider value
function createGrid(sliderValue) {
    for (let i = 0; i < (sliderValue * sliderValue); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (600 / Math.sqrt(sliderValue**2)) + "px";
        square.style.height = (600 / Math.sqrt(sliderValue**2)) + "px";                
        mainContainer.appendChild(square);
        
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "skyblue";
        })
    }
}

//Initialize grid and slider 
createGrid(STARTING_VALUE);
slider.value = STARTING_VALUE;

//Get slider value
slider.addEventListener("input",function() {
    let sliderValue = this.value;
    clearGrid();
    createGrid(sliderValue);
    
    sliderText.textContent = sliderValue + " x " + sliderValue;
    sliderValue = 0;
});