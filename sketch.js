const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

let squareColor = randomColor();
let circleColor = randomColor();
let circleOutlineColor = randomColor();

function randomColor() {
  let rgbRed = Math.floor(Math.random() * 255);
  let rgbGreen = Math.floor(Math.random() * 255);
  let rgbBlue = Math.floor(Math.random() * 255);

  return `${rgbRed}, ${rgbGreen}, ${rgbBlue}`;
}
//
// function handleInterval() {
//   circleColor = randomColor();
//   squareColor = randomColor();
//   circleOutlineColor = randomColor();
//
//   canvasSketch(sketch, settings);
// }
//
// setInterval(handleInterval, 500)


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = `rgb(${squareColor})`;
    context.fillRect(0, 0, width, height); // (x, y, width, height)

    context.beginPath();
    context.arc(width  / 2, height / 2, 200, 0, Math.PI * 2, false);
    context.fillStyle = `rgb(${circleColor})`;
    context.fill();
    context.lineWidth = 40;
    context.strokeStyle = `rgb(${circleOutlineColor})`;
    context.stroke();
  };
};

canvasSketch(sketch, settings);
