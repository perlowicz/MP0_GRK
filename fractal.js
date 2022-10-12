var x1 = 200;
var x2 = 100;
var x3 = 300;

var y1 = 150;
var y2 = 400;
var y3 = 400;

function setup() {
    createCanvas(800,600);// x , y
    noLoop();
}

function draw() {
    background(0);

    stroke('white');

    point(x1,y1);
    point(x2,y2);
    point(x3,y3);
    
    var cx = x1;
    var cy = y1;

    for (i = 0; i < 30000; i++) {
        var randomNumber = floor(random(0,3));

        switch (randomNumber) {
            case 0:
                cx = (cx + x1)/2;
                cy = (cy + y1)/2;
                point(cx, cy);
                break;
            case 1:
                cx = (cx + x2)/2;
                cy = (cy + y2)/2;
                point(cx,cy);
                break;
            default:
                cx = (cx + x3)/2;
                cy = (cy + y3)/2;
                point(cx,cy);
        }
    }
}