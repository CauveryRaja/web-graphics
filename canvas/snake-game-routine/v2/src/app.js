import Snake from './snake';

const canvas = document.getElementsByTagName('canvas')[0];
const cxt = canvas.getContext('2d');

if(!cxt) {
    throw 'Canvas context not available';
}

const snake = new Snake(cxt);
snake.draw(canvas.width/2, canvas.height/2);

setInterval(() => snake.move(), 100);
