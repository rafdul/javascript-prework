let summaryGames = 0;
let summaryWins = 0;
let summaryLosses = 0;
let summaryDraws = 0;


function playGame(playerInput) {
  clearMessages(); 

  function getMoveName(argMoveId){
    console.log('getMoveName done!');

    if(argMoveId === 1){
      return 'kamień';
    } else if (argMoveId === 2) {
      return 'papier';
    } else if (argMoveId === 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    console.log('displayResult done!');

    if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') || (argComputerMove === 'papier' && argPlayerMove === 'nożyce') || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')) {
      console.log('zadziałało sprawdzenie wygranej');
      printMessage('Gratulacje! Wygrałeś!');
      console.log('podaj win');
      // winnerIs = 'gracz';
      winPlayer = 'wygrał gracz';
      // return 'winer';
    } else if (argComputerMove === argPlayerMove) {
      console.log('zadziałało sprawdzenie remisu');
      printMessage('WOW, remis');
      console.log('podaj draw');
      // winnerIs = 'komputer';
      draw = 'remis';
      // return 'drawer';
    // } else if (argPlayerMove === 'nieznany ruch') {
    //   console.log('zadziałało sprawdzenie błędnej wartości');
    //   printMessage('Nie rozumiem. Musisz wybrać 1=kamień lub 2=papier lub 3=nożyce');
    } else {
      console.log('zadziałało sprawdzenie przegranej');
      printMessage('Niestetety, przegrałeś.');
      console.log('podaj loss');
      winComp = 'wygrał komputer';
      // return 'loser';
    }
  }
  // let winnerIs = 'remis';
  let winPlayer = '';
  let draw = '';
  let winComp = '';
  

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);


  printMessage('Mój ruch to: ' + computerMove);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);


  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);


  // Zliczanie liczny gier (włączona do publishResult)
  // function amountGames () {
  //   document.querySelector('li.number span').textContent = ++summaryGames;
  //   console.log('amountGames done');
  // }
  // amountGames ();

  // Dlaczego nie działa funkcja, gdy whoWin odsyła do parametru zwróconego w return funkcji displayResult

  // function publishResult(whoWin){
  //   console.log('publishResult done');
  //   console.log('who win:', whoWin);
    
  //   if(whoWin === 'winer'){
  //     document.querySelector('p.win span').textContent = ++summaryWins;
  //     console.log('dodaj wygraną');
  //     return;
  //   } else if (whoWin === 'loser'){
  //     document.querySelector('p.loss span').textContent = ++summaryLosses;
  //     console.log('dodaj przegraną');
  //     return;
  //   } else {
  //     document.querySelector('p.draw span').textContent = ++summaryDraws;
  //     console.log('dodaj remis');
  //   }
  // }
  // publishResult();

  function publishResult(whoWin){
    console.log('publishResult done');
    document.querySelector('li.number span').textContent = ++summaryGames;
    
    if(whoWin = winPlayer){
      document.querySelector('li.win span').textContent = ++summaryWins;
      console.log('dodaj wygraną');
      return;
    } else if (whoWin = winComp){
      document.querySelector('li.loss span').textContent = ++summaryLosses;
      console.log('dodaj przegraną');
      return;
    } else if(whoWin = draw){
      document.querySelector('li.draw span').textContent = ++summaryDraws;
      console.log('dodaj remis');
    }
  }
  publishResult();

  //Koniec gry 
  if(summaryWins === 5) {
    printWinner('Wygrałeś!!!');
  }
  else if(summaryLosses === 5) {
    printWinner('Niestety, przegrałeś:(');
  }  
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


// Nowa gra
function newGame () {
  clearMessages();
  clearWinner();
  clearPublishResult ();
  summaryGames = 0;
  summaryWins = 0;
  summaryLosses = 0;
  summaryDraws = 0;
}
document.getElementById('thewinner').addEventListener('click', function(){
  newGame();
});
