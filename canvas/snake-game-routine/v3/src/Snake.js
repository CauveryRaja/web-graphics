class Snake {
	constructor(cxt) {
		this.positions = [];
		this.direction = 'right';
		this.cxt = cxt;
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
		let head = {
			x: this.positions[0].x,
			y: this.positions[0].y
		};
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
}

export default Snake;