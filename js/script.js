function gameRockScissorsPaper () {
  //Zmienne globalne (dostęp do nich mają też funkcje lokalne)
  let summaryGames = 0;
  let summaryWins = 0;
  let summaryLosses = 0;
  let summaryDraws = 0;


  function playGame(playerInput) {
    //funkcja czyszcząca komunikaty o wyniki na poczatku każdej nowej rozgrywki
    clearMessages(); 

    //funkcja odczytująca wybory komputera i gracza i przypisująca im parametr: kamień, papier, nożyce
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

    //funkcja zliczająca liczbę gier
    function amountGames () {
        document.querySelector('li.number span').textContent = ++summaryGames;
        console.log('amountGames done');
      }
      amountGames ();

    //funkcja wygrana gracza wpisująca komunikat i dodająca +1 do wyniku
    function winPlayer() {
      printMessage('Gratulacje! Wygrałeś!');
      document.querySelector('li.win span').textContent = ++summaryWins;
    }
  //funkcja wygrana komputera wpisująca komunikat i dodająca +1 do wyniku
    function winComputer() {
      printMessage('Niestetety, przegrałeś.');
      document.querySelector('li.loss span').textContent = ++summaryLosses;
    }
  //funkcja remis wpisująca komunikat i dodająca +1 do wyniku
    function winDrawer() {
      printMessage('WOW, remis');
      document.querySelector('li.draw span').textContent = ++summaryDraws;
    }
  //funkcja odczytująca, kto wygrał i uruchomiająca inne funkcje winPlayer, winDrawer, winComputer
    function displayResult(argComputerMove, argPlayerMove) {
      console.log('moves:', argComputerMove, argPlayerMove);
      console.log('displayResult done!');

      if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') || (argComputerMove === 'papier' && argPlayerMove === 'nożyce') || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')) {
        winPlayer();
      } else if (argComputerMove === argPlayerMove) {
        winDrawer();
      } else {
        winComputer();
      }
    }

    // function displayResult(argComputerMove, argPlayerMove) {
    //   console.log('moves:', argComputerMove, argPlayerMove);
    //   console.log('displayResult done!');

    //   if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') || (argComputerMove === 'papier' && argPlayerMove === 'nożyce') || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')) {
    //     console.log('zadziałało sprawdzenie wygranej');
    //     printMessage('Gratulacje! Wygrałeś!');
    //     console.log('podaj win');
    //     // winnerIs = 'gracz';
    //     // winPlayer = 'wygrał gracz';
    //     return 'winer';
    //   } else if (argComputerMove === argPlayerMove) {
    //     console.log('zadziałało sprawdzenie remisu');
    //     printMessage('WOW, remis');
    //     console.log('podaj draw');
    //     // winnerIs = 'komputer';
    //     // draw = 'remis';
    //     return 'drawer';
    //   // } else if (argPlayerMove === 'nieznany ruch') {
    //   //   console.log('zadziałało sprawdzenie błędnej wartości');
    //   //   printMessage('Nie rozumiem. Musisz wybrać 1=kamień lub 2=papier lub 3=nożyce');
    //   } else {
    //     console.log('zadziałało sprawdzenie przegranej');
    //     printMessage('Niestetety, przegrałeś.');
    //     console.log('podaj loss');
    //     // winComp = 'wygrał komputer';
    //     return 'loser';
    //   }
    // }
    // let winnerIs = 'remis';
    // let winPlayer = '';
    // let draw = '';
    // let winComp = '';
    
    //zmienna z losową liczbą (od 1 do 3) jako wybór komputera
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    // zmienna ruch komputera przypisana do funkcji
    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
    console.log('Gracz wpisał: ' + playerInput);

    // zmienna ruch gracza przypisana do funkcji
    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);

    // let whoWin = displayResult();

    // function publishResult(whoWin){
    //   console.log('publishResult done', whoWin);
    //   document.querySelector('li.number span').textContent = ++summaryGames;
      
    //   if(whoWin == "winer"){
    //     document.querySelector('li.win span').textContent = ++summaryWins;
    //     console.log('dodaj wygraną');
    //     return;
    //   } else if (whoWin == "loser"){
    //     document.querySelector('li.loss span').textContent = ++summaryLosses;
    //     console.log('dodaj przegraną');
    //     return;
    //   } else if(whoWin == "drawer"){
    //     document.querySelector('li.draw span').textContent = ++summaryDraws;
    //     console.log('dodaj remis');
    //   }
    // }
    // publishResult();

    //Koniec gry określa warunki, kiedy wygrywa gracza a kiedy komputer
    // uruchamia wpisanie komunikatu oraz wyłącza bitony gry a takze dodaje funkcję o możliwości nowej gry
    if(summaryWins === 5) {
      printWinner('Wygrałeś!!!');
      disableButtons();
      addEventListenerToNewGame();
    }
    else if(summaryLosses === 5) {
      printWinner('Niestety, przegrałeś:(');
      disableButtons();
      addEventListenerToNewGame();
    }  
  }

  // ddoająca komunikat o tym, kto wygrał
  function addEventListenerToNewGame() {
    document.querySelector('#thewinner button').addEventListener('click', newGame);
  }

  // 3 funkcje dookreślające anonimową funkcje playGame pod względem kto wygrał lub remisu
  function playRock() {
    playGame(1);
  }
  function playPaper() {
    playGame(2);
  }
  function playScissors() {
    playGame(3);
  }
  // funkcja dezaktywująca buttony gry (potrzebna, gdy ktoś osiągnął 5 wygranych)
  function disableButtons() {
    document.getElementById('button-rock').removeEventListener('click', playRock);
    document.getElementById('button-paper').removeEventListener('click', playPaper);
    document.getElementById('button-scissors').removeEventListener('click', playScissors);
  }
  // funkcja włączająca buttony (potrzebna, gdy rozpoczynamy nową grę)
  function enableButtons() {
    document.getElementById('button-rock').addEventListener('click', playRock);
    document.getElementById('button-paper').addEventListener('click', playPaper);
    document.getElementById('button-scissors').addEventListener('click', playScissors);
  }

  // Nowa gra
  function newGame () {
    clearMessages();
    clearWinner();
    clearPublishResult ();
    summaryGames = 0;
    summaryWins = 0;
    summaryLosses = 0;
    summaryDraws = 0;
    enableButtons();
  }

  enableButtons();
}

gameRockScissorsPaper ();