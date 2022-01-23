import Snake from './Snake';

const canvas = document.getElementsByTagName('canvas')[0];
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const cxt = canvas.getContext("2d");

let snake = new Snake(cxt);
snake.render(canvasWidth/2, canvasHeight/2);

setInterval(() => snake.move(), 100);