let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
let wrapper = document.querySelector<HTMLDivElement>('.resultsWrapper');
let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
export function renderResultsUI(): void {
    if (game) {
        game.style.display = 'none';
    }
    if (wrapper) {
        wrapper.style.display = 'flex';
        themeImg = document.documentElement.getAttribute('data-theme');
        let player1Points = document.querySelector(`.player1 p`)!.textContent;
        let player2Points = document.querySelector(`.player2 p`)!.textContent;
        wrapper.innerHTML = `<div class="results">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/game_over.svg" alt="game over.svg">' : themeImg === 'gaming' ? '<img src="/project/assets/img/gameOver_red.svg" alt="game over.svg">' : themeImg === 'daproject' ? '<img src="/project/assets/img/gameOver_orange.svg" alt="game over.svg">' : ""}
        <span>Final Score:</span>
        <div class="score">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/icons/codeVibes_blue.svg">'
             : themeImg === 'gaming' ? '<img src="/project/assets/icons/gaming_orange.svg">' 
                : themeImg === 'daproject' ? '<img src="/project/assets/icons/gaming_orange.svg">' : ""}
                <p>${themeImg === 'codeVibes' ? 'Blue:' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? '' : ''}
                ${themeImg === 'codeVibes' ?  player1Points : player2Points}</p>

        ${themeImg === 'codeVibes' ? '<img src="/project/assets/icons/codeVibes_orange.svg">' 
            : themeImg === 'gaming' ? '<img src="/project/assets/icons/gaming_blue.svg">' 
            : themeImg === 'daproject' ? '<img src="/project/assets/icons/gaming_blue.svg">' : ""}
            <p>${themeImg === 'codeVibes' ? 'Orange:' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? '' : ''}
            ${themeImg === 'codeVibes' ?  player2Points : player1Points}</p>
        </div>
    </div>`;
    }
    setTimeout(() => {
        showWinner();
    }, 20500);
}

function showWinner(): void {
    themeImg = document.documentElement.getAttribute('data-theme');
    let player1Points = document.querySelector(`.player1 p`)!.textContent;
    let player2Points = document.querySelector(`.player2 p`)!.textContent;
    console.log('player1Points: ', player1Points, 'player2Points: ', player2Points);
    if (parseInt(player1Points) > parseInt(player2Points)) {
        if (wrapper) {
            wrapper.innerHTML = "";
            wrapper.innerHTML = `<div class="resultsWinner">
            ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
        <span>The winner is</span>
        <p class="blue">${'Blue player'}</p>
        <div class="imageButtonDiv">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/blue_chess_pawn.svg">': themeImg === 'gaming' ? '<img src="/project/assets/img/golden_pokal.svg">': themeImg === 'daproject' ? '<img src="/project/assets/img/orange_PawnWhiteBorder.svg">' : ""}
        <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
        </div>
        </div>`;
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
    } else if (parseInt(player1Points) < parseInt(player2Points)) {
        if (wrapper) {
            wrapper.innerHTML = "";
            wrapper.innerHTML = `<div class="resultsWinner">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
        <span>The winner is</span>
        <p class="orange">${'Orange player'}</p>
        <div class="imageButtonDiv">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/orange_chess_pawn.svg">': themeImg === 'gaming' ? '<img src="/project/assets/img/golden_pokal.svg">': themeImg === 'daproject' ? '<img src="/project/assets/img/orange_PawnWhiteBorder.svg">' : "" }
        <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
        </div>
        </div>`;
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
    } else {
        if (wrapper) {
            wrapper.innerHTML = `<div class="resultsWinner">
    ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
    <span>It's a draw!</span>
    <div class="imageCenterDiv">
    ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/draw_türkis.svg">': themeImg === 'gaming' ? '<img src="/project/assets/img/draw_red.svg">': '<img src="/project/assets/img/draw_orange.svg">'}
    ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/scale_türkis.svg">': themeImg === 'gaming' ? '<img src="/project/assets/img/scale_red.svg">': '<img src="/project/assets/img/scale_orange.svg">'}
    </div>
    <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
    </div>`
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
    }
}

function reloadpage(): void {
    window.location.reload();
}
