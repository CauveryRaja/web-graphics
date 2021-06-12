class Snake {
    constructor(x, y) {
        this.position = [{x,y}];
        this.direction = 'right';
    }

    draw(cxt) {
        cxt.fillRect(this.position[0].x, this.position[0].y, 10, 10);
        for(let i=1; i<=9; i++) {
            let pos = {
                x: this.position[i-1].x - 10, // right moving snake. so, pos - head
                y: this.position[i-1].y
            };
            this.position.push(pos);
            cxt.fillRect(pos.x, pos.y, 10, 10);
        }
    }

    move(cxt) {
        this.computeHeadPosition();
        cxt.fillRect(this.position[0].x, this.position[0].y, 10, 10);
        let tail = this.position.pop();
        cxt.clearRect(tail.x, tail.y, 10, 10);
    }

    changeDirection(direction) {
        if(direction === 'right' && this.direction !== 'left')
            this.direction = 'right';
        else if(direction === 'left' && this.direction !== 'right')
            this.direction = 'left';
        else if(direction === 'up' && this.direction !== 'down')
            this.direction = 'up';
        else if(direction === 'down' && this.direction !== 'up')
            this.direction = 'down';
    }

    computeHeadPosition() {
        let newHead = Object.assign({}, this.position[0]);
        switch(this.direction) {
            case 'left': newHead.x -= 10;
                            break;
            case 'right': newHead.x += 10;
                            break;
            case 'up': newHead.y -= 10;
                            break;
            case 'down': newHead.y += 10;
                            break;
        }
        this.position.unshift(newHead);
    }
}

export default Snake;