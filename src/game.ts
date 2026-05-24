// import { navigateTOPage } from "./main";
import { renderGameUI } from "./renderGame";
import { navigateTOPage } from "./main";
import { checkForMatch } from "./gameLogic";
export function generateGameUI(): void {
    let wrapper = document.querySelector<HTMLDivElement>('.gameSettingsWrapper');
    if (wrapper) {
        wrapper.style.display = 'none';
        wrapper.style.opacity = '0';
        console.log('wrapper geleert')
    }
    let theme = document.querySelector<HTMLDivElement>('.theme') as HTMLDivElement;
    document.documentElement.setAttribute('data-theme', `${theme.innerHTML}`);
    let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
    if (game) {
        game.innerHTML = renderGameUI();
        activateExitWindow(); 
        setThemeOnRoot();
        setTimeout(() => {
            renderCards();
        }, 300);
    };
}

let col = 0;
let globalPlayer: string = '';

export function setThemeOnRoot(): void {
    let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
    let choosenPlayer = document.querySelector<HTMLDivElement>('.player')?.innerHTML.toLocaleLowerCase() || '';
    let size = document.querySelector<HTMLDivElement>('.size .active') as HTMLDivElement;
    let t = size.getAttribute('data-amount');
    col = Number(t);
    let rightPlayerImg = document.querySelector<HTMLImageElement>('.currentPlayerImg') as HTMLImageElement;
    let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayerImg img') as HTMLImageElement;
    globalPlayer = choosenPlayer;
    if(rightPlayer) {
        rightPlayer.src = `${themeImg === 'codeVibes' ? `/project/assets/icons/codeVibes_${choosenPlayer}.svg` : 
                themeImg === 'gaming' ? `/project/assets/icons/gaming_white.svg` : `/project/assets/icons/da_projects_${choosenPlayer}.svg`}`;
    }
    if(themeImg === 'gaming' || themeImg === 'DA Project') {
        rightPlayerImg.style.background = choosenPlayer === 'blue' ? "blue" : "orange";
    }
    let s = size.innerHTML;
    console.log(globalPlayer, s);

}

export let rightArray: string[] = [];

function getColumns(col: number): number {
    let theme = document.documentElement.getAttribute('data-theme');
    switch (col) {
        case col = 16:
            rightArray = cardThemes[theme + 'Theme'].card_16;
            return 4;
        case col = 24:
            rightArray = cardThemes[theme + 'Theme'].card_24;
            return 6;
        case col = 36:
            rightArray = cardThemes[theme + 'Theme'].card_36;
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

import { cardThemes } from "./cardSize";


function renderCards(): void {
    let themeImg = document.documentElement.getAttribute('data-theme');
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

function shuffle(rightArray: string[]): string[] {
    let currentIndex = rightArray.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [rightArray[currentIndex], rightArray[randomIndex]] = [
            rightArray[randomIndex], rightArray[currentIndex]];
    }

    return rightArray;
}

// Used like so
let arr: number[] = [2, 11, 37, 42];
// shuffle(arr);
console.log(arr);

function activateExitWindow() {
let exitBtn = document.querySelector('.exitGame') as HTMLDivElement;
let exitWindow = document.querySelector('.exitGamePopup') as HTMLDivElement;
if (exitBtn && exitWindow) {
    exitBtn.addEventListener('click', () => {
        exitWindow.style.transition = '500ms ease-in-out';
        exitWindow.style.right = '50px';
        let yesBtn = document.querySelector('.exitGamePopup .yes') as HTMLButtonElement;
        let noBtn = document.querySelector('.exitGamePopup .no') as HTMLButtonElement;
        if (yesBtn) {
            yesBtn.addEventListener('click', () => {
                navigateTOPage('start');
            })
        }
        if (noBtn) {
            noBtn.addEventListener('click', () => {
                exitWindow.style.right = '-100%';
            })
        }
    });
}
}