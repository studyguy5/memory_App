// import { navigateTOPage } from "./main";
import { renderGameUI } from "./renderGame";
// import { checkIfGameIsComplete } from "./gameLogic";
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
        let theme = document.querySelector<HTMLDivElement>('.theme') as HTMLDivElement;
        document.documentElement.setAttribute('data-theme', `${theme.innerHTML}`);
        game.innerHTML = renderGameUI();
        setThemeOnRoot();
        setTimeout(() => {
            renderCards();
        }, 300);
    };
}

let col = 0;
let globalPlayer: string = '';

export function setThemeOnRoot(): void {
    let choosenPlayer = document.querySelector<HTMLDivElement>('.player')?.innerHTML.toLocaleLowerCase() || '';
    let size = document.querySelector<HTMLDivElement>('.size .active') as HTMLDivElement;
    let t = size.getAttribute('data-amount');
    col = Number(t);
    let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayer img') as HTMLImageElement;
    globalPlayer = choosenPlayer;
    rightPlayer.src = `/project/assets/icons/label_${globalPlayer}.svg`;
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
                setTimeout(() => {
                    checkForMatch();
                }, 200);
                card.classList.toggle('is-filtered');
            })
        });
    };
}

import { card_36 } from "./cardSize";
import { card_24 } from "./cardSize";
import { card_16 } from "./cardSize";

function renderCards(): void {
    let field = document.querySelector<HTMLDivElement>('.gameField') as HTMLDivElement;
    let themeImg = document.documentElement.getAttribute('data-theme');
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
                            <div class="card__face"><img src="${themeImg === 'codeVibes' ? '/project/assets/img/code_vibesBackside.svg' : themeImg === 'gaming'
                                ? '/project/assets/img/gamingThemeBackside.svg' : '/project/assets/img/da_projectsBackside.svg'}" alt="backside"></div>
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
