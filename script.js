const tiles = document.querySelectorAll(".tile");
const symbols = ["X","O","※","✓","⌀"];
let gameTurn = 1;
let symbolPlayerOne = 0;
let symbolPlayerTwo = 0;

tiles.forEach((tile,i)=>{
    tile.addEventListener("click", ()=>{
        
        const playerOne = [];
        const playerTwo = [];
        console.log("XO",i)

        tile.innerText = symbols[gameTurn];
        if (gameTurn == 1) {
            gameTurn = 0;
        }else{
            gameTurn=1
        }

    })
});

