

import {navigateTOPage} from "./main";
export const state = {once: false};
export let matchWon = false;
export let player1Points = "0";
export let player2Points = "0";
import { globalPlayer, setGlobalPlayer } from "./game";
export function checkForMatch() {
    setTimeout(() => {
        if(document.querySelectorAll('.card.is-filtered.matched').length === (document.querySelectorAll('.gameField .card') as NodeListOf<HTMLButtonElement>).length) {
            checkIfGameIsComplete();}
    }, 500);
    player1Points = document.querySelector(`.player1 p`)!.textContent;
    player2Points = document.querySelector(`.player2 p`)!.textContent;
        const open = document.querySelectorAll('.card.is-filtered:not(.matched)') as NodeListOf<HTMLButtonElement>;
        if (open.length > 1 && !open[0].classList.contains('matched') && !open[1].classList.contains('matched')) {
            handleTwoCards(open, player1Points, player2Points);
            }
        }


    function handleTwoCards(open: NodeListOf<HTMLButtonElement>, player1Points:string, player2Points:string) {
        const firstCard = open[0].querySelector('.card__face--back') as HTMLDivElement;
            const secondCard = open[1].querySelector('.card__face--back') as HTMLDivElement;
            const pair: HTMLButtonElement[] = [open[0], open[1]];
            if (firstCard && secondCard && firstCard.innerHTML === secondCard.innerHTML) {
                highlightPair(pair, player1Points, player2Points);
            } else {
                closeTwoDiffrentCards(pair);
                }
    }
    

    function highlightPair(pair: HTMLButtonElement[], player1Points:string, player2Points:string){
        pair.forEach(cardEl => {
                    cardEl.classList.add('matched');
                    const img = cardEl.querySelector('.card__face--back img') as HTMLImageElement | null;
                    if (img) {
                        img.classList.add('machedImg');
                    }
                });
                   setGlobalPlayer(updatePointsAndPlayer(globalPlayer, player1Points ? Number(player1Points) : 0, player2Points ? Number(player2Points) : 0));
    }

    function closeTwoDiffrentCards(pair: HTMLButtonElement[]) {
        setTimeout(() => {
                    pair.forEach(pair => {
                        pair.classList.remove('is-filtered');
                    });
                }, 500);
                    setGlobalPlayer(switchPlayer(globalPlayer));
    }


 export  function checkIfGameIsComplete(){
        if(!matchWon)
        setTimeout(() => {
            matchWon = true;            
            navigateTOPage('result');
        }, 500);
    }
    

function switchPlayer(globalPlayer: string): string {
    let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
    globalPlayer = globalPlayer.toUpperCase();
    globalPlayer = globalPlayer === 'BLUE' ? 'ORANGE' : 'BLUE';
    let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
    let rightPlayerImg = document.querySelector<HTMLImageElement>('.currentPlayerImg') as HTMLImageElement;
    if(globalPlayer === 'ORANGE') {
        setImageForOrangePlayer(themeImg, rightPlayerImg, rightPlayer);
    } else {
        setImageForBluePlayer(themeImg, rightPlayerImg, rightPlayer);
    }
    return globalPlayer;
}

function setImageForOrangePlayer(themeImg:string| null, rightPlayerImg:HTMLImageElement | null, rightPlayer:HTMLImageElement | null) {
    if(rightPlayer)
    rightPlayer.src = `${themeImg === 'codeVibes' ? '/project/assets/icons/codeVibes_orange.svg' : '/project/assets/icons/gaming_white.svg'}`;
        if(themeImg === 'gaming' || themeImg === 'daproject') {
            if(rightPlayerImg)
        rightPlayerImg.style.background = "orange"
        }
}

function setImageForBluePlayer(themeImg:string| null, rightPlayerImg:HTMLImageElement | null, rightPlayer:HTMLImageElement | null) {
    if(rightPlayer)
    rightPlayer.src = `${themeImg === 'codeVibes' ? '/project/assets/icons/codeVibes_blue.svg' : '/project/assets/icons/gaming_white.svg'}`;
        if(themeImg === 'gaming' || themeImg === 'daproject') {
            if(rightPlayerImg)
        rightPlayerImg.style.background = "blue"
        }
}

export function updatePointsAndPlayer(globalPlayer: string, player1Points: number, player2Points: number): string{
    globalPlayer = globalPlayer.toUpperCase();
    let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
    if(themeImg === 'gaming' || themeImg === 'daproject') {
    document.querySelector(`.player2 p`)!.textContent = globalPlayer == 'BLUE' ? (player2Points + 1).toString() : document.querySelector(`.player2 p`)!.textContent;
    document.querySelector(`.player1 p`)!.textContent = globalPlayer == 'ORANGE' ? (player1Points + 1).toString() : document.querySelector(`.player1 p`)!.textContent;
    return globalPlayer;
    }else{
    document.querySelector(`.player1 p`)!.textContent = globalPlayer == 'BLUE' ? (player1Points + 1).toString() : document.querySelector(`.player1 p`)!.textContent;
    document.querySelector(`.player2 p`)!.textContent = globalPlayer == 'ORANGE' ? (player2Points + 1).toString() : document.querySelector(`.player2 p`)!.textContent;
    return globalPlayer;
    }
}