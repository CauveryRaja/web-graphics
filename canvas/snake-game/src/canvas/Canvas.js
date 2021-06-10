class Canvas {
    constructor(elm) {
        this.htmlElm = elm;
        this.cxt = elm.getContext('2d');
    }

    paint(callback) {
        this.cxt.fillColor = 'red';
        callback(this.cxt);
    }

    animate(callback) {
        setInterval(() => callback(this.cxt), 100);
    }
}

export default Canvas;