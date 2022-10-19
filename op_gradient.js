function setup() {
    createCanvas(800,600);
    noLoop();
}

function draw() {
    //noprotect
    background(0);
    for(y=0; y<height; y++)
        for(x=0; x<width; x++) {

            var secondTemp = x-width/2;
            var thirdTemp = y-height/2;
            var greenColor = sqrt(pow(secondTemp,2)+pow(thirdTemp,2));
            var redColor = 255 - greenColor;
            var blueColor = ((x+y) / (width+height)) * 256;

            set(x, y,
                color(
                    redColor,
                    greenColor,
                    blueColor
                )
            );
        }
    updatePixels();
}