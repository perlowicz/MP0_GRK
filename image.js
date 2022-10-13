function setup() {
    createCanvas(800,600);
    noLoop();
}

function draw() {
    //noprotect
    // background(0);
    for(y=0; y<height; y++) //creating background
        for(x=0; x<width; x++)
            set(x, y,
                color(0,200,255)
            );
        
    for(y=height*2/3; y<height; y++) //creating grass
        for(x=0; x<width; x++)
            set(x, y, color(0,100,0));

    for (x=0; x<1000; x++) { //creating flowers
        var randomX = floor(random(0,width));
        var randomY = floor(random(height*2/3,height));
        var randomColor = floor(random(0,255));
        set(randomX, randomY, randomColor);
    }

    for(y=height/3; y<height*2/3; y++) //creating house
        for(x=width/4; x<width*3/4; x++)
            set(x, y, color(150,75,0));

    // for (y=height/12, px=1; y<height/3; y++, px+=2) //creating roof
    //     for (x=(width/2)+px; x>(width/2)-px; x--)
    //         set(x, y, color(255,0,0));

    for (y=height/3, px=250; y>height/12; y--, px-=2)
        for (x=(width/2)+px; x>(width/2)-px; x--)
            set(x, y, color(255,0,0));

    updatePixels();
}