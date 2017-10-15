var mainDisplay = [];
var secondaryDisplay = [];
var finalAnswer = [];

var buttons = document.getElementsByTagName("button");
console.log(buttons);
var temp = buttons[6].innerHTML

//document.getElementsByTagName('button').onclick =function(){console.log(butt)}
for(let i = 0; i < 18; i++){
	
	if(Number.isInteger(+buttons[i].innerHTML) === true){
		buttons[i].addEventListener('click', (function() {
			mainDisplay.push(buttons[i].innerHTML);
				mainDisplay = [+mainDisplay.join('')];		
			document.getElementById('display-text').innerHTML = mainDisplay;
			
			
			console.log(mainDisplay);
			
		}));
			
	} else if(buttons[i].innerHTML == '+' || buttons[i].innerHTML == '-' || buttons[i].innerHTML == '*' || buttons[i].innerHTML == '/' || buttons[i].innerHTML == '.'){
			buttons[i].addEventListener('click', (function() {
				secondaryDisplay.push(+mainDisplay);
		    }));
	} else if(buttons[i].innerHTML == 'CE'){
		buttons[i].addEventListener('click', (function() {
			mainDisplay = [];
			document.getElementById('display-text').innerHTML = 0;
		}));
	} else if(buttons[i].innerHTML == 'C'){
		
		console.log(buttons[i].innerHTML);
	}

}

