
export function renderGameUI() {
    let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
    console.log('themeImg: ', themeImg);
    return /*html*/`
    <div class="headGameInfo">
        <div class="playerInfo">
            <div class=player1>
            <img src="${themeImg === 'codeVibes' ? '/project/assets/icons/label_blue.svg' : 
                themeImg === 'gaming' ? '/project/assets/icons/mini-chess_pawnOrange.svg' : '/project/assets/icons/mini-chess_pawnOrange.svg'}">${themeImg === 'codeVibes' ? 'Blue' : themeImg === 'gaming' ? '' : themeImg === 'DA Project' ? 'DA Project' : ''}<p>0</p>
            </div>
            <div class=player2>
            <img src="${themeImg === 'codeVibes' ? '/project/assets/icons/label_orange.svg' : 
                themeImg === 'gaming' ? '/project/assets/icons/mini-chess_pawnBlue.svg' : '/project/assets/icons/mini-chess_pawnBlue.svg'}"><p>0</p>
            </div>
        </div>
        <div class="currentPlayer">Current Player:<img src="${themeImg === 'codeVibes' ? '/project/assets/icons/label_orange.svg' : 
                themeImg === 'gaming' ? '/project/assets/icons/mini-chess_pawnOrange.svg' : '/project/assets/icons/mini-chess_pawnOrange.svg'}"></div>
        <div class="exitGame">
    
        </div>
    </div>
    <div class="gameField">
    
    </div>
    </div>
    `;
}