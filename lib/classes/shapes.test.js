const { Shape, Circle, Triangle, Square } = require('../classes/shapes.js')

describe('Shapes', () => {

    it('Should return the correct svg element depending on the set text textColor, shape, color', () => {
        const shape = new Shape('SVG', 'white', 'triangle', 'black');
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            ['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">',
             '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>',
             '<text x="150" y="140" font-size="50" text-anchor="middle" fill="white">SVG</text>',
             '</svg>'].join('')
        );
    })

    it('Should return the correct svg triangle depending on the set text textColor, shape, color', () => {
        const shape = new Triangle('SVG', 'red', 'yellow');
        shape.setColor('green');
        expect(shape.render()).toEqual(
            ['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">',
             '<polygon points="150, 18 244, 182 56, 182" fill="green"/>',
             '<text x="150" y="140" font-size="50" text-anchor="middle" fill="red">SVG</text>',
             '</svg>'].join('')
        );
    })

    it('Should return the correct svg circle depending on the set text textColor, shape, color', () => {
        const shape = new Circle('SVG', 'white', 'black');
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            ['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">',
             '<circle cx="150" cy="100" r="80" fill="blue"/>',
             '<text x="150" y="120" font-size="50" text-anchor="middle" fill="white">SVG</text>',
             '</svg>'].join('')
        );
    })

    it('Should return the correct svg square depending on the set text textColor, shape, color', () => {
        const shape = new Square('SVG', 'black', 'black');
        shape.setColor('yellow');
        expect(shape.render()).toEqual(
            ['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">',
             '<rect x="50" y="0" width="200" height="200" fill="yellow"/>',
             '<text x="150" y="100" font-size="50" text-anchor="middle" fill="black">SVG</text>',
             '</svg>'].join('')
        );
    })
})