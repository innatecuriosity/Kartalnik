//add players
let players = {};

function addPlayer() {
    playerName ="";

    while (playerName=="") {
        playerName=prompt("New player's name:");
        if (Object.keys(players).includes(playerName)) alert("A player with this name already exists, be unique.")
    }
    //maybe change id to nubers later
    players[playerName] = ({"id":playerName});
    
    const newcommer = document.createElement("div");
    newcommer.setAttribute("id", playerName);
    newcommer.classList="button player";
    newcommer.textContent=playerName;

    players[playerName].head = newcommer;
    tableHead.insertBefore(newcommer, newPlayer);

    console.log(players);

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
