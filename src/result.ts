import { renderResultsTemplate } from "./renderResult";
import { playerTwoWinsTemplate } from "./renderResult";
import { playerOneWinsTemplate} from "./renderResult";
import { itsADrawTemplate } from "./renderResult";


let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
let wrapper = document.querySelector<HTMLDivElement>('.resultsWrapper');
let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
export function renderResultsUI(): void {
    if (game) {
        game.style.display = 'none';}
    if (wrapper) {
        wrapper.style.display = 'flex';
        themeImg = document.documentElement.getAttribute('data-theme');
        let player1Points = document.querySelector(`.player1 p`)!.textContent;
        let player2Points = document.querySelector(`.player2 p`)!.textContent;
        wrapper.innerHTML = renderResultsTemplate(themeImg, player1Points, player2Points); }
    setTimeout(() => {
        showWinner();
    }, 2500);
}

function showWinner(): void {
    themeImg = document.documentElement.getAttribute('data-theme');
    let player1Points = document.querySelector(`.player1 p`)!.textContent;
    let player2Points = document.querySelector(`.player2 p`)!.textContent;
    console.log('player1Points: ', player1Points, 'player2Points: ', player2Points);
    if (parseInt(player1Points) > parseInt(player2Points)) {
        showPlayerOneWins(themeImg);
    } else if (parseInt(player1Points) < parseInt(player2Points)) {
        showPlayerTwoWins(themeImg);
    } else {
        showDraw(themeImg);
    }
}

function reloadpage(): void {
    window.location.reload();
}



function showPlayerOneWins(themeImg:string | null): void {
    if (wrapper) {
            wrapper.innerHTML = "";
            wrapper.innerHTML =  playerTwoWinsTemplate(themeImg) 
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
}

function showPlayerTwoWins(themeImg:string | null): void{
    if (wrapper) {
            wrapper.innerHTML = "";
            wrapper.innerHTML = playerOneWinsTemplate(themeImg);
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
}

function showDraw(themeImg:string | null): void{
    if (wrapper) {
            wrapper.innerHTML = itsADrawTemplate(themeImg);
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
}

