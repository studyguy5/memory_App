
let wrapper = document.querySelector<HTMLDivElement>('.resultsWrapper');
let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
export function renderResultsUI(): void {
    if (game) {
        game.style.display = 'none';
    }
    if (wrapper) {
        wrapper.style.display = 'flex';
        let player1Points = document.querySelector(`.player1 p`)!.textContent;
        let player2Points = document.querySelector(`.player2 p`)!.textContent;
        wrapper.innerHTML = `<div class="results">
        <img src="/project/assets/img/game_over.svg" alt="game over.svg">
        <span>Final Score:</span>
        <div class="score">
        <img src="/project/assets/icons/label_blue.svg"><p>Blue: ${player1Points}</p> 
        <img src="/project/assets/icons/label_orange.svg"><p>Orange: ${player2Points}</p>
        </div>
    </div>`;
    }
    setTimeout(() => {
        showWinner();
    }, 2500);
}

function showWinner(): void {
    let player1Points = document.querySelector(`.player1 p`)!.textContent;
    let player2Points = document.querySelector(`.player2 p`)!.textContent;
    console.log('player1Points: ', player1Points, 'player2Points: ', player2Points);
    if (parseInt(player1Points) > parseInt(player2Points)) {
        if (wrapper) {
            wrapper.innerHTML = "";
            wrapper.innerHTML = `<div class="resultsWinner">
        <img src="/project/assets/img/Confetti.svg" alt="confetti.svg">
        <span>The winner is</span>
        <p class="blue">${'Blue player'}</p>
        <div class="imageButtonDiv">
        <img src="/project/assets/img/blue_chess_pawn.svg" alt="winner_image.svg">
        <button onclick="reloadpage()" class="playAgainBtn">Back to Start</button>
        </div>
        </div>`;
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
    } else if (parseInt(player1Points) < parseInt(player2Points)) {
        if (wrapper) {
            wrapper.innerHTML = "";
            wrapper.innerHTML = `<div class="resultsWinner">
        <img src="/project/assets/img/Confetti.svg" alt="confetti.svg">
        <span>The winner is</span>
        <p class="orange">${'Orange player'}</p>
        <div class="imageButtonDiv">
        <img src="/project/assets/img/orange_chess_pawn.svg" alt="winner_image.svg">
        <button onclick="reloadpage()" class="playAgainBtn">Back to Start</button>
        </div>
        </div>`;
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
    } else {
        if (wrapper) {
            wrapper.innerHTML = `<div class="resultsWinner">
    <img src="/project/assets/img/Confetti.svg" alt="confetti.svg">
    <span>It's a draw!</span>
    <div class="imageCenterDiv">
    <img src="/project/assets/img/draw_Image.svg" alt="draw_image.svg">
    <img src="/project/assets/img/scale_Image.svg" alt="scale_image.svg">
    </div>
    <button onclick="reloadpage()" class="playAgainBtn">Back to Start</button>
    </div>`
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
    }
}

function reloadpage(): void {
    window.location.reload();
}
