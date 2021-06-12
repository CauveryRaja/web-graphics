class Snake {
    constructor(x, y) {
        // this.head = {};
        // this.tail = {x, y};

        this.position = [{x,y}];
        this.direction = 'right';
    }

    // draw(cxt) {
    //     cxt.fillRect(this.tail.x, this.tail.y, 200, 10);
    //     this.head = {
    //         x: this.tail.x + 200,
    //         y: this.tail.y
    //     }
    // }

    draw(cxt) {
        // this.position = [{x,y}]; // head position
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
        // Compute new head position
        this.computeHeadPosition();
        cxt.fillRect(this.position[0].x, this.position[0].y, 10, 10);
        let tail = this.position.pop();
        cxt.clearRect(tail.x, tail.y, 10, 10);
        console.log(JSON.stringify(this.position));
    }

    changeDirection(direction) {
        if(direction === 'right' && this.direction !== 'left')
            this.direction = 'right';
        else if(direction === 'left' && this.direction !== 'right')
            this.direction = 'left';
        else if(direction === 'top' && this.direction !== 'bottom')
            this.direction = 'top';
        else if(direction === 'bottom' && this.direction !== 'top')
            this.direction = 'bottom';
    }

    computeHeadPosition() {
        let newHead = Object.assign({}, this.position[0]);
        switch(this.direction) {
            case 'left': newHead.x -= 10;
                            break;
            case 'right': newHead.x += 10;
                            break;
            case 'top': newHead.y -= 10;
                            break;
            case 'bottom': newHead.y += 10;
                            break;
        }
        this.position.unshift(newHead);
    }
}

export default Snake;