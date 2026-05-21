
import { rightArray } from "./game";
let globalPlayer: string = 'blue';
export const state = {once: false};
export function checkForMatch() {
    // Logik zum Überprüfen, ob die beiden aufgedeckten Karten übereinstimmen
    console.log('is matched length: ', document.querySelectorAll('.card.is-filtered.matched').length);
    console.log('right array length: ', rightArray.length * 2);
    if(document.querySelectorAll('.card.is-filtered.matched').length === (document.querySelectorAll('gameField .card') as NodeListOf<HTMLButtonElement>).length) {
        setTimeout(() => {
            console.log('gewonnen');
            // location.reload();
        }, 500);
    }
    let player1Points = document.querySelector(`.player1 p`)!.textContent;
    let player2Points = document.querySelector(`.player2 p`)!.textContent;
    const currentPlayerElement = document.querySelector<HTMLElement>('.currentPlayer img')?.innerHTML.toLocaleLowerCase();
    globalPlayer = currentPlayerElement ? currentPlayerElement : globalPlayer;
   

        const open = document.querySelectorAll('.card.is-filtered:not(.matched)') as NodeListOf<HTMLButtonElement>;
        if (open.length === 2 && !open[0].classList.contains('matched') && !open[1].classList.contains('matched')) {
            console.log('open Array:', open);
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
                if (globalPlayer.includes('blue'))
                   globalPlayer =  updatePointsAndPlayer(globalPlayer, player1Points ? Number(player1Points) : 0);
                else
                    globalPlayer = updatePointsAndPlayer(globalPlayer, player2Points ? Number(player2Points) : 0);
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
export function updatePointsAndPlayer(globalPlayer: string, points: number): string{
    globalPlayer = globalPlayer.toUpperCase();
    document.querySelector(`.player1 p`)!.textContent = globalPlayer == 'BLUE' ? (points + 1).toString() : document.querySelector(`.player1 p`)!.textContent;
    document.querySelector(`.player2 p`)!.textContent = globalPlayer == 'ORANGE' ? (points + 1).toString() : document.querySelector(`.player2 p`)!.textContent;
    // if (globalPlayer === 'BLUE') {
    //     let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
    //     rightPlayer.src = `/project/assets/icons/label_orange.svg`;
    //     globalPlayer = 'ORANGE';
    // }else {
    //     let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
    //     rightPlayer.src = `/project/assets/icons/label_blue.svg`;
    //     globalPlayer = 'BLUE';
    // }
    return globalPlayer;
}