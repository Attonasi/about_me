'use strict';
var gotIt = false;
var CorrectResponse = 0;
var username = prompt('Hi there, My name is Ophelia, what\'s your first name?');
alert('Welcome to about_me guessing game, '+username+', please reply each question with Y\/N or YES\/NO');

var ans1 = prompt('Do I have any pets? ').toUpperCase();

function question1() {
  if (ans1 == 'Y' || ans1 == 'YES') {
    alert('No, I do not have any pet!');

  } else if (ans1 == 'N' || ans1 == 'NO') {
    alert('Yes, I do not have any pet.');
    CorrectResponse = CorrectResponse + 1;
  } else {
    alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
  }
}

question1();

// console.log('First question: Do I have any pets? '+'User response: '+ans1);

function question2() {
  var ans2 = prompt('Am I a student? ').toUpperCase();

  if (ans2 == 'Y' || ans2 == 'YES') {
    alert('Yes, I enroll in Dec16 Code Fellows 201!');
    CorrectResponse = CorrectResponse + 1;
  } else if (ans2 == 'N' || ans2 == 'NO') {
    alert('Sorry, you\'re wrong, I enroll in Dec16 Code Fellows 201.');
  } else {
    alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
  }
}
question2();

// console.log('Second question: Am I a student? '+'User response: '+ans2);

function question3() {
  var ans3 = prompt('Am I an outdoor person? ').toUpperCase();

  if (ans3 == 'Y' || ans3 == 'YES') {
    alert('Yes, I love the outdoor!');
    CorrectResponse = CorrectResponse + 1;
  } else if (ans3 == 'N' || ans3 == 'NO') {
    alert('Sorry, you\'re wrong, I am an outdoor person.');
  } else {
    alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
  }
}
question3();

// console.log('Third quesion: Am I an outdoor person? '+'User response: '+ans3);

function question4() {
  var ans4 = prompt('Have I been out of the country? ').toUpperCase();

  if (ans4 == 'Y' || ans4 == 'YES') {
    alert('Yes, I love to travel!');
    CorrectResponse = CorrectResponse + 1;
  } else if (ans4 == 'N' || ans4 == 'NO') {
    alert('Sorry, you\'re wrong, I love to travel.');
  } else {
    alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
  }
}
question4();

// console.log('Fourth quesion: Have I been out of the country? '+'User response: '+ans4)

function question5() {
  var ans5 = prompt('Do I speak only one language? ').toUpperCase();

  if (ans5 == 'Y' || ans5 == 'YES') {
    alert('No, I am multilingual!');
  } else if (ans5 == 'N' || ans5 == 'NO') {
    alert('Yes, you\'re right, I am multilingual.');
    CorrectResponse = CorrectResponse + 1;
  } else {
    alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
  }
}
question5();


// console.log('Fifth quesion: Do I speak only one language? '+'User response: '+ans5);

function question6() {
  var guessNum = Math.floor((Math.random() * 30)+1);

  // var gotIt = false;

  var guessCount = 1;
  var ans6 = parseInt(prompt('Let\'s play a game, I am thinking of a number between 1 and 30. You have four chances to guess this magic number correctly.'));

  while (guessCount < 4 ) {
    guessCount+=1;
    if (ans6 > guessNum) {
      ans6 = parseInt(prompt('too high, guess again.'));
    } else if (ans6 < guessNum) {
      ans6 = parseInt(prompt('too low, guess again.'));
    } else {
      alert('Awesome, you got it.');
      gotIt = true;
      break;
    }
  } //close while

  if (guessCount <= 4 && gotIt == true) {
    CorrectResponse = CorrectResponse + 1;
  } else {
    alert('correct answer = '+guessNum);
    alert('You took more 4 tries, We\'ll move on to another question.');
  }

  console.log('User '+username+' took '+guessCount+' on question 6.');
  console.log('User '+username+' total correct response '+CorrectResponse);
}
question6();

function question7() {

  var guessCount = 0;

  var statesILived = ['AL','CA','GA','NJ','NY','NC'];

  var ans7 = prompt('Let\'s come back to about-me again, I have lived in several states besides Washington. You have six chances to guess one of them. Please give response in US state abbrevations.').toUpperCase();

  while (guessCount < 5) {
    guessCount+=1;
    for (var i = 0; i < statesILived.length; i++) {
      var check = statesILived.indexOf(ans7) > -1;
      if (check) {
        alert('Awesome, you got it');
        gotIt = true;
        //guessCount++;
        break; //break out for
      } else {
        if (guessCount > 5) {
          alert('no more guesses!');
          break;}
        ans7 = prompt('wrong state, guess again.').toUpperCase();
      } //close else
    } //close for
    if (gotIt) {break;} //break out while
  } //close while

  alert('I have lived in following states: '+statesILived);
  if (guessCount <= 6) {
    CorrectResponse = CorrectResponse + 1;
  }
  // console.log('User '+username+' took '+guessCount+' tries on question 7.');
}
question7();

console.log(CorrectResponse);
if (CorrectResponse >= 3) {
  CorrectResponse = 'You are very astute. You answered  '+CorrectResponse+' about_me questions correctly.';
} else {
  CorrectResponse = 'oops! You only answered '+CorrectResponse+' about_me questions correctly.';
}

document.getElementById('response').innerHTML = CorrectResponse;
