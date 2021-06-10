class Snake {
    constructor(x, y) {
        super();
        this.head = {};
        this.tail = {x, y};
        this.direction = 'right';
    }

    draw(cxt) {
        cxt.fillRect(this.tail.x, this.tail.y, 300, 10);
    }

    move(cxt) {
        cxt.fillRect(this.head.x, this.head.y, 10, 10);
        cxt.clearRect(this.tail.x, this.tail.y, 10, 10);
        updateHeadTail();
    }

    updateHeadTail() {
        // this.head.x += 10; 
        this.head.y += 10; // For direction right

        // this.tail.x += 10;
        this.tail.y += 10; // For direction right
    }
}