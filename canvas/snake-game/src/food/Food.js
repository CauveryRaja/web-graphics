class Food {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        };
    }

    draw(cxt) {
        cxt.fillColor = 'red';
        cxt.clearRect(this.position.x, this.position.y, 10, 10);
        this.position = {
            x: Math.ceil(Math.random() * 800),
            y: Math.ceil(Math.random() * 600)
        };
        cxt.fillRect(this.position.x, this.position.y, 10, 10);
    }

    isEaten({x, y}) {
        console.log('x,y', x, y);
        console.log('condition 1', x, this.position.x, y+10, this.position.y);
        console.log('condition 2', y, this.position.y, x+10, this.position.x);
        if(x === this.position.x && (y+10 > this.position.y && y+10 < this.position.y+10))
            return true;
        else if(y === this.position.y && (x+10 > this.position.x && x+10 < this.position.x+10))
            return true;
        else
            return false;
    }
}

export default Food;