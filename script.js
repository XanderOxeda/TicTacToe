const tiles = document.querySelectorAll(".tile");
const symbols = ["X","O","※","✓","⌀"];
let gameTurn = 0;
let symbolPlayerOne = 0;
let symbolPlayerTwo = 0;


function turn() {
    gameTurn = gameTurn === 0 ? 1 : 0;
    return gameTurn;
}

tiles.forEach((tile,i)=>{ 
    tile.addEventListener("click", ()=>{
        tile.innerText = symbols[turn(gameTurn);];
        

    })
});

