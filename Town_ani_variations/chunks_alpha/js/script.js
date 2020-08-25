
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var setCanvasSize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();

// variable to hold how many frames have elapsed in the animation
var t = 1;

// define the path to plot
var vertices = [];


var begin_x = document.getElementById('canvas').width;
var begin_y = document.getElementById('canvas').height;
console.log("canvas  width: " + begin_x);
console.log("canvas height: " + begin_y);
var pos_x, pos_y;
//center of canvas
pos_x = begin_x / 2;
pos_y = begin_y / 2;

//begin calculation
var teller = 1;
//number of iterations
var stop = 1080

for (var i = teller; i <= stop; i++) {
    
    step = Math.random();
    var k = i;
    //ctx.lineWidth = Math.floor((Math.random() * 10) + 1);
    k = k * Math.random();
    
    vertices.push({
        x: pos_x,
        y: pos_y
    });
    //ctx.lineWidth = Math.floor((Math.random() * 10) + 1);
    
    pos_y -= step * k * Math.random();
    vertices.push({
        x: pos_x,
        y: pos_y
    });
    //ctx.lineWidth = Math.floor((Math.random() * 10) + 1);
    pos_x += step * k * Math.random();
    vertices.push({
        x: pos_x,
        y: pos_y
    });
    //ctx.lineWidth = Math.floor((Math.random() * 10) + 1);
    pos_y += step * (k + Math.random()) * Math.random();

    vertices.push({
        x: pos_x,
        y: pos_y
    });
    //ctx.lineWidth = Math.floor((Math.random() * 10) + 1);  
    pos_x -= step * (k + Math.random()) * Math.random();

    vertices.push({
        x: pos_x,
        y: pos_y
    });

}


// set some style
//ctx.lineWidth = 1;
//
// calculate incremental points along the path
var points = calcWaypoints(vertices);
// extend the line from start to finish with animation
animate(points);

// calc waypoints traveling along vertices

function calcWaypoints(vertices) {
    var waypoints = [];
    var speed = 2;
    
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < speed; j++) {
            var x = pt0.x + dx * j / speed;
            var y = pt0.y + dy * j / speed;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}

var myVar = setInterval(updateForm, 1);
var col;
function updateForm() {
    document.getElementById("calc").value = Math.floor((Math.random() * 30) + 1);
    document.getElementById("col").value = 'rgba(2,4,5,'+Math.random()+')';
}

function animate() {
    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    }
    // draw a line segment from the last waypoint
    // to the current waypoint
    var calc=document.getElementById("calc").value;
    var col=document.getElementById("col").value;
    //lert(calc);
    ctx.beginPath();
    ctx.lineWidth = calc;
    ctx.strokeStyle = col;
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    t++;
}