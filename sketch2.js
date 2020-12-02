const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};
const count = 5;


const sketch = () => {
  const createGrid = () => {
    const points = [];

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / (count - 1);
        const v = y / (count - 1);
        points.push([ u, v ]);
      }
    }
    return points;
  }

  const points = createGrid();


  return ({ context, width, height }) => {
    const radius = width / count;

    context.fillStyle = 'rgba(255,0,0,.5)';
    context.fillRect(0,0, width, height);

    points.forEach(([ u, v ]) => {
      const x = u * width;
      const y = v * height;
      console.log('x / count', Math.floor(x / count))
      context.beginPath();
      context.arc(x, y, radius, 0,Math.PI * 2);
      context.strokeStyle = Math.floor((x / radius)) % 2 === 0 ?  'rgba(0, 255, 255)' : 'rgba(255,255,0)';
      context.lineWidth = (width / count ) * 0.05;
      context.stroke();
    })
  };
};

canvasSketch(sketch, settings);
