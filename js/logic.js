let input = document.getElementById('input');
let buttons = document.getElementsByClassName('block__button');
let str = input.value;

function write(event){
	str = input.value;
	if((str[str.length-1] != undefined && str[str.length-1] != '*' && str[str.length-1] != '/' && 
	str[str.length-1] != '+' && str[str.length-1] != '-' && str[str.length-1] != '%' && str[str.length-1] != '^' && str[str.length-1] != '.') ||
	(buttons[this.a].textContent != '*' && buttons[this.a].textContent != '/' && buttons[this.a].textContent != '+' && 
	buttons[this.a].textContent != '-' && buttons[this.a].textContent != '%' && buttons[this.a].textContent != '^' && buttons[this.a].textContent != '.')){
		input.value += buttons[this.a].textContent;
	}
}

function equals() {
	str = input.value;
	if(str[str.length-1] != '%' && str[str.length-1] != '*' && str[str.length-1] != '+' && str[str.length-1] != '-' && str[str.length-1] != '/' && str[str.length-1] != '^'){
		input.value = eval(str);
	}
}

function around() {
	str = input.value;
	input.value = Math.round(str);
}




buttons[0].addEventListener('click', function(){
	input.value = '';
});

buttons[1].addEventListener('click', function(){
	str = input.value;
	input.value = str.slice(0, -1);
})


for (let i = 2; i < 19; i++) {
	if(i != 16){
		buttons[i].addEventListener('click', {handleEvent: write, a: i});
	}
}


buttons[buttons.length-1].addEventListener('click', equals);

buttons[16].addEventListener('click', around);