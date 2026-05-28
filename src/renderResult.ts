



export function renderResultsTemplate(themeImg: string | null, player1Points: string | null, player2Points: string | null): string {
    return`<div class="results">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/game_over.svg" alt="game over.svg">' : themeImg === 'gaming' ? '<img src="/project/assets/img/gameOver_red.svg" alt="game over.svg">' : themeImg === 'daproject' ? '<img src="/project/assets/img/gameOver_orange.svg" alt="game over.svg">' : ""}
        <span>Final Score:</span>
        <div class="score">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/icons/codeVibes_blue.svg">'
             : themeImg === 'gaming' ? '<img src="/project/assets/icons/gaming_orange.svg">' 
                : themeImg === 'daproject' ? '<img src="/project/assets/icons/gaming_orange.svg">' : ""}
                <p>${themeImg === 'codeVibes' ? 'Blue:' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? '' : ''}
                ${themeImg === 'codeVibes' ?  player1Points : themeImg ==='gaming' ? player1Points : themeImg === 'daproject' ? player1Points : ""}</p>

        ${themeImg === 'codeVibes' ? '<img src="/project/assets/icons/codeVibes_orange.svg">' 
            : themeImg === 'gaming' ? '<img src="/project/assets/icons/gaming_blue.svg">' 
            : themeImg === 'daproject' ? '<img src="/project/assets/icons/gaming_blue.svg">' : ""}
            <p>${themeImg === 'codeVibes' ? 'Orange:' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? '' : ''}
            ${themeImg === 'codeVibes' ?  player2Points : themeImg ==='gaming' ? player2Points : themeImg === 'daproject' ? player2Points : ""}</p>
        </div>
    </div>`;
}

export function playerTwoWinsTemplate(themeImg: string | null): string {
    return `<div class="resultsWinner">
            ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
        <span>The winner is</span>
        <p class="blue">${'Blue player'}</p>
        <div class="imageButtonDiv">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/blue_chess_pawn.svg">': themeImg === 'gaming' ? '<img src="/project/assets/img/golden_pokal.svg">': themeImg === 'daproject' ? '<img src="/project/assets/img/orange_PawnWhiteBorder.svg">' : ""}
        <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
        </div>
        </div>`;
}

export function playerOneWinsTemplate(themeImg: string | null): string {
    return `<div class="resultsWinner">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
        <span>The winner is</span>
        <p class="orange">${'Orange player'}</p>
        <div class="imageButtonDiv">
        ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/orange_chess_pawn.svg">': themeImg === 'gaming' ? '<img src="/project/assets/img/golden_pokal.svg">': themeImg === 'daproject' ? '<img src="/project/assets/img/orange_PawnWhiteBorder.svg">' : "" }
        <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
        </div>
        </div>`;
}

export function itsADrawTemplate(themeImg: string | null): string {
    return `<div class="resultsWinner">
    ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
    <span>It's a draw!</span>
    <div class="imageCenterDiv">
    ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/draw_türkis.svg">': themeImg === 'gaming' ? '<img src="/project/assets/img/draw_red.svg">': '<img src="/project/assets/img/draw_orange.svg">'}
    ${themeImg === 'codeVibes' ? '<img src="/project/assets/img/scale_türkis.svg">': themeImg === 'gaming' ? '<img src="/project/assets/img/scale_red.svg">': '<img src="/project/assets/img/scale_orange.svg">'}
    </div>
    <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
    </div>`
}