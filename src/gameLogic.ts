
import { rightArray } from "./game";
import {navigateTOPage} from "./main";
let globalPlayer: string = 'blue';
export const state = {once: false};
export let matchWon = false;
export let player1Points = "0";
export let player2Points = "0";
export function checkForMatch() {
    // Logik zum Überprüfen, ob die beiden aufgedeckten Karten übereinstimmen
    // console.log('is matched length: ', document.querySelectorAll('.card.is-filtered.matched').length);
    // console.log('right array length: ', rightArray.length * 2);
    setTimeout(() => {
        if(document.querySelectorAll('.card.is-filtered.matched').length === (document.querySelectorAll('.gameField .card') as NodeListOf<HTMLButtonElement>).length) {
            checkIfGameIsComplete();
        }
    }, 500);
    player1Points = document.querySelector(`.player1 p`)!.textContent;
    player2Points = document.querySelector(`.player2 p`)!.textContent;
    const currentPlayerElement = document.querySelector<HTMLElement>('.currentPlayer img')?.innerHTML.toLocaleLowerCase();
    globalPlayer = currentPlayerElement ? currentPlayerElement : globalPlayer;
   

        const open = document.querySelectorAll('.card.is-filtered:not(.matched)') as NodeListOf<HTMLButtonElement>;
        if (open.length > 1 && !open[0].classList.contains('matched') && !open[1].classList.contains('matched')) {
            const firstCard = open[0].querySelector('.card__face--back') as HTMLDivElement;
            const secondCard = open[1].querySelector('.card__face--back') as HTMLDivElement;
            let pair = [open[0], open[1]];
            if (firstCard && secondCard && firstCard.innerHTML === secondCard.innerHTML) {
                pair.forEach(cardEl => {
                    cardEl.classList.add('matched');
                    const img = cardEl.querySelector('.card__face--back img') as HTMLImageElement | null;
                    if (img) {
                        img.classList.add('machedImg');
                    }
                });
                
                   globalPlayer =  updatePointsAndPlayer(globalPlayer, player1Points ? Number(player1Points) : 0, player2Points ? Number(player2Points) : 0);
            } else {
                // Karten sind unterschiedlich
                setTimeout(() => {
                    pair.forEach(pair => {
                        pair.classList.remove('is-filtered');
                    });
                }, 500);
                if(!state.once) {
                    state.once = true;
                    globalPlayer = switchPlayer(globalPlayer);
                }
            }
        }
    }

 export  function checkIfGameIsComplete(){
        if(!matchWon)
        setTimeout(() => {
            matchWon = true;            
            navigateTOPage('result');
        }, 500);
    }
    

function switchPlayer(globalPlayer: string): string {
    
    globalPlayer = globalPlayer.toUpperCase();
    globalPlayer = globalPlayer === 'BLUE' ? 'ORANGE' : 'BLUE';
    if(globalPlayer === 'BLUE') {
        let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
        rightPlayer.src = `/project/assets/icons/label_blue.svg`;
    } else {
        let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
        rightPlayer.src = `/project/assets/icons/label_orange.svg`;
    }
    
    return globalPlayer;
}
export function updatePointsAndPlayer(globalPlayer: string, player1Points: number, player2Points: number): string{
    globalPlayer = globalPlayer.toUpperCase();
    document.querySelector(`.player1 p`)!.textContent = globalPlayer == 'BLUE' ? (player1Points + 1).toString() : document.querySelector(`.player1 p`)!.textContent;
    document.querySelector(`.player2 p`)!.textContent = globalPlayer == 'ORANGE' ? (player2Points + 1).toString() : document.querySelector(`.player2 p`)!.textContent;
    return globalPlayer;
}