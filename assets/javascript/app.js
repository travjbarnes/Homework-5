//User Presses Start to begin game
$('#start').on('click',function(){
	game.start();
})

$(document).on('click','#end',function(){
	game.done();
})

//Questions 
var questions = [{
question: "What is the second book in the Song of Fire and Ice series?",
answers: ["Dance with Dragons", "Two Towers", "Myth of Cthulhu", "A Clash of Kings"],
correctAnswer: "A Clash of Kings"
//image: "assets/images/"
}, {

question: "JRR Tolkien's One Ring was inscribed with, One Ring to Rule them all, One Ring to Find Them, One Ring to bring them all, and ___",
answers: ["Help My Precious Hide Them", "In the Darkness Bind Them", "Leave The Dark Behind Them", "In the Blackness Sign Them"],
correctAnswer: "In the Darkness Bind Them"
//image: "assets/images/"
}, {

question: "What lion's resurrection is a key event in C.S. Lewis' tales of Narnia?",
answers: ["Simba", "Asad", "Aslan", "Lev"],
correctAnswer: "Aslan"
//image: "assets/images/"
}, {

question: "This 'Dragonriders of Pern' author was the first woman to win a Nebula Award and a Hugo Award for fiction?",
answers: ["J.K. Rowling", "Anne Rice", "Laurell K. Hamilton", "Anne McCaffrey"],
correctAnswer: "Anne McCaffrey"
//image: "assets/images/"
}, {

question: "This fictional land conceived by Terry Pratchett, was carried on the backs of four elephants standing on a turtle.",
answers: ["Hyboria", "Xanth", "Middle Earth", "Discworld"],
correctAnswer: "Discworld"
}];

//Variables for the game
var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	//function that will increase the counter by one.
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter<=0){
			console.log("Time is Up");
			game.done();
		}
	},

	start: function(){
		//timer running that will be running game countdown function
		timer = setInterval(game.countdown,1000);
		////Add time remaining to the HTML
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$('start').remove();
			//Function that contains a for loop that will generate the questions
			for (var i = 0; i<questions.length; i++){
				$('subwrapper').append('<h2>'+questions[i].question+'</h2>');
				//Subloop that allows users to answers questions
				for(var j=0;j<questions[i].answers.length;j++){
$("subwrapper").append("<input type='radio'name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])				}
			}
			$('#subwrapper').append('<br><button id="end">Done</button>')
			},
			//Method to check the answers

			done: function(){
				$.each($('input[name="questions-1"]:checked'), function(){
					if ($(this).val()==question[1].correctAnswer) {
						game.correct++;
					} else {
						game.incorrect++;
					}
				});
			
				$.each($('input[name="questions-2"]:checked'), function(){
					if ($(this).val()==question[2].correctAnswer) {
						game.correct++;
					} else {
						game.incorrect++;
					}
				});
			
				$.each($('input[name="questions-3"]:checked'), function(){
					if ($(this).val()==question[3].correctAnswer) {
						game.correct++;
					} else {
						game.incorrect++;
					}
				});
			
				$.each($('input[name="questions-4"]:checked'), function(){
					if ($(this).val()==question[4].correctAnswer) {
						game.correct++;
					} else {
						game.incorrect++;
					}
				});	
		this.result();
		},
		result: function(){
			clearInterval(timer);
			$('#subwrapper h2').remove();
			$('subwrapper').html("<h2>Finished</h2>");
			$('#subwrapper').append("<h3>Correct Answer: "+this.correct+"</h3>");
			$('#subwrapper').append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");
			$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
			
		}
	}