
export function renderGameUI() {
    return /*html*/`
    <div class="headGameInfo">
    <div class="playerInfo">
        <div class=player1>
            <img src="/project/assets/icons/label_arrow.svg">Blue<p>0</p>
        </div>
        <div class=player2>
            <img src="/project/assets/icons/labelOrange.svg">Orange<p>0</p>
        </div>
    </div>
    <div class="currentPlayer">Current Player:<img src="/project/assets/icons/label_arrow.svg"></div>
    <div class="exitGame"><img src="/project/assets/img/exitButtonDefault.svg"></div>
    </div>
    `;
}