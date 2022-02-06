import Snake from './Snake';

const canvas = document.getElementsByTagName('canvas')[0];
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const cxt = canvas.getContext("2d");

let snake = new Snake(cxt, canvasWidth, canvasHeight);
snake.render(canvasWidth/2, canvasHeight/2);

// const animate = () => {
// 	snake.move();
// 	requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

setInterval(() => snake.move(), 90);

document.addEventListener('keydown', ({ key }) => {
	const direction = key.split('Arrow')[1].toLowerCase();
	if(((direction === 'up' || direction === 'down')
	&& (snake.direction === 'left' || snake.direction === 'right')) ||
	(direction === 'left' || direction === 'right')
	&& (snake.direction === 'up' || snake.direction === 'down')) {
		snake.direction = direction;
	}
});