
const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

const questions = [ 
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

let answers = [];

const nextQuestion = function() {
  rl.question(questions.shift(), answer => { //shift removes the first question from the array
    answers.push(answer);
    if (0 === questions.length) { //If there are no questions left in the array questions...
      rl.close(); //it closes the program. When we use the close method it emits the close event
    } else {
      nextQuestion(); //Otherwise, it calls this function again (lines 34 and following) and therefore it console.logs the message
    }
  });
};

nextQuestion();

rl.on('close', () => {
  answers = {                     //object that contains the name of answers as keys and the index of the array answers as value
    name: answers[0],
    activity: answers[1],
    music: answers[2],
    meal: answers[3],
    food: answers[4],
    sport: answers[5],
    superpower: answers[6]
  };

  let paragraph = `
  ${answers.name} likes ${answers.activity} while listening to ${answers.music}. ${answers.name} loves to eat ${answers.food} for ${answers.meal}. ${answers.name}'s favourite sport is ${answers.sport} and is amazing at ${answers.superpower}
  `;

  console.log(paragraph);
});


//Helpful video for this method: https://www.youtube.com/watch?v=vU6OTnhj3wM
