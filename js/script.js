function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId){
    console.log('getMoveName done!');

    if(argMoveId == 1){
      return 'kamień';
    } if (argMoveId == 2) {
      return 'papier';
    } if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    console.log('displayResult done!');

    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
      console.log('zadziałało sprawdzenie wygranej');
      printMessage('Gratulacje! Wygrałeś!');
    } else if (argComputerMove == argPlayerMove) {
      console.log('zadziałało sprawdzenie remisu');
      printMessage('WOW, remis:)');
    } else if (argPlayerMove == 'nieznany ruch') {
      console.log('zadziałało sprawdzenie błędnej wartości');
      printMessage('Nie rozumiem. Musisz wybrać 1=kamień lub 2=papier lub 3=nożyce');
    } else {
      console.log('zadziałało sprawdzenie przegranej');
      printMessage('Niestetety, przegrałeś.');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);


  /*if(randomNumber == 1){
    computerMove = 'kamień';
  } else if (randomNumber == 2) {
    computerMove = 'papier';
  } else if (randomNumber == 3) {
    computerMove = 'nożyce';
  }*/

  printMessage('Mój ruch to: ' + argComputerMove);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  /*if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == '2') {
    playerMove = 'papier';
  } else if (playerInput == '3') {
    playerMove = 'nożyce';
  }*/

  printMessage('Twój ruch to: ' + argPlayerMove);

  displayResult(argComputerMove, argPlayerMove);

  /*console.log(getMoveName('3'));
  console.log(displayResult(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'));*/

  /*if ((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
    printMessage('Gratulacje! Wygrałeś!');
  } else if (computerMove == playerMove) {
    printMessage('WOW, remis:)');
  } else if ((computerMove == 'kamień' && playerMove == 'nożyce') || (computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'nożyce' && playerMove == 'papier')) {
    printMessage('Niestetety, przegrałeś.');
  } else if (computerMove == 'kamień' || computerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
    printMessage('Nie rozumiem :/ Musisz wybrać 1=kamień lub 2=papier lub 3=nożyce');
  }*/
}

document.getElementById('button-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('button-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('button-scissors').addEventListener('click', function(){
  playGame(3);
});
