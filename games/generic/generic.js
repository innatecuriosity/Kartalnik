//add players
let players = {};

function addPlayer() {
    let input ="";

    while (input=="") {
        input=prompt("Players's names (separate by a comma):");
    }

    let playerList = input.split(",");
    //if (Object.keys(players).includes(playerList)) alert("A player with this name already exists, be unique.")
    console.log(playerList);
    //maybe change id to nubers later
    for (playerName of playerList) {
        playerName = playerName.trim();
        players[playerName] = ({"id":playerName});
        
        const newcommer = document.createElement("div");
        newcommer.setAttribute("id", playerName);
        newcommer.classList="button player";
        newcommer.textContent=playerName;

        players[playerName].head = newcommer;
        tableHead.insertBefore(newcommer, newPlayer);
    }
    return;
}

const tableHead = document.querySelector(".table-head");
const newPlayer= document.createElement("div");
newPlayer.classList="button new-player";
newPlayer.textContent="Add...";
newPlayer.addEventListener("click", addPlayer);

tableHead.appendChild(newPlayer);

//generate table

//keep scores
