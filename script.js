const mainContainer = document.querySelector(".main-container");
const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".sliderText");
const STARTING_VALUE_SLIDER = 16

// Set the starting value of the slider
slider.value = STARTING_VALUE_SLIDER;

//Initialize grid
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");              
    mainContainer.appendChild(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "skyblue";
    });
}

//Get slider value
slider.addEventListener("input",function() {
    let sliderValue = this.value;
    console.log(sliderValue);
    sliderText.textContent = sliderValue + " x " + sliderValue;
    sliderValue = 0;
});