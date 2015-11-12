
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });
var quizItems = new Array();
var cityPoints = new Array();

cityPoints[0] = 0; // Paris
cityPoints[1] = 0; // Portland
cityPoints[2] = 0; // Cape Town
cityPoints[3] = 0; // New York
cityPoints[4] = 0; // Tokyo

quizItems[0] = new QuizItem(
	'How do you take your coffee?',
	'local and organic',
	'pourover',
	'anything from starbucks will do',
	'black',
	"I don't drink coffee",
	'');

quizItems[1] = new QuizItem(
	'What could you eat forever?',
	'meat & potatoes',
	'burritos / tacos',
	'anything with bread',
	'sushi',
	'pizza',
	'');

quizItems[2] = new QuizItem(
	"What's on top of your bucket list?",
	'backpacking in Europe',
	'chilling in Bali',
	'road trip across America',
	'summer in the Hamptons',
	'coachella',
	'');

quizItems[3] = new QuizItem(
	"What's your fitness level",
	'living my life',
	'yoga - namaste b*tches',
	'extreme sports, bro',
	'hiking is nature’s exercise',
	'burning calories while partying',
	'');

quizItems[4] = new QuizItem(
	"What's your poison?",
	'a nice glass of wine',
	'local craft beer',
	'whiskey anytime, anyway',
	'finest cocktail around',
	'shots!',
	'');

$(document).ready(function() {
  var currentQuestionIdx = 0;

  $('.start').click(function() {
  	currentQuestionIdx = 0;
  	$('.intro').hide();
  	$('.quiz').show();
  	$('.next').show();
  	$('.new').show();
  	showQuizItem(quizItems[currentQuestionIdx]);
  });

  $('.next').click(function() {  
  	currentQuestionIdx++; 	
  	$('.intro').hide();
  	$('.quiz').show();
  	$('.next').show();
  	$('.new').show();

  	var currentAnswer = $('input[name=answer]:checked', '#question-form').val();
  	if (currentAnswer == quizItems[currentQuestionIdx - 1].answer1) {
  		cityPoints[0]++;
  		console.log('Paris equals ' + cityPoints[0]);
  	}
  	else if (currentAnswer == quizItems[currentQuestionIdx - 1].answer2) {
		cityPoints[1]++;
  		console.log('Portland equals ' + cityPoints[1]);
  	}

  	else if (currentAnswer == quizItems[currentQuestionIdx - 1].answer3) {
		cityPoints[2]++;
  		console.log('Cape Town equals ' + cityPoints[2]);
  	}

  	else if (currentAnswer == quizItems[currentQuestionIdx - 1].answer4) {
		cityPoints[3]++;
  		console.log('New York equals ' + cityPoints[3]);
  	}

  	else if (currentAnswer == quizItems[currentQuestionIdx - 1].answer5) {
		cityPoints[4]++;
  		console.log('Tokyo equals ' + cityPoints[4]);
  	}

  	if (currentQuestionIdx < 5) {
  		showQuizItem(quizItems[currentQuestionIdx]);
  	} else {
  		alert('Quiz finished!');
  	}

  	if (cityPoints[0] >= 3) {
  		alert('You got Paris!');
  	}
  	else if {
  		(cityPoints[1] >= 3) {
  		alert('You got Portland!');
  	}
  	else if {
  		(cityPoints[2] >= 3) {
  		alert('You got Cape Town!');
  	}
  	else if {
  		(cityPoints[3] >= 3) {
  		alert('You got New York!');
  	}
  	else if {
  		(cityPoints[4] >= 3) {
  		alert('You got Tokyo!');
  	}

   $("input:radio").attr("checked", false); 
  });

    $('.new').click(function() {
   	$('.intro').show();
  	$('.quiz').hide();
  	$('.next').hide();
  	$('.new').hide();
   });

	function showQuizItem(quizItem) {
	  console.log(quizItem.question);
	  $('.question').text(quizItem.question);

	  $('.answer1 label').text(quizItem.answer1);
	  $('.input1').val(quizItem.answer1);

	  $('.answer2 label').text(quizItem.answer2);
	  $('.input2').val(quizItem.answer2);

	  $('.answer3 label').text(quizItem.answer3);
	  $('.input3').val(quizItem.answer3);

	  $('.answer4 label').text(quizItem.answer4);
	  $('.input4').val(quizItem.answer4);

	  $('.answer5 label').text(quizItem.answer5);
	  $('.input5').val(quizItem.answer5);
	}
});


// Quiz item constructor
function QuizItem(question, answer1, answer2, answer3, answer4, answer5, userAnswer) {
    this.question   = question;
    this.answer1    = answer1;
    this.answer2    = answer2;
    this.answer3    = answer3;
    this.answer4    = answer4;
    this.answer5    = answer5;
    this.userAnswer = userAnswer;
}


// log but don't show choice
// logic for choices to determine city
