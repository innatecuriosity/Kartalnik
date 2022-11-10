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
        newcommer.addEventListener("dblclick", editPlayer);

        players[playerName].head = newcommer;
        tableHead.insertBefore(newcommer, newPlayer);
    }
    return;
}

function editPlayer() {
    let player = event.target;
    
    let editField = document.createElement("div")
    editField.classList = "card edit-player";
    editField.textContent= "EDIT PLAYER: " + player;

    settings.appendChild(editField);

}

const tableHead = document.querySelector(".table-head");
const newPlayer= document.createElement("div");
newPlayer.classList="button new-player";
newPlayer.textContent="Add...";
newPlayer.addEventListener("click", addPlayer);

tableHead.appendChild(newPlayer);

const settings = document.querySelector(".settings");

//generate table

//keep scores
