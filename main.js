let PlayerPoint = 0;
let PcPoint = 0;

const buttons = document.querySelectorAll('input[type="button"]');
const playerPointsElement = document.getElementById('playerPoints');
const pcPointsElement = document.getElementById('pcPoints');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      const PlayerSelect = button.value;
      round(PlayerSelect);
    });
  });

function updatePoints() {
    playerPointsElement.textContent = `Player: ${PlayerPoint}`;
    pcPointsElement.textContent = `PC: ${PcPoint}`;
  }

function pcChoice() {
  let choice = ["rock", "paper", "scissors"]
  return choice[Math.floor(Math.random() * choice.length)]
}
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function round(PlayerSelect) {
    const PcSelect = pcChoice();
    let result = "";

    if (PlayerSelect === "rock" && PcSelect === "scissors" || PlayerSelect === "paper" && PcSelect === "rock" || PlayerSelect === "scissors" && PcSelect === "paper") {
        result = "Player: " + PlayerSelect + " PC: " + PcSelect + "<br>Player won this round";
        PlayerPoint += 1;
    } else if (PlayerSelect === PcSelect) {
        result = "Player: " + PlayerSelect + " PC: " + PcSelect + "<br>Draw";
    } else {
        PcPoint += 1;
        result = "Player: " + PlayerSelect + " PC: " + PcSelect + "<br>Pc won this round";
    }
    
    updatePoints();

    if (PlayerPoint === 5) {
        result = "Player Wins!!!!";
        disableButtons();
    } else if (PcPoint === 5) {
        result = "Pc Wins!!!";
        disableButtons();
    }

    document.getElementById('result').innerHTML = result;
}
