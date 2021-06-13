class Food {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        };
    }

    draw(cxt) {
        cxt.fillStyle= 'red';
        cxt.clearRect(this.position.x, this.position.y, 10, 10);
        this.position = {
            x: Math.ceil(Math.random() * 790),
            y: Math.ceil(Math.random() * 590)
        };
        cxt.fillRect(this.position.x, this.position.y, 10, 10);
        cxt.fillStyle = 'black';
    }

    isEaten({x, y}) {
        if((x+10 > this.position.x && x+10 < this.position.x+10) && (y+10 > this.position.y && y+10 < this.position.y+10))
            return true;
        else
            return false;
    }
}

export default Food;