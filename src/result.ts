
let wrapper = document.querySelector<HTMLDivElement>('.resultsWrapper');
let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
export function renderResultsUI(winner: string): void {
    if (game) {
        game.style.display = 'none';
    }
    if (wrapper) {
        wrapper.innerHTML = `<div class="results">
        <img src="/project/assets/img/game_over.svg" alt="game over.svg">
        <p>Der Gewinner ist: ${winner}</p>
        <button class="playAgain">Nochmal spielen</button>
    </div>`;
    }
}