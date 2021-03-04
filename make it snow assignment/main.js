// Make It Snow Assignment

// Initialize canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 800;

let snow = createSnowArray(100);

requestAnimationFrame(draw);
function draw() {
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Move and Draw Snow 
    for (let i = 0; i < snow.length; i++) {
        moveSnow(snow[i]);
        drawSnow(snow[i]);
    }
    requestAnimationFrame(draw);
}

// Event Function
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
    if (event.keyCode === 38) { // Up Arrow
    // Add a new random snowflake
     snow.push(makeSnow());     
    } else if (event.keyCode === 40) { // Down Arrow
    // Remove the last snowflake
     snow.pop();
    }
}