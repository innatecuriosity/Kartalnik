//add players
let players = {};

// gets player list, by asking for it through the browser
function getPlayers_input() {
    let input ="";
    while (input=="") {
        input=prompt("Players's names (separate by a comma):");
    }
    return input.split(",");
}
function addPlayer(playerList) {

    if (playerList == undefined) playerList = getPlayers_input();
     //TODO maybe change id to numbers later
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
        tableHead.appendChild(newcommer);

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
const settings = document.querySelector(".settings");

//create Add... button for adding new players
const addNewPlayer= document.createElement("div");
addNewPlayer.classList="button new-player";
addNewPlayer.textContent="Add players";
addNewPlayer.addEventListener("click", () => {addPlayer(getPlayers_input())});

settings.appendChild(addNewPlayer);

//generate table

//keep scores

//for testing
addPlayer(["Nate", "Kat"]);
