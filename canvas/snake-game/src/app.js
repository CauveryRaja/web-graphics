import Snake from './snake/Snake';
import Food from './food/Food';

const canvasElm = document.getElementById('canvas');
const scoreElm = document.getElementById('score');
let canvasWidth, canvasHeight, cxt, score;
canvasWidth = canvasElm.offsetWidth;
canvasHeight = canvasElm.offsetHeight;
cxt = canvasElm.getContext('2d');
score = 0;
scoreElm.textContent = 0;

const snake = new Snake(canvasWidth/2, canvasHeight/2);
const food = new Food();

// cxt.fillColor = 'red';
snake.draw(cxt);
food.draw(cxt);

setInterval(() => {
    snake.move(cxt);
    if(food.isEaten(...snake.position)) {
        food.draw(cxt);
        score++;
        scoreElm.textContent = score;
    }
}, 100);

document.body.addEventListener('keydown', function(event) {
    let direction = event.key.split('Arrow')[1];
    snake.changeDirection(direction.toLowerCase());
});