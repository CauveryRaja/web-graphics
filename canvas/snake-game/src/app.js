import Canvas from './canvas/Canvas';
import Snake from './snake/Snake';

const canvasElm = document.getElementById('canvas');
let canvasWidth, canvasHeight;
canvasWidth = canvasElm.offsetWidth;
canvasHeight = canvasElm.offsetHeight;

const canvas = new Canvas(canvasElm);
const snake = new Snake(canvasWidth/2, canvasHeight/2);

canvas.paint(snake.draw.bind(snake));
canvas.animate(snake.move.bind(snake));

document.body.addEventListener('keydown', function(event) {
    let direction = event.key.split('Arrow')[1];
    snake.changeDirection(direction.toLowerCase());
})