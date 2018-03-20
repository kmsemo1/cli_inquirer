/**
 * Input prompt example
 */

'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "Who are you?"
  }, 
  {
      type: 'list',
      name: 'theme',
      message: 'What do you want to do?',
      choices: [
        'Order a pizza',
        'Make a reservation',
        new inquirer.Separator(),
        'Ask for opening hours',
        {
          name: 'Contact support',
          disabled: 'Unavailable at this time'
        },
        'Talk to the receptionist'
      ]
    },
];

inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });