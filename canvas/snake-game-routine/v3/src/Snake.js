class Snake {
	constructor(cxt, canvasWidth, canvasHeight) {
		this.positions = [];
		this.direction = 'right';
		this.cxt = cxt;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
	}

	construct(x, y) {
		for (let i = 0; i < 10; i++) {
			this.positions.push({
				x: x - (i * 10),
				y: y
			});
		}
	}

	render(startX, startY) {
		this.construct(startX, startY);
		this.positions.forEach(({ x, y }) => {
			this.cxt.fillRect(x, y, 10, 10);
		});
	}

	computeHeadPosition() {
		let head = this.loopPosition();
		switch (this.direction) {
			case 'up': head.y -= 10;
						break;
			case 'down': head.y += 10;
						break;
			case 'left': head.x -= 10;
						break;
			case 'right': head.x += 10;
						break;
		}
		return head;
	}

	move() {
		let head, tail;
		head = this.computeHeadPosition();
		this.positions.unshift(head);
		tail = this.positions.pop();

		this.cxt.fillRect(head.x, head.y, 10, 10);
		this.cxt.clearRect(tail.x, tail.y, 10, 10);
	}


	loopPosition() {
		let head = {
			x: this.positions[0].x,
			y: this.positions[0].y
		};
		if(head.x > this.canvasWidth) {
			head.x = -10;
		}
		else if(head.x < 0) {
			head.x = this.canvasWidth;
		}
		else if(head.y > this.canvasHeight) {
			head.y = -10;
		}
		else if(head.y < 0) {
			head.y = this.canvasHeight;
		}
		return head;
	}
}

export default Snake;