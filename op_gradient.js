function setup() {
    createCanvas(800,600);
    noLoop();
}

function draw() {
    //noprotect
    background(0);
    for(y=0; y<height; y++)
        for(x=0; x<width; x++) {

            var temp = (x+y) / (width+height);
            var secondTemp = x-width/2;
            var thirdTemp = y-height/2;
            var final = sqrt(pow(secondTemp,2)+pow(thirdTemp,2));

            set(x, y,
                color(
                    255-final,
                    final,
                    temp*256
                )
            );
        }
    updatePixels();
}