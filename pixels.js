function setup() {
    createCanvas(800,600);
    noLoop();
    frameRate(25);
}

function draw() {
    //noprotect
    background(100);
    for(y=0; y<height; y++)
        for(x=0; x<width; x++) {
            set(x, y, color(255,0,255));
        }
    updatePixels();
}