
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });
var quizItems = new Array();

quizItems[0] = new QuizItem(
	'How do you take your coffee?',
	'local and organic',
	'pourover',
	'anything from starbucks will do',
	'black',
	"I don't drink coffee",
	'');

$(document).ready(function() {
  $('.start').click(function() {
  	$('.intro').hide();
  	$('.quiz').show();
  	$('.next').show();
  	showQuizItem(quizItems[0]);
  });

	function showQuizItem(quizItem) {
	  console.log(quizItem.question);
	  $('.question').text(quizItem.question);
	  $('.answer1 label').text(quizItem.answer1);
	  $('.answer2 label').text(quizItem.answer2);
	  $('.answer3 label').text(quizItem.answer3);
	  $('.answer4 label').text(quizItem.answer4);
	  $('.answer5 label').text(quizItem.answer5);
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

// user clicks submit to advance to next question
// log but don't show choice
// logic for choices to determine city
// user can start a new quiz which clears all logged answers
