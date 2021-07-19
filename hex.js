const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Variables
const body = document.querySelector("body");
const button = document.querySelector("button");
const hexHeading = document.querySelector("h2");
const color = document.querySelector("span");

button.addEventListener("click", () => {
    // Variable that will return the hex-color code
    let hexOutput = "#";
    // Generating six random numbers
    for (let i = 0; i < 6; i++) {
        // Generating a random number with a maximum of the hex array for every point of the loop
        const random = Math.floor(Math.random() * hex.length);
        // The final hex-color code
        hexOutput += hex[random]
    }

    // Setting the heading and the background color to be updated to the hex-color code
    hexHeading.innerHTML = `background color : ${hexOutput}`;
    body.style.backgroundColor = hexOutput;
})

