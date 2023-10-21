const songTitle = "Nel blu dipinto di blu";
const startOfLyrics = "Penso che un sogno così non ritorni mai più";
const guessInput = document.getElementById("title");
const popup = document.getElementById("popup");
const livesCount = document.getElementById("lives-count");
var remainingLife=5;
var tentativi=0;
var myButton = document.getElementById("submit");
var win=false;
// Ottieni la data di oggi
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

if (win) {
  // Apri la finestra modale
  var modal = document.getElementById("modal-vittoria");
  modal.style.display = "block";
}

// Controlla se l'utente ha già giocato oggi
if (localStorage.getItem('lastPlayDate') === today) {
  alert('Hai già giocato oggi! Torna domani.');
 
} else {
  // Imposta la data dell'ultimo gioco come oggi
  localStorage.setItem('lastPlayDate', today);

  // Avvia il gioco
  // ...
  
}
function checkSong() {
  const guess = guessInput.value;
  if (guess.toLowerCase() === songTitle.toLowerCase() && remainingLife>=0) {
    guess.localeCompare(songTitle, undefined, { sensitivity: 'accent' });
      alert("Hai indovinato la canzone");
      popup.style.display = "block";
    } else {
        handleIncorrectGuess();
  }
}
// Imposta l'intervallo per azzerare il valore di 'lastPlayDate' ogni giorno
setInterval(function() {
  var today = new Date();
  if (localStorage.getItem('lastPlayDate') === today) {
    localStorage.removeItem('lastPlayDate');
  }
}, 24 * 60 * 60 * 1000); // 24 ore in millisecondi



  
function handleIncorrectGuess() {
  
  remainingLife--;
  
  tentativi++;
    switch(remainingLife){
      case 4: text1.style.display = "block";
              tentativi++;
      break;
      case 3: text2.style.display = "block";
              tentativi++;  
      break;
      case 2: text3.style.display = "block";
              tentativi++;
      break;
      case 1: text4.style.display = "block";
              tentativi++;
      break;
    }
    
    livesCount.innerText = remainingLife;
    if (remainingLife === 0) {
      gameOver();
      myButton.disabled = true;
      
    } 
  }


  function gameOver(){
    alert("Spiacenti, non hai indovinato. La canzone era "+songTitle);
  }


		function clickHelp() {
			var paginaIniziale = document.getElementById("pagina-iniziale");
			var paginaNascosta = document.getElementById("pagina-nascosta");

			paginaIniziale.style.display = "none";
			paginaNascosta.style.display = "block";
		}

		function returnclickHelp() {
			var paginaIniziale = document.getElementById("pagina-iniziale");
			var paginaNascosta = document.getElementById("pagina-nascosta");

			paginaIniziale.style.display = "block";
			paginaNascosta.style.display = "none";
		}

    
		function clickPlayed() {
      handleIncorrectGuess();
		}
		

		function toggleDarkMode() {
			var body = document.getElementsByTagName("body")[0];
			body.classList.toggle("dark-mode");
		}



function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var played = getCookie("played");
  if (played != "") {
    alert("Hai già giocato oggi!");
    clickPlayed();
    return false;
  } 

  }

  function chiudiFinestraModale() {
    var modal = document.getElementById("modal-vittoria");
    modal.style.display = "none";
  }