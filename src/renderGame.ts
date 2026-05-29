
/**
 * @function renderGameUI - function to render the basic game User Interface
 * @param themeImg - variable to store the choosen theme
 * @returns html
 */
export function renderGameUI() {
    let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
    console.log('themeImg: ', themeImg);
    return /*html*/`
    <div class="headGameInfo">
    <div class="playerInfo">
    <div class=player1>
    <img src="${themeImg === 'codeVibes' ? '/project/assets/icons/codeVibes_blue.svg' : 
                themeImg === 'gaming' ? '/project/assets/icons/gaming_orange.svg' : '/project/assets/icons/gaming_orange.svg'}">${themeImg === 'codeVibes' ? 'Blue' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? '' : ''}<p>0</p>
                </div>
            <div class=player2>
            <img src="${themeImg === 'codeVibes' ? '/project/assets/icons/codeVibes_orange.svg' : 
                themeImg === 'gaming' ? '/project/assets/icons/gaming_blue.svg' : '/project/assets/icons/gaming_blue.svg'}">${themeImg === 'codeVibes' ? 'Orange' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? '' : ''}<p>0</p>
                </div>
                </div>
                <div class="currentPlayer">Current Player:
            <div class="currentPlayerImg">
            <img src="">
            </div>
        </div>
        <div class="exitGame">
        <img src="${themeImg === 'codeVibes' ? '/project/assets/icons/exit_icon_white.svg' : 
            themeImg === 'gaming' ? '/project/assets/icons/exit_icon_white.svg' : '/project/assets/icons/exit_icon_blue.svg'}" alt="Exit Game Button">
            <p>Exit Game</p>   
            </div>
            
            <div class="exitPopupWrapper">
            <div class="exitGamePopup">
            <p>Are you sure you want to quit the game?</p>
            <div class="buttons">
            <button class="no">Back to game</button>
                <button onclick="reloadpage()" class="yes">Exit game</button>
                </div>
        </div>
        </div>
        </div>
        <div class="gameField">
    
        </div>
        </div>`
        
        
    }

    /**
     * @function cardsTemplate we return the html code for a single card
     * @param themeImg choosen theme
     * @param element element is a single card in the choosen card set
     * @returns html
     */
   export function cardsTemplate(themeImg: string | null, element: string) {
        return /*html*/ `
                <button id="card" class="card">
                    <div class="card__inner">
                            <div class="card__face"><img src="${themeImg === 'codeVibes' ? '/project/assets/img/code_vibesBackside.svg' : themeImg === 'gaming'
                        ? '/project/assets/img/gamingThemeBackside.svg' : '/project/assets/img/da_projectsBackside.svg'}" alt="backside"></div>
                        <div class="card__face card__face--back">${element}</div>
                    </div>
                 </button>
                `;
    }
    