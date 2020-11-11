let width = window.innerWidth;
let height = window.innerHeight;

let stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
});

let layer = new Konva.Layer

for (let i = 0; i < 20; i++) {
    let radius = Math.random() * 100;
    let x = radius + (Math.random() * (width - (2 * radius)));
    let y = radius + (Math.random() * (height - (2 * radius)));
    let color = randomColor();
    let direction = Math.random() * 2.0 * Math.PI;

    let ring = new Konva.Ring({
        x: x,
        y: y,
        innerRadius: 40,
        outerRadius: 70,
        fill: color,
        strokeWidth: 4,
    });

    layer.add(ring);
    
}

function randomColor() {
    let chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)]
    }
    return color;
}

stage.add(layer);