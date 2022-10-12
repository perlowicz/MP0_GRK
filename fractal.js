const firstPoint = [400,150];
const secondPoint = [500,250];
const thirdPoint = [300,50];


function setup() {
    createCanvas(800,600);
    noLoop();
}

function draw() {
    //noprotect
    background(0);

    stroke(white);

    point(firstPoint[0],firstPoint[1]);
    
    updatePixels();
}