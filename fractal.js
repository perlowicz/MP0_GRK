const firstPoint = [200,150];// x1, y1
const secondPoint = [100,400];// x2, y2
const thirdPoint = [300,400];// x3, y3


function setup() {
    createCanvas(800,600);// x , y
    noLoop();
}

function draw() {
    background(0);

    stroke('white');

    point(firstPoint[0],firstPoint[1]);
    point(secondPoint[0],secondPoint[1]);
    point(thirdPoint[0],thirdPoint[1]);
    
    var cx = firstPoint[0];
    var cy = firstPoint[1];

    for (i = 0; i < 30000; i++) {
        var randomNumber = floor(random(0,3));

        switch (randomNumber) {
            case 0:
                cx = (cx + firstPoint[0])/2;
                cy = (cy + firstPoint[1])/2;
                point(cx, cy);
                break;
            case 1:
                cx = (cx + secondPoint[0])/2;
                cy = (cy + secondPoint[1])/2;
                point(cx,cy);
                break;
            default:
                cx = (cx + thirdPoint[0])/2;
                cy = (cy + thirdPoint[1])/2;
                point(cx,cy);
        }
    }
}