class Snake {
    constructor(cxt) {
        this.positions = [];
        this.direction = 'right';
        this.cxt = cxt;
    }

    construct(x, y) {
        for(let i=0; i<10; i++) {
            this.positions.push({
                x: x-(i*10),
                y: y
            });
        }
    }

    render(startX, startY) {
        this.construct(startX, startY);
        console.log(this.positions);
        this.positions.forEach(({x, y}) => {
            this.cxt.fillRect(x, y, 10, 10);
        });
    }
}

export default Snake;