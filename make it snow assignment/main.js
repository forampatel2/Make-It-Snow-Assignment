// Let It Snow Assignment

// Initialize canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 800;



// Create an array of random snowflakes
let snowflakes = [];
for (let n = 1; n <= 100; n++) {
    snowflakes.push(newRandomSnow());
}

// Main Draw Function
requestAnimationFrame(draw);
function draw() {
    //Fill Canvas
    background("black");

// Move & Draw the Snowflakes
for (let i = 0; i < snowflakes.length; i++) {
    drawSnow(snowflakes[i]);
    moveSnow(snowflakes[i]);
} 

  requestAnimationFrame(draw);

}

function newRandomSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(2, 5),
    } 
}    

function drawSnow(aSnow) {
    // Draw Snow at random area
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(aSnow.x, aSnow.y, aSnow.r, 0, 2 * Math.PI);
    ctx.fill();
}  

function moveSnow(aSnow) {
    // snow to bottom
    aSnow.y += randomInt(0, 1);

    // teleport to top
    for (let i = 0; i < snowflakes.length; i++) {
        if (snowflakes[i].y >= 600) {
            snowflakes[i].y = 0;
            snowflakes[i].x = randomInt(0, cnv.width);
        }
    }
}
// Event Handler
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 38) {
    // Up Arrow - add snowflakes
    snowflakes.push(newRandomSnow());
    } else if (event.keyCode === 40) {
    // Down Arrow - remove snowflakes    
    } snowflakes.pop();
}