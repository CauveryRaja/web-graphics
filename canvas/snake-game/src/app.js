import Snake from './snake/Snake';

const canvasElm = document.getElementById('canvas');
let canvasWidth, canvasHeight, cxt;
canvasWidth = canvasElm.offsetWidth;
canvasHeight = canvasElm.offsetHeight;
cxt = canvasElm.getContext('2d');

const snake = new Snake(canvasWidth/2, canvasHeight/2);

snake.draw(cxt);

setInterval(() => {
    snake.move(cxt);
}, 100);

document.body.addEventListener('keydown', function(event) {
    let direction = event.key.split('Arrow')[1];
    snake.changeDirection(direction.toLowerCase());
})