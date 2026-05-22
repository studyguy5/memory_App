// import { navigateTOPage } from "./main";
import { renderGameUI } from "./renderGame";

import { checkForMatch } from "./gameLogic";
export function generateGameUI(): void {
    let wrapper = document.querySelector<HTMLDivElement>('.gameSettingsWrapper');
    if (wrapper) {
        wrapper.style.display = 'none';
        wrapper.style.opacity = '0';
        console.log('wrapper geleert')
    }
    let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
    if (game) {
        game.innerHTML = renderGameUI();
        setThemeOnRoot();
        setTimeout(() => {

            renderCards();
            let macthInterval = setInterval(() => {
                checkForMatch();
            }, 100);
        }, 300);
    };
}

let col = 0;
let globalPlayer: string = '';

export function setThemeOnRoot(): void {
    let theme = document.querySelector<HTMLDivElement>('.theme') as HTMLDivElement;
    let choosenPlayer = document.querySelector<HTMLDivElement>('.player')?.innerHTML.toLocaleLowerCase() || '';
    let size = document.querySelector<HTMLDivElement>('.size .active') as HTMLDivElement;
    let t = size.getAttribute('data-amount');
    col = Number(t);
    let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
    globalPlayer = choosenPlayer;
    rightPlayer.src = `/project/assets/icons/label_${globalPlayer}.svg`;
    document.documentElement.setAttribute('data-theme', `${theme.innerHTML}`);
    let s = size.innerHTML;
    console.log(globalPlayer, s);

}

export let rightArray: string[] = [];

function getColumns(col: number) {
    switch (col) {
        case col = 16:
            rightArray = card_16
            return 4;
        case col = 24:
            rightArray = card_24
            return 6;
        case col = 36:
            rightArray = card_36
            return 6;

        default: return 4;
    }
}
import { state } from "./gameLogic";
function setListenerPlayer() {
    const fieldRef = document.querySelectorAll('.card') as NodeListOf<HTMLButtonElement>;
    if (fieldRef) {
        fieldRef.forEach(card => {
            card.addEventListener('click', () => {
                state.once = false;
                card.classList.toggle('is-filtered');
                console.log(card.classList);
            })
        });
    };
}



// function checkForMatch() {
//     // Logik zum Überprüfen, ob die beiden aufgedeckten Karten übereinstimmen
//     let player1Points = document.querySelector(`.player1 p`)!.textContent;
//     let player2Points = document.querySelector(`.player2 p`)!.textContent;
//     let rightPlayer = document.querySelector<HTMLElement>('.currentPlayer') as HTMLElement;
//     if (player1Points && player2Points) {
//         console.log(player1Points, player2Points);

//         const open = document.querySelectorAll('.card.is-filtered:not(.matched)') as NodeListOf<HTMLButtonElement>;
//         if (open.length === 2 && !open[0].classList.contains('matched') && !open[1].classList.contains('matched')) {
//             console.log('open Array:', open);
//             const firstCard = open[0].querySelector('.card__face--back') as HTMLDivElement;
//             const secondCard = open[1].querySelector('.card__face--back') as HTMLDivElement;
//             let pair = [open[0], open[1]];
//             if (firstCard && secondCard && firstCard.innerHTML === secondCard.innerHTML) {
//                 pair.forEach(cardEl => {
//                     cardEl.classList.add('matched');
//                     const img = cardEl.querySelector('.card__face--back img') as HTMLImageElement | null;
//                     if (img) {
//                         img.classList.add('machedImg');
//                     }
//                 });
                
//                     updatePointsAndPlayer(globalPlayer, player1Points ? Number(player1Points) : 0, rightPlayer as HTMLImageElement);
//                 // } else {
//                 //     updatePoints(globalPlayer, player2Points ? Number(player2Points) : 0, rightPlayer);
//                 //     globalPlayer = 'blue';
//                 //     let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
//                 //     rightPlayer.src = `/project/assets/icons/label_${globalPlayer}.svg`;
//                 // }
//                 // if (rightPlayer.innerHTML.includes('blue')) {
//                 //     updatePoints(globalPlayer, player1Points ? Number(player1Points) : 0, rightPlayer);
//                 //     globalPlayer = 'orange';
//                 //     let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
//                 //     rightPlayer.src = `/project/assets/icons/label_${globalPlayer}.svg`;
//                 // } else {
//                 //     updatePoints(globalPlayer, player2Points ? Number(player2Points) : 0, rightPlayer);
//                 //     globalPlayer = 'blue';
//                 //     let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
//                 //     rightPlayer.src = `/project/assets/icons/label_${globalPlayer}.svg`;
//                 // }
//             } else {
//                 // Karten sind unterschiedlich
//                 setTimeout(() => {
//                     pair.forEach(pair => {
//                         pair.classList.remove('is-filtered');
//                     });
//                 }, 500);
//             }
//         }
//     }
// }




import { card_36 } from "./cardSize";
import { card_24 } from "./cardSize";
import { card_16 } from "./cardSize";

function renderCards(): void {
    let field = document.querySelector<HTMLDivElement>('.gameField') as HTMLDivElement;
    if (field) {
        let column: number = getColumns(col);
        rightArray.length == 8 || rightArray.length == 12 ? field.style.height = '498px' : field.style.height = '750px';
        field.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        for (let index = 0; index < 2; index++) {
            const shuffled: string[] = shuffle(rightArray);
            for (let i = 0; i < shuffled.length; i++) {
                const element = shuffled[i];
                field.innerHTML += /*html*/ `
                <button id="card" class="card">
                    <div class="card__inner">
                        <div class="card__face"><img src="/project/assets/img/code_vibesBackside.svg"></div>
                        <div class="card__face card__face--back">${element}</div>
                    </div>
                 </button>
                `;
            }
        }
        document.querySelectorAll<HTMLElement>('.card').forEach((card, i) => {
            card.style.animationDelay = `${i * 0.05}s`; // 50ms Abstand zwischen jeder Karte
        });
        setListenerPlayer();
    }
}

function shuffle(card_8: string[]): string[] {
    let currentIndex = card_8.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [card_8[currentIndex], card_8[randomIndex]] = [
            card_8[randomIndex], card_8[currentIndex]];
    }

    return card_8;
}

// Used like so
let arr: number[] = [2, 11, 37, 42];
// shuffle(arr);
console.log(arr);
