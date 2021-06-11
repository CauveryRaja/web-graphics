class Snake {
    constructor(x, y) {
        this.head = {};
        this.tail = {x, y};
        this.direction = 'right';
    }

    draw(cxt) {
        cxt.fillRect(this.tail.x, this.tail.y, 200, 10);
        this.head = {
            x: this.tail.x + 200,
            y: this.tail.y
        }
    }

    drawSnake(cxt, x, y) {
        this.position = [{x,y}]; // head position
        cxt.fillRect(x, y, 10, 10);
        for(let i=1; i<=5; i++) {
            let pos = {
                x: this.position[i-1].x - 10, // right moving snake. so, pos - head
                y: y
            };
            this.position.push(pos);
            cxt.fillRect(pos.x, pos.y, 10, 10);
        }
    }

    move(cxt) {
        cxt.fillRect(this.head.x, this.head.y, 10, 10);
        cxt.clearRect(this.tail.x, this.tail.y, 10, 10);
        this.updateHeadTail();
    }

    updateHeadTail() {
        console.log('Updating head, tail ...', this);
        // this.head.x += 10; 
        this.head.x += 10; // For direction right

        // this.tail.x += 10;
        this.tail.x += 10; // For direction right
    }
}

export default Snake;