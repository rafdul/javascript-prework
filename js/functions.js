function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printWinner(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('thewinner').appendChild(div);
	let button = document.createElement('button');
	document.getElementById('thewinner').appendChild(button).innerHTML = 'Zagraj jeszcze raz';
}