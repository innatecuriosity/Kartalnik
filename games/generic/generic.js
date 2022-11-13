//add players
let players = {};

// gets player list, by asking for it through the browser
function getPlayers_input(){
    let input ="";
    while (input=="") {
        input=prompt("Players's names (separate by a comma):");
    }
    return playerList = input.split(",");
}
function addPlayer() {
    //get player names by input (by asking)
    let playerList = getPlayers_input();

    //if (Object.keys(players).includes(playerList)) alert("A player with this name already exists, be unique.")
    console.log(playerList);
    //TODO maybe change id to nubers later
    for (playerName of playerList) {
        playerName = playerName.trim();
        players[playerName] = ({"id":playerName});
        player = players[playerName];
        
        //creates a name tag for the top of the scoreboard and adds it to player attributes
        const newcommer = document.createElement("div");
        newcommer.setAttribute("id", playerName);
        newcommer.classList="button player";
        newcommer.textContent=playerName;
        newcommer.addEventListener("dblclick", () =>{players[event.target.id].editcard.classList.toggle("hidden")});

        players[playerName].head = newcommer;
        tableHead.insertBefore(newcommer, newPlayer);

        // creates edit element but keeps it hidden
        let editField = document.createElement("div")
        player["editcard"] = editField

        editField.classList = "card edit-player hidden " + playerName ;
        editField.textContent= "EDIT PLAYER: " + playerName;

        settings.appendChild(editField);

    }
    return;
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
