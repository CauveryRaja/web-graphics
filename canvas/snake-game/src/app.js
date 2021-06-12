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
    // Works for 'keydown', 'keypress' does not detect arrow keys
    // switch(event.key) {
    //     case 'ArrowRight': snakeObj['direction'] = 'right';
    //                         break;
    //     case 'ArrowUp': snakeObj['direction'] = 'up';
    //                         break;
    //     case 'ArrowLeft': snakeObj['direction'] = 'left';
    //                         break;
    //     case 'ArrowDown': snakeObj['direction'] = 'down';
    //                         break;
    // }
    let direction = event.key.split('Arrow')[1];
    snake.changeDirection(direction.toLowerCase());
})