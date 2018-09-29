window.onload = function () {
    draw();
}

function draw() {
    console.log("function draw");
    var elem;
    elem = document.getElementById('myCanvas');

    elem.width = window.innerWidth;
    elem.height = window.innerHeight


    if (elem && elem.getContext) {
        console.log("document.getElementById('myCanvas')");
        var context;
        context = elem.getContext('2d');
        if (context) {
            console.log("getContext('2d')");
            var begin_x = document.getElementById('myCanvas').width;
            var begin_y = document.getElementById('myCanvas').height;
            console.log("canvas  width: " + begin_x);
            console.log("canvas height: " + begin_y);
            var pos_x, pos_y;
            //center of canvas
            pos_x = begin_x / 2;
            pos_y = begin_y / 2;
            console.log("x positioned at " + pos_x);
            console.log("y positioned at " + pos_y);

            //step of movements
            //how big is the initial shape

            //begin calculation
            var teller = 1;
            //number of iterations
            var stop = 1820;

            for (var i = teller; i <= stop; i++) {
                step = Math.random();
                var k = i;
                context.beginPath();
                k = k * Math.random();
                context.moveTo(pos_x, pos_y); //draw A    
                pos_y -= step * k * Math.random();
                context.lineTo(pos_x, pos_y); //move B
                context.moveTo(pos_x, pos_y); //draw C
                pos_x += step * k * Math.random();
                context.lineTo(pos_x, pos_y); //draw D
                context.moveTo(pos_x, pos_y); //move E
                pos_y += step * (k + Math.random()) * Math.random();
                context.lineTo(pos_x, pos_y); //draw F
                context.moveTo(pos_x, pos_y); //move G      
                pos_x -= step * (k + Math.random()) * Math.random();
                context.lineTo(pos_x, pos_y); //draw H
                context.moveTo(pos_x, pos_y); // last
                context.stroke();

            }

        }
    }
}