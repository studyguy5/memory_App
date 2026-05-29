


/**
 * @function renderResultsTemplate we return the html code for the results
 * @param themeImg the choosen theme
 * @param player1Points point of player One
 * @param player2Points points of player Two
 * @returns html
 */
export function renderResultsTemplate(themeImg: string | null, player1Points: string | null, player2Points: string | null): string {
    return`<div class="results">
        ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/img/game_over.svg" alt="game over.svg">' : themeImg === 'gaming' ? '<img src="/memory_app/assets/img/gameOver_red.svg" alt="game over.svg">' : themeImg === 'daproject' ? '<img src="/memory_app/assets/img/gameOver_orange.svg" alt="game over.svg">' : ""}
        <span>Final Score:</span>
        <div class="score">
        ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/icons/codeVibes_blue.svg">'
             : themeImg === 'gaming' ? '<img src="/memory_app/assets/icons/gaming_orange.svg">' 
                : themeImg === 'daproject' ? '<img src="/memory_app/assets/icons/gaming_orange.svg">' : ""}
                <p>${themeImg === 'codeVibes' ? 'Blue:' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? '' : ''}
                ${themeImg === 'codeVibes' ?  player1Points : themeImg ==='gaming' ? player1Points : themeImg === 'daproject' ? player1Points : ""}</p>

        ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/icons/codeVibes_orange.svg">' 
            : themeImg === 'gaming' ? '<img src="/memory_app/assets/icons/gaming_blue.svg">' 
            : themeImg === 'daproject' ? '<img src="/memory_app/assets/icons/gaming_blue.svg">' : ""}
            <p>${themeImg === 'codeVibes' ? 'Orange:' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? '' : ''}
            ${themeImg === 'codeVibes' ?  player2Points : themeImg ==='gaming' ? player2Points : themeImg === 'daproject' ? player2Points : ""}</p>
        </div>
    </div>`;
}

/**
 * @function playerTwoWinsTemplate we return the html code for the case where player two wins
 * @param themeImg the choosen theme
 * @returns html
 */
export function playerTwoWinsTemplate(themeImg: string | null): string {
    return `<div class="resultsWinner">
            ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
        <span>The winner is</span>
        <p class="${themeImg === 'codeVibes' ? 'orange' : themeImg === 'gaming' ? 'blue' : themeImg === 'daproject' ? 'blue' : ""}">${themeImg === 'codeVibes' ? 'Orange player' : themeImg === 'gaming' ? 'Blue player' : themeImg === 'daproject' ? 'Blue player': ""}</p>
        <div class="imageButtonDiv">
        ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/img/orange_chess_pawn.svg">': themeImg === 'gaming' ? '<img src="/memory_app/assets/img/golden_pokal.svg">': themeImg === 'daproject' ? '<img src="/memory_app/assets/img/blue_PawnWhiteBorder.svg">' : ""}
        <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
        </div>
        </div>`;
}

/**
 * @function playerOneWinsTemplate we return the html code for the case where player one wins
 * @param themeImg choosen theme
 * @returns html
 */
export function playerOneWinsTemplate(themeImg: string | null): string {
    return `<div class="resultsWinner">
        ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
        <span>The winner is</span>
        <p class="${themeImg === 'codeVibes' ? 'blue' : themeImg === 'gaming' ? 'orange' : themeImg === 'daproject' ? 'orange' : ""}">${themeImg === 'codeVibes' ? 'Blue player' : themeImg === 'gaming' ? 'Orange player' : themeImg === 'daproject' ? 'Orange player' : ''}</p>
        <div class="imageButtonDiv">
        ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/img/blue_chess_pawn.svg">': themeImg === 'gaming' ? '<img src="/memory_app/assets/img/golden_pokal.svg">': themeImg === 'daproject' ? '<img src="/memory_app/assets/img/orange_PawnWhiteBorder.svg">' : "" }
        <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
        </div>
        </div>`;
}

/**
 * @function itsADrawTemplate we return the html code for the case where its a draw
 * @param themeImg choosen theme
 * @returns html
 */
export function itsADrawTemplate(themeImg: string | null): string {
    return `<div class="resultsWinner">
    ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/img/Confetti.svg" alt="confetti.svg">' : ''}
    <span>It's a draw!</span>
    <div class="imageCenterDiv">
    ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/img/draw_türkis.svg">': themeImg === 'gaming' ? '<img src="/memory_app/assets/img/draw_red.svg">': '<img src="/memory_app/assets/img/draw_orange.svg">'}
    ${themeImg === 'codeVibes' ? '<img src="/memory_app/assets/img/scale_türkis.svg">': themeImg === 'gaming' ? '<img src="/memory_app/assets/img/scale_red.svg">': '<img src="/memory_app/assets/img/scale_orange.svg">'}
    </div>
    <button onclick="reloadpage()" class="playAgainBtn">${themeImg === 'codeVibes' ? 'Back to Start' : themeImg === 'gaming' ? 'Home' : 'Home'}</button>
    </div>`
}