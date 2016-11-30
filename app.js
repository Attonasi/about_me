'use strict';

alert('Welcome to about_me guessing game, please reply each question with Y\/N or YES\/NO')

var CorrectResponse = 0;

var ans1 = prompt('Does Ophelia have any pets? ').toUpperCase();

if (ans1 == 'Y' || ans1 == 'YES') {
  alert('No, Ophelia does not have any pet!');

} else if (ans1 == 'N' || ans1 == 'NO') {
  alert('Yes, Ophelia does not have any pet.');
  CorrectResponse = CorrectResponse + 1;
} else {
  alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
}

console.log('First question: Does Ophelia have any pets? '+'User response: '+ans1);

var ans2 = prompt('Is Ophelia a student? ').toUpperCase();

if (ans2 == 'Y' || ans2 == 'YES') {
  alert('Yes, Ophelia enrolls in Dec16 Code Fellows 201!');
  CorrectResponse = CorrectResponse + 1;
} else if (ans2 == 'N' || ans2 == 'NO') {
  alert('Sorry, you\'re wrong, Ophelia enrolls in Dec16 Code Fellows 201.');
} else {
  alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
}

console.log('Second question: Is Ophelia a student? '+'User response: '+ans2);

var ans3 = prompt('Is Ophelia an outdoor person? ').toUpperCase();

if (ans3 == 'Y' || ans3 == 'YES') {
  alert('Yes, Ophelia loves the outdoor!');
  CorrectResponse = CorrectResponse + 1;
} else if (ans3 == 'N' || ans3 == 'NO') {
  alert('Sorry, you\'re wrong, Ophelia is an outdoor person.');
} else {
  alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
}

console.log('Third quesion: Is Ophelia an outdoor person? '+'User response: '+ans3);

var ans4 = prompt('Has Ophelia been out of the country? ').toUpperCase();

if (ans4 == 'Y' || ans4 == 'YES') {
  alert('Yes, Ophelia loves to travel!');
  CorrectResponse = CorrectResponse + 1;
} else if (ans4 == 'N' || ans4 == 'NO') {
  alert('Sorry, you\'re wrong, Ophelia loves to travel.');
} else {
  alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
}

console.log('Fourth quesion: Has Ophelia been out of the country? '+'User response: '+ans4)

var ans5 = prompt('Does Ophelia speak only one language? ').toUpperCase();

if (ans5 == 'Y' || ans5 == 'YES') {
  alert('No, Ophelia is multilingual!');
} else if (ans5 == 'N' || ans5 == 'NO') {
  alert('Yes, you\'re right, Ophelia is multilingual.');
  CorrectResponse = CorrectResponse + 1;
} else {
  alert('Sorry, the answer must be either Y\/N or YES\/NO. We\'ll move on to another question.');
}

console.log('Fifth quesion: Does Ophelia speak only one language? '+'User response: '+ans5);
console.log(CorrectResponse);
if (CorrectResponse >= 3) {
  CorrectResponse = 'How do you know me so well? You answered  '+CorrectResponse+' about_me questions correctly.';
} else {
  CorrectResponse = 'Have we met? You only answered '+CorrectResponse+' about_me questions correctly.';
}

document.getElementById('response').innerHTML = CorrectResponse;
