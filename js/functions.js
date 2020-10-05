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

function clearWinner() {
	document.getElementById('thewinner').innerHTML = '';
}

function clearPublishResult () {
	document.querySelector('li.win span').textContent = '';
	document.querySelector('li.loss span').textContent = '';
	document.querySelector('li.draw span').textContent = '';
	document.querySelector('li.number span').textContent = '';
}