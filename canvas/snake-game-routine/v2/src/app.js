import Snake from './snake';

const canvas = document.getElementsByTagName('canvas')[0];
const cxt = canvas.getContext('2d');

if(!cxt) {
    throw 'Canvas context not available';
}

const snake = new Snake(cxt);
snake.draw(canvas.width/2, canvas.height/2);

setInterval(() => snake.move(), 100);

document.addEventListener('keydown', (event) => {
    const direction = event.key.split('Arrow')[1].toLowerCase();
    if((snake.direction === 'left' || snake.direction === 'right' ) && 
    (direction === 'up' || direction === 'down')) {
        snake.changeDirection(direction);
    }
    else if((snake.direction === 'up' || snake.direction === 'down' ) && 
    (direction === 'left' || direction === 'right')) {
        snake.changeDirection(direction)
    }
})