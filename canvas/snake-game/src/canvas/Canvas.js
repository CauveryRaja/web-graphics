class Canvas {
    constructor(elm) {
        this.htmlElm = elm;
        this.cxt = elm.getContext('2d');
    }

    paint(callback) {
        callback(this.cxt);
    }

    animate(callback) {
        setInterval(callback.bind(this.cxt), 5);
    }
}

export default Canvas;