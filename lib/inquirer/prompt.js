const questions = [
    {
        type: 'input',
        message: 'Choose a three Letter Logo Name.',
        name: 'text',
        validate: function(input) {
            // Check if the input consists of exactly three letters
            if (/^[a-zA-Z]{3}$/.test(input)) {
                return true; // Input is valid
            } else {
                return 'Please enter exactly three letters.';
            }
        },
    },
    {
        type: 'input',
        message: 'Choose a color keyword or hex # for your text.',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Which shape do you want your logo to be?',
        name: 'shape',
        choices: [
            'square',
            'circle',
            'triangle'
          ]
    },
    {
        type: 'input',
        message: 'Choose a color keyword or hex # for your shape.',
        name: 'color',
    },
];

module.exports = questions;