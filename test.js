function setup() {
    createCanvas(800,600); //x, y
    noLoop();
    frameRate(25);
}

function draw() {
    //noprotect
    

    for (var i = 0; i < height/2; i++){ //y
        for (var j = 0; j <= i; j++){ //x
            set(j, i, color(0));
        }
    }

    // for (var i = 0; i < height/2; i++) {
    //     for (var j = width/2; j > 0; j--){
    //         set(j, i, color(0));
    //     }
    // }

    // for (var i = 0; i < height/2; i++){ //y
    //     for (var j = 0; j < i; j++){ //x
    //         set(j, i, color(255));
    //     }
    // }

    updatePixels();
}