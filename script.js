/****************
 VARIABLES
*****************/
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerSelection = computerPlay();
let winCount = 0;
let loseCount = 0;
/****************
SELECTING THE INPUTS
****************/

		 function computerPlay(){
		 	
		 	let select = Math.floor(Math.random() * 3) + 1;

		 	if(select == 1){
		 		choice = 'Rock'
		 	} else if(select == 2){
		 		choice = 'Paper'
		 	} else if(select == 3){
		 		choice = 'Scissors'
		 	}

		 	return choice
		 };

rock.addEventListener('click', () => {
	const output = document.querySelector('.output');
	if(output.childElementCount == 0){
		playRound('rock', computerPlay());
	} else {
				const update = document.querySelector('.outcome');
				output.removeChild(update)
				playRound('rock', computerPlay())
	   };
});

paper.addEventListener('click', () => {
	const output = document.querySelector('.output');
	if(output.childElementCount == 0){
		playRound('paper', computerPlay());
	} else {
				const update = document.querySelector('.outcome');
				output.removeChild(update)
				playRound('paper', computerPlay())
	   };
});

scissors.addEventListener('click', () => {
	const output = document.querySelector('.output');
	if(output.childElementCount == 0){
		playRound('scissors', computerPlay());
	} else {
				const update = document.querySelector('.outcome');
				output.removeChild(update)
				playRound('scissors', computerPlay())
	   };
});

		function lose(){
		 	loseCount += 1
		 	const output = document.querySelector('.output');
			const update = document.createElement('h2');
			update.classList.add('outcome');
			update.textContent = 'You lose.'
			output.appendChild(update);
		};

		 function win(){
		 	winCount +=1
		 	const output = document.querySelector('.output');
			const update = document.createElement('h2');
			update.classList.add('outcome');
			update.textContent = 'You Win!'
			output.appendChild(update);
		 };

		  function draw(){
		 	const output = document.querySelector('.output');
			const update = document.createElement('h2');
			update.classList.add('outcome');
			update.textContent = 'Draw!'
			output.appendChild(update);
		 };


/************
THE GAME
************/

function playRound(a,b){
		const question = document.querySelector('.question');
			if(question.childElementCount == 1){
				let comp = b
				const update = document.createElement('h3');
				update.textContent = 'I choose: ' + b;
				question.appendChild(update)
			} else if(question.childElementCount == 2){
				const remove = document.querySelector('h3');
				question.removeChild(remove);
				const update = document.createElement('h3');
				update.textContent = 'I choose: ' + b;
				question.appendChild(update);
			};

		 			if(b == 'Rock'){
		 				if (a == 'rock'){
		 					return draw()
		 				} else if (a == 'paper'){
		 					return win() 
		 				} else if (a == 'scissors'){
		 					return lose()
		 				}
		 			} else if(b == 'Paper'){
		 				if (a == 'rock'){
		 					return lose()
		 				} else if (a == 'paper'){
		 					return draw()
		 				} else if (a == 'scissors'){
		 					return win()
		 				}
		 			} else if(b == 'Scissors'){
		 				if (a == 'rock'){
		 					return win()
		 				} else if (a == 'paper'){
		 					return lose()
		 				} else if (a == 'scissors'){
		 					return draw()
		 				}
		 			} 

};

	 
	






