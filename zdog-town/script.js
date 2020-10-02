// Made with Zdog
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let isSpinning = true;

let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    onDragStart: function() {
      isSpinning = false;
    },
});
let pos_x = 0;
let pos_y = 0;
let vertices = [];
//begin calculation
let teller = 1;
//number of iterations
const stop = 1200;
let j = 0;
const z_step = 0.2;
for (var i = teller; i <= stop; i++, j++) {

    step = Math.random();
    var k = i;
    k = k * Math.random();
    vertices.push({
        x: pos_x,
        y: pos_y,
        z: j += z_step
    });
    pos_y -= step * k * Math.random();
    vertices.push({
        x: pos_x,
        y: pos_y,
        z: j += z_step
    });

    pos_x += step * k * Math.random();
    vertices.push({
        x: pos_x,
        y: pos_y,
        z: j += z_step
    });
    pos_y += step * (k + Math.random()) * Math.random();

    vertices.push({
        x: pos_x,
        y: pos_y,
        z: j += z_step
    });
    pos_x -= step * (k + Math.random()) * Math.random();

    vertices.push({
        x: pos_x,
        y: pos_y,
        z: j += z_step
    });
}
// 3D shape
new Zdog.Shape({
    addTo: illo,
    path: vertices,
    closed: false,
    stroke: 4,
    color: '#636',
});

function animate() {
    illo.rotate.y += isSpinning ? 0.002 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();