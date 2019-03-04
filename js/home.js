
var iter = 0;
var flip = 1;
var x;
var y1, y2;
var ySep;
var drawColor = 0;
var choice = 0;
var width;

function setup() {
    //initalize grain canvas
    hcanvas = createCanvas(windowWidth, windowHeight);
    hcanvas.class("homeCanvas");
    hcanvas.parent("canvasContainer");
    frameRate(60);

    choice = Math.floor(Math.random() * 2);

    console.log(windowWidth)

    ySep = windowHeight/5;
    xSep = windowWidth/4;

    xhalf = windowWidth/2;
    yhalf = windowHeight/2;


    if (windowWidth <= 600 && windowWidth >= 240) {
        width = 50 + 5 * Math.floor(Math.random() * 20);
    } else {
        width = 100 + 5 * Math.floor(Math.random() * 20);
    }
    
    x1 = 0;
    x2 = 0;
    y1 = 0;
    y2 = 0;
}

function draw() {
    switch (choice) {
        case 1:
            noStroke();
            doodleTwo();
            break;
        case 2:
            noFill();
        default:
            noFill();
            doodleOne();
    }
}

function doodleOne() {





    if(drawColor < 255) {
        for (var i = 1; i < 6; i++) {
            ellipse(xhalf + iter*15, y1 + ySep*i, width, width);
            ellipse(xhalf - iter*15, y2 + ySep*i, width, width);
        }
    }
    stroke(drawColor);
    iter = iter + 0.1;
    drawColor = iter*5
    y1 = y1 + 7 * Math.cos(iter);
    y2 = y2 - 7 * Math.cos(iter);
}

function doodleTwo() {
    if (drawColor > 0) {
        fill(255-iter*10)
        var adjust;
        var wiggle;

        if (windowWidth > 600) {
            adjust = 20;
            wiggle = 20;
        } else if (windowWidth <= 600 && windowWidth >= 240) {
            adjust = 7;
            wiggle = 40;
        }

        for (var i = 0; i < 21; i++) {
            ellipse(i*windowWidth/adjust + wiggle*Math.cos(iter), ySep+(iter*iter), width, width)
        }
    }
    drawColor = 255-iter*8;
    iter = iter + 0.1;
}
