//Caracteres para el tablero
const symbols = ["X","O","※","✓","⌀"];

//Elementos de la página
const tiles = document.querySelectorAll(".tile");
const modal = document.querySelector("dialog");
const textModal = modal.querySelector("h2");
let gameTurn = 1 // 0 | 1 | PAUSA

tiles.forEach((tile, index) =>{
    tile.addEventListener("click", ()=>{
        if(gameTurn === "PAUSA") return;
        if(tile.textContent !== "") return;
        tile.textContent = gameTurn ===  1 ? symbols[1] : symbols[0];
        gameTurn = gameTurn === 1 ? 0 : 1;
        const positionWinner = checked();
        console.log(typeof positionWinner)
        if(typeof positionWinner === "object") {
            win(positionWinner)
            return
        };
        if (positionWinner === "empate"){
            mostrarModal("Empate")
        }
    })
})

modal.querySelector("button").addEventListener("click", ()=>{
    tiles.forEach(tile => {
        tile.textContent = "";
        tile.classList.toggle("ganador",false);
    });
    modal.close();
    gameTurn = 1;
})

function checked(){
    const board = Array.from(tiles).map(tile => tile.textContent);
    console.log(board)

    // Reviso filas
    for (let i = 0; i < 9; i+=3) {
        if(board[i] && board[i] === board[i+1] && board[i] === board[i+2]){
            return ([i,i+1,i+2]);
        }
    }

    // Reviso columnas
    for (let i = 0; i < 3; i++) {
        if(board[i] && board[i] === board[i+3] && board[i] === board[i+6]){
            return ([i,i+3,i+6]);
        }
    }

    // Reviso oblicuas
    if(board[0] && board[0] === board[4] && board[0] === board[8]) return [0,4,8];
    if(board[2] && board[2] === board[4] && board[2] === board[6]) return [2,4,6];

    //Reviso empate
    if(board.includes("")) return false;
    return "empate";
}

// Marco las posiciones ganadoras y muestro el modal de victoria
function win(potitionswinner){
    console.log(potitionswinner)
    potitionswinner.forEach(index => tiles[index].classList.toggle("ganador",true));
    mostrarModal("Ganador jugador " + (gameTurn === 1 ? "2" : "1"));
}

function mostrarModal(text){
    textModal.innerText = text;
    modal.showModal();
    estadoJuego = "PAUSA";
}