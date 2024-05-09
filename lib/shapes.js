class Shape {
    constructor(text, textColor, shape, color) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        let shapeSvg
        switch(this.shape) {
            case 'circle':
                shapeSvg = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
                break;
            case 'triangle':
                shapeSvg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
                break;
            case 'square':
                shapeSvg = `<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>`;
                break;
            default:
                shapeSvg = '';
        }
        let textSvg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

        return ['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">',
                shapeSvg,
                textSvg,
                '</svg>'].join('');
    }
}
class Circle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)
        this.shape = 'circle'
    }
}
class Triangle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)
        this.shape = 'triangle'
    }
}
class Square extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)
        this.shape = 'square'
    }
}

module.exports = { Shape, Circle, Triangle, Square };