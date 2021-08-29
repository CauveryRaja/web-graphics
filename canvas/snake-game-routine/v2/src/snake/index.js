class Snake {
    constructor(cxt) {
        this.direction = 'right';
        this.position = [];
        this.cxt = cxt;
    }

    draw(x, y) {
        this.position.push({ x, y});
        this.cxt.fillRect(x, y, 10, 10);
        for(let i=1; i<10; i++) {
            this.position.push({
                x: x-(i*10),
                y: y
            });
            this.cxt.fillRect(this.position[i].x, this.position[i].y, 10, 10);
        }
        this.cxt.fillStyle = 'black';
    }

    move() {
        // Draw new head
        let newHead = {
            x: this.position[0].x+10,
            y: this.position[0].y
        };
        this.cxt.fillRect(newHead.x, newHead.y, 10, 10);
        this.position.unshift(newHead);

        // Clear tail
        let tail = this.position.pop();
        this.cxt.clearRect(tail.x, tail.y, 10, 10);
    }
}

export default Snake;