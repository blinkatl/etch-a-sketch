const mainContainer = document.querySelector(".main-container");

//Initialize grid
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");              //Add class "square"
    mainContainer.appendChild(square);
}