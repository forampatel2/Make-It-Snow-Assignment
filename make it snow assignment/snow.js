// Snow Functions

function makeSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(3, 4),
        speed: Math.random(2, 4) * 2.5
    };
}

function createSnowArray(total) {
    let temp = [];
    for (let n = 1; n <= total; n++) {
        temp.push(makeSnow());
    }
    return temp;
}

function drawSnow(aSnow) {
    fill("white")
    ctx.beginPath();
    ctx.arc(aSnow.x, aSnow.y, aSnow.r, 0, 2 * Math.PI);
    ctx.fill();
}  

function moveSnow(aSnow) {
    aSnow.y += aSnow.speed;
    if (aSnow.y > cnv.height) {
        aSnow.y = 0;
        aSnow.x = randomInt(0, cnv.width);
    }
}