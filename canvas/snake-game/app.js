let canvas, cxt, canvasWidth, canvasHeight, width, height, snakeObj;

init();
computeInitialPosition();
setInterval(drawSnake, 100);

document.body.addEventListener('keydown', function(event) {
    console.log(event.key);
    // Works for 'keydown', 'keypress' does not detect arrow keys
    switch(event.key) {
        case 'ArrowRight': snakeObj['direction'] = 'right';
                            break;
        case 'ArrowUp': snakeObj['direction'] = 'up';
                            break;
        case 'ArrowLeft': snakeObj['direction'] = 'left';
                            break;
        case 'ArrowDown': snakeObj['direction'] = 'down';
                            break;
    }
})

function computeInitialPosition() {
    snakeObj['tail'] = {
        x: canvasWidth/2 - 50,
        y: canvasHeight/2
    }
}

function swapWidthHeight() {
    let temp = width;
    width = height;
    height = temp;
}

function drawSnake() {
    cxt.fillStyle = 'red';
    switch(snakeObj['direction']) {
        case 'right': 
            snakeObj['tail']['x'] += 5;
            break;
        case 'up': 
            snakeObj['tail']['y'] -= 5;
            swapWidthHeight();
            break;
        case 'left': 
            snakeObj['tail']['x'] -= 5;
            break;
        case 'down': 
            snakeObj['tail']['y'] += 5;
            swapWidthHeight();
            break;
    }
    computeHeadPosition();
    cxt.fillRect(snakeObj['tail'].x, snakeObj['tail'].y, 
                    width, height);
}

function computeHeadPosition() {
    snakeObj['head'] = {
        x: canvasWidth/2 + width,
        y: canvasHeight/2
    }
    switch(snakeObj['direction']) {
        case 'right': 
            snakeObj['head']['y'] += width;
            break;
        case 'up': 
            snakeObj['head']['x'] -= width;
            break;
        case 'left': 
            snakeObj['head']['y'] -= width;
            break;
        case 'down': 
            snakeObj['head']['x'] += width;
            break;
    }
}

function init() {
    canvas = document.getElementById('canvas-elm');
    cxt = canvas.getContext('2d');
    canvasWidth = canvas.offsetWidth;
    canvasHeight = canvas.offsetHeight;
    width = 100;
    height = 10;
    snakeObj = {
        head: {
            x: 0,
            y: 0
        },
        tail: {
            x: 0,
            y: 0
        },
        direction: 'right'
    }
}