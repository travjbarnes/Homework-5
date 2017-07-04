//User Presses Start to begin game
$('#start').on('click',function(){
	game.start();
});

//Questions 
var questions = [{
question: "What is the second book in the Song of Fire and Ice series?",
answers: ["Dance with Dragons", "Two Towers", "Myth of Cthulhu", "A Clash of Kings"],
correctAnswer: "A Clash of Kings",
image: "assets/images/"
}, {

question: "JRR Tolkien's One Ring was inscribed with, One Ring to Rule them all, One Ring to Find Them, One Ring to bring them all, and ___",
answers: ["Help My Precious Hide Them", "In the Darkness Bind Them", "Leave The Dark Behind Them", "In the Blackness Sign Them"],
correctAnswer: "In the Darkness Bind Them",
image: "assets/images/"
}, {

question: "What lion's resurrection is a key event in C.S. Lewis' tales of Narnia?",
answers: ["Simba", "Asad", "Aslan", "Lev"],
correctAnswer: "Aslan",
image: "assets/images/"
}, {

question: "This 'Dragonriders of Pern' author was the first woman to win a Nebula Award and a Hugo Award for fiction?",
answers: ["J.K. Rowling", "Anne Rice", "Laurell K. Hamilton", "Anne McCaffrey"],
correctAnswer: "Anne McCaffrey",
image: "assets/images/"
}, {

question: "This fictional land conceived by Terry Pratchett, was carried on the backs of four elephants standing on a turtle.",
answers: ["Hyboria", "Xanth", "Middle Earth", "Discworld"],
correctAnswer: "Discworld",
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter<=0){
			console.log("Time is Up");
			game.done();
		}
	},

	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$('start').remove();
			//Function that contains a for loop that will generate the questions
			for (var i = 0; i<questions.length; i++) {
				$('subwrapper').append('<h2>'+questions[i].question+'</h2>');
				//Subloop that allows users to create a single name
				for(var j=0;j<questions[i].answers.length;j++){
					$("subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
				}
			}
			}
}