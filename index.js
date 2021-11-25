const readlineSync = require('readline-sync')
const chalk = require('chalk')

const user = {
  name: '',
  score: 0
}

console.log(chalk.bold.inverse.yellow('How well do you know me\n'))

user.name = readlineSync.question("\nEnter Your Name : ")

console.log("\nLets play", chalk.underline.blue.bold(user.name) + "\n")

const questions = [
  {
    question: "where do i live ?\n",
    answer: "patna"
  },

  {
    question: "my favorite singer ?\n",
    answer: "guru randhawa"
  },

  {
    question: "what is my github username?\n",
    answer: "rnhub"
  },

  {
    question: 'which operating system i am using right now ?\n',
    answer: 'arch linux'
  },
  
  {
    question: 'what is my birthday?\n',
    answer: '2 november'
  },
  
]

function calculateAnswer(question , answer){
  var userAnswer = readlineSync.question(question);
  console.log(chalk.bold.underline.yellow(userAnswer) + ' is correct answer\n');

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    user.score++;
    console.log("Score: " + chalk.bold.inverse.green(user.score));
  }
  else{
    console.log("Score: " + chalk.bold.inverse.red(user.score));
  
  }
  console.log("******************\n");
}

for(var i =0; i<questions.length;i++){
  var ques = questions[i].question;
  var ans = questions[i].answer;
  calculateAnswer(ques , ans);
}

console.log(user.name + ' your score is : ' + user.score)
