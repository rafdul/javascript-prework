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
      winPlayer = 'wygrał gracz';
      // return 'winer';
    } else if (argComputerMove === argPlayerMove) {
      console.log('zadziałało sprawdzenie remisu');
      printMessage('WOW, remis');
      console.log('podaj draw');
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
  let winPlayer = '';
  let draw = '';
  let winComp = '';
  

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);


  /*if(randomNumber == 1){
    computerMove = 'kamień';
  } else if (randomNumber == 2) {
    computerMove = 'papier';
  } else if (randomNumber == 3) {
    computerMove = 'nożyce';
  }*/

  printMessage('Mój ruch to: ' + computerMove);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  /*if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == '2') {
    playerMove = 'papier';
  } else if (playerInput == '3') {
    playerMove = 'nożyce';
  }*/

  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);

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



  // let gameSummaryNumbers = 0;
  // let gameSummaryWins = 0;
  // let gameSummaryLosses = 0;
  // let gameSummaryDraws = 0;

  
  function amountGames () {
    document.querySelector('li.number span').textContent = ++summaryGames;
    console.log('amountGames done');
  }
  amountGames ();

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

  function theWinnerIs (summaryWins, summaryLosses){
    console.log('theWinnerIs done');

    if(summaryWins === 2) {
        // alert('Wygrałeś');
        printWinner('Wygrałeś!!!');
        // document.getElementById('thewinner').innerHTML = 'Wygrałeś!!!';
        // console.log('wygrałeś 2 bitwy');
        // return
    }
    if (summaryLosses === 2) {
      // alert('Przegrałeś');
      printWinner('Niestety, przegrałeś:(');
      // document.getElementById('thewinner').innerHTML = 'Niestety, przegrałeś:(';
      // console.log('komputer wygrał 2 bitwy');
    }
  }
  theWinnerIs();
  console.log(summaryWins===2);
  
  
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

