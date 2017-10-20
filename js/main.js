var mainDisplay = [];
var secondaryDisplay = [];
var finalAnswer = [];
var operatorCheck = true;
var buttons = document.getElementsByTagName("button");
var smlDisplay = document.getElementById('secondary-text');
var lrgDisplay = document.getElementById('display-text');
var smlDisplay = document.getElementById('secondary-text');

	for(let i = 0; i < buttons.length; i++){
		
		if(Number.isInteger(+buttons[i].innerHTML) === true || buttons[i].innerHTML == '.'){
			buttons[i].addEventListener('click', (function() {
				mainDisplay.push(buttons[i].innerHTML);
				mainDisplay = [mainDisplay.join('')];		
				lrgDisplay.innerHTML = mainDisplay;
				operatorCheck = true;	
			}));
				
		} else if(buttons[i].innerHTML == '+' || buttons[i].innerHTML == '-' || buttons[i].innerHTML == '*' || buttons[i].innerHTML == '/'){
			buttons[i].addEventListener('click', (function() {
				if(operatorCheck === true){
					mainDisplay.push(buttons[i].innerHTML);
					secondaryDisplay.push(mainDisplay);
					mainDisplay = [mainDisplay.join('')];
					mainDisplay = parseInt(secondaryDisplay);
					mainDisplay = eval(secondaryDisplay);
					secondaryDisplay = [secondaryDisplay.join('').replace(/,/g, "")];
					mainDisplay = [mainDisplay.join('').replace(/,/g, "")];
					smlDisplay.innerHTML = secondaryDisplay;
					mainDisplay = [];
					operatorCheck = false;
				}
		    }));
		} else if(buttons[i].innerHTML == 'CE'){
			buttons[i].addEventListener('click', (function() {
				mainDisplay = [];
				lrgDisplay.innerHTML = 0;
			}));
		} else if(buttons[i].innerHTML == 'C'){
			buttons[i].addEventListener('click', (function() {
				mainDisplay = [];
				secondaryDisplay = [];
				lrgDisplay.innerHTML = 0;
				smlDisplay.innerHTML = '';
				operatorCheck = true;
			}));
			
		} else if(buttons[i].innerHTML == '=') {
			buttons[i].addEventListener('click', (function() {
				mainDisplay = [eval(secondaryDisplay + mainDisplay)];
				secondaryDisplay = [];
				lrgDisplay.innerHTML = mainDisplay;
				smlDisplay.innerHTML = '';
			}));
		}
	}

console.log(buttons);
	$(document).keyup(function(e) {
    console.log(e.keyCode);
    //TODO: Write keycodes
});