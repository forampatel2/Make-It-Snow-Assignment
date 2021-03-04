// GRAPHICS LIBRARY
// Requires global cnv and ctx variables

// Fill the canvas with the provided color
function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill");
}

// Set the strokeStyle
function stroke(color){
    ctx.strokeStyle = color;
}

// Set the fillStyle
function fill(color){
    ctx.fillStyle = color;
}

// Set the lineWidth
function lineWidth(width){
    ctx.lineWidth = width;
}

// Set the fontSetting
function font(fontSetting){
    ctx.font = fontSetting;
}

//Draw a stroke or fill a rectangle with a top left corner of (x, y) 
//a width of w or and a height of h
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if(mode === "stroke"){
        ctx.strokeRect(x, y, w, h);
    }
}

//Draw a line segment from (x1, y1) t0 (x2, y2)
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //Endpoint 1
    ctx.lineTo(x2, y2); //Endpoint 2
    ctx.stroke();
}

// Draw a stroke or fill circle with centre (x.y) and radius of r
function circle(x, y, r, mode){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill"){
        ctx.fill();
    } else if (mode === "stroke"){
        ctx.stroke();
    }

}

// Draw a stroke or fill triangle from with vertices of (x1, y1), 
//(x2, y2) and (x3, y3).
function triangle(x1, y1, x2, y2, x3, y3, mode){
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Vertex 1
    ctx.lineTo(x2, y2); // Vertex 2
    ctx.lineTo(x3, y3); // Vertex 3
    if (mode === "fill"){
        ctx.fill();
    }else if (mode === "stroke"){
        ctx.closePath();
        ctx.stroke();
    }
    
}

function text(message, x, y, mode) {
    if (mode === "fill"){
        ctx.fillText(message, x, y);
    }else if (mode === "stroke") {
        ctx.strokeText(message, x, y);
    }
}

