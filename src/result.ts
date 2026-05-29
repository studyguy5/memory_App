/**
 * @param renderResultsTemplate - function to render the results into the DOM
 * @param playerTwoWinsTemplate - function to render the case where player 2 wins into the DOM
 * @param playerOneWinsTemplate - function to render the case where player 1 wins into the DOM
 * @param itsADrawTemplate - function to render the case where its a draw into the DOM
 * @param themeImg - variable to store the choosen theme
 * @param wrapper - variable to store the results wrapper
 * @param game - variable to store the game wrapper
 */

import { renderResultsTemplate } from "./renderResult";
import { playerTwoWinsTemplate } from "./renderResult";
import { playerOneWinsTemplate} from "./renderResult";
import { itsADrawTemplate } from "./renderResult";


let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
let wrapper = document.querySelector<HTMLDivElement>('.resultsWrapper');
let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;

/**
 * @function renderResultsUI - function to render the results into the DOM
 * @function renderResultsTemplate - function who retuns the html code for the results
 * @function showWinner - function to show the winner according to the points
 * @return void
 */
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

/**
 * @function showWinner - function to show the winner according to the points
 * this function is splitted into for both cases, showing player 1 wins or player 2 wins or its a draw
 * @param player1Points - variable to store the points of player 1
 * @param player2Points - variable to store the points of player 2
 * @param themeImg - variable as parameter to store the choosen theme in select the right CSS
 * @returns void
 */
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

/**
 * @function reloadpage - function to reload the page, its simply to restart the game
 * @returns void
 */
function reloadpage(): void {
    window.location.reload();
}


/**
 * 
 * @function showPlayerOneWins - function to show the case where player 1 wins and render the html code for this case
 * and set an event listener on the play again button to reload the page
 * @param themeImg - variable as parameter to store the choosen theme in select the right CSS
 * @returns void
 */
function showPlayerOneWins(themeImg:string | null): void {
    if (wrapper) {
            wrapper.innerHTML = "";
            wrapper.innerHTML =  playerOneWinsTemplate(themeImg) 
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
}

/**
 * 
 * @function showPlayerTwoWins here player two wins, and it renders the html for this case
 * @returns void
 */
function showPlayerTwoWins(themeImg:string | null): void{
    if (wrapper) {
            wrapper.innerHTML = "";
            wrapper.innerHTML = playerTwoWinsTemplate(themeImg);
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
}

/**
 * 
 * @function showDraw here we show the case if its a draw, and render the html for it
 * @returns void
 */
function showDraw(themeImg:string | null): void{
    if (wrapper) {
            wrapper.innerHTML = itsADrawTemplate(themeImg);
            wrapper.querySelector('.playAgainBtn')?.addEventListener('click', reloadpage);
        }
}

