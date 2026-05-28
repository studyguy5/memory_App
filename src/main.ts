import './styles/main.scss';
import { renderSettingsPage } from './renderSettings';
import { generateGameUI} from './game';
import { renderResultsUI } from "./result";
import { player1Points, player2Points } from "./gameLogic";
// document.getElementById('title')!.innerText = 'Hallo, ich benutze kein Module';
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.body.getAttribute('data-page') ?? 'start';
    navigateTOPage(currentPage);
})
export function navigateTOPage(currentPage: string): void {
    document.querySelector('body')!.setAttribute('data-page', currentPage);
    switch (currentPage) {
        case 'start':
            setTimeout(() => {
                generateSettingsPage();
            }, 1000); break;
        case 'game': generateGameUI(); break;
        case 'result': renderResultsUI(); break;
        default: generateSettingsPage(); break;
    }
}





function generateSettingsPage(): void {
    let setting = document.querySelector('.gameSettingsWrapper') as HTMLDivElement;
    setting.innerHTML = "";
    setting.innerHTML = renderSettingsPage();
    setLitenerTheme();
    setLitenerPlayer();
    setLitenerSize();
}


function init2() {
    const fieldRef = document.getElementById('card');
    if (fieldRef) {
        fieldRef.addEventListener('click', e => {
            const card = (e.target as HTMLElement).closest('.card') as HTMLButtonElement;
            if (card) {
                card.classList.toggle('is-filtered');
                console.log(card.classList);
            }
        })
    }
}

// <section id="field">
//         <button class="card">
//             <div class="card__inner">
//                 <div class="card__face"></div>
//                 <div class="card__face card__face--back"></div>
//             </div>
//         </button>
//     </section>


const button: HTMLButtonElement = document.querySelector('.startButton') as HTMLButtonElement;
if (button) {
    button.addEventListener('click', (el) => {
        const startContent: HTMLDivElement = document.querySelector('.startContent') as HTMLDivElement;
        if (startContent) {
            startContent.style.transition = '500ms ease-in-out';
            startContent.style.position = 'absolute';
            startContent.style.top = '0';
            setTimeout(() => {
                startContent.style.top = '-100%';
            }, 100);
        }
    })
}

const button2: HTMLButtonElement = document.querySelector('.startSession') as HTMLButtonElement;
if (button2) {
    button2.disabled = true;
}

const layer: HTMLButtonElement = document.querySelector('.gameSettingsWrapper') as HTMLButtonElement;
if (layer) {
    setTimeout(() => {
        layer.style.opacity = '1';
    }, 1000);;
}


let vibe = false;
let playerColor = false;
let size = false;

function setLitenerTheme() {
    const items = document.querySelectorAll<HTMLElement>('.themes [data-theme]');
    const image = document.querySelectorAll<HTMLElement>('.themes img');
    items.forEach((item: HTMLElement) => {
        item.addEventListener('click', () => {
            items.forEach((i: HTMLElement) => i.classList.remove('active'),
                image.forEach((i: HTMLElement) => i.style.display = "none"))
            const themeValue: string = item.getAttribute('data-theme')!;
            chooseThemeSetting(themeValue);
        });
    });
}


function chooseThemeSetting(theme: string): void {
    if (theme === 'codeVibes') {
        chooseCodeVibes(theme);
    }
    if (theme === "gaming") {
        chooseGaming(theme);
    }
    if (theme === "daproject") {
        chooseDaproject(theme);
    }
}

function chooseCodeVibes(theme:string): void {
    vibe = true;
        const yellow = document.querySelector<HTMLImageElement>(`.themes li[data-theme="${theme}"] img`) as HTMLImageElement;
        yellow.style.display = "block";
        const yellowB = document.querySelector<HTMLImageElement>(`.themes li[data-theme="${theme}"]`) as HTMLImageElement;
        yellowB.classList.add('active');
        let bar = document.querySelector<HTMLDivElement>('.settingBar .theme') as HTMLDivElement;
        bar.innerHTML = `${theme}`;
}

function chooseGaming(theme:string): void {
    vibe = true;
        const yellow = document.querySelector<HTMLImageElement>(`.themes li[data-theme="${theme}"] img`) as HTMLImageElement;
        yellow.style.display = "block";
        const yellowB = document.querySelector<HTMLImageElement>(`.themes li[data-theme="${theme}"]`) as HTMLImageElement;
        yellowB.classList.add('active');
        let bar1 = document.querySelector<HTMLDivElement>('.settingBar .theme') as HTMLDivElement;
        bar1.innerHTML = `${theme}`;
}

function chooseDaproject(theme:string): void {
    vibe = true;
        const yellow = document.querySelector<HTMLImageElement>(`.themes li[data-theme="${theme}"] img`) as HTMLImageElement;
        yellow.style.display = "block";
        const yellowB = document.querySelector<HTMLImageElement>(`.themes li[data-theme="${theme}"]`) as HTMLImageElement;
        yellowB.classList.add('active');
        let bar2 = document.querySelector<HTMLDivElement>('.settingBar .theme') as HTMLDivElement;
        bar2.innerHTML = `${theme}`;
}

function setLitenerPlayer() {
    const items = document.querySelectorAll<HTMLElement>('.choose [data-player]');
    const image = document.querySelectorAll<HTMLElement>('.choose img');
    items.forEach((item: HTMLElement) => {
        item.addEventListener('click', () => {
            items.forEach((i: HTMLElement) => i.classList.remove('active'),
                image.forEach((i: HTMLElement) => i.style.display = "none"));
            const playerValue: string = item.getAttribute('data-player')!;
            choosePlayerSetting(playerValue);
        });
    });
}

function choosePlayerSetting(player: string): void {
    if (player === 'Blue') {
        chooseBlue(player);
    }
    if (player === "Orange") {
        chooseOrange(player);
    }
}

function chooseBlue(player:string): void {
    playerColor = true;
        const yellow = document.querySelector<HTMLImageElement>(`.choose li[data-player="${player}"] img`) as HTMLImageElement;
        yellow.style.display = "block";
        const yellowB = document.querySelector<HTMLImageElement>(`.choose li[data-player="${player}"]`) as HTMLImageElement;
        yellowB.classList.add('active');
        let bar = document.querySelector<HTMLDivElement>('.settingBar .player') as HTMLDivElement;
        bar.innerHTML = `${player}`;
}

function chooseOrange(player:string): void {
    playerColor = true;
        const yellow = document.querySelector<HTMLImageElement>(`.choose li[data-player="${player}"] img`) as HTMLImageElement;
        yellow.style.display = "block";
        const yellowB = document.querySelector<HTMLImageElement>(`.choose li[data-player="${player}"]`) as HTMLImageElement;
        yellowB.classList.add('active');
        let bar = document.querySelector<HTMLDivElement>('.settingBar .player') as HTMLDivElement;
        bar.innerHTML = `${player}`;
}

function setLitenerSize() {
    const items = document.querySelectorAll<HTMLElement>('.size [data-amount]');
    const image = document.querySelectorAll<HTMLElement>('.size img');
    items.forEach((item: HTMLElement) => {
        item.addEventListener('click', () => {
            items.forEach((i: HTMLElement) => i.classList.remove('active'),
                image.forEach((i: HTMLElement) => i.style.display = "none"));
            const sizeValue: string = item.getAttribute('data-amount')!;
            chooseSizeSetting(sizeValue);
        });
    });
}

function chooseSizeSetting(amount: string): void {
    if (amount === '16') {
        choose16(amount);
    }
    if (amount === "24") {
        choose24(amount);
    }
    if (amount === "36") {
        choose36(amount);
    }
}

function choose16(amount:string): void {
    size = true;
        const yellow = document.querySelector<HTMLImageElement>(`.size li[data-amount="${amount}"] img`) as HTMLImageElement;
        yellow.style.display = "block";
        const yellowB = document.querySelector<HTMLImageElement>(`.size li[data-amount="${amount}"]`) as HTMLImageElement;
        yellowB.classList.add('active');
        let bar = document.querySelector<HTMLDivElement>('.settingBar .size') as HTMLDivElement;
        bar.innerHTML = `${amount}`;
}

function choose24(amount:string): void {
    size = true;
        const yellow = document.querySelector<HTMLImageElement>(`.size li[data-amount="${amount}"] img`) as HTMLImageElement;
        yellow.style.display = "block";
        const yellowB = document.querySelector<HTMLImageElement>(`.size li[data-amount="${amount}"]`) as HTMLImageElement;
        yellowB.classList.add('active');
        let bar = document.querySelector<HTMLDivElement>('.settingBar .size') as HTMLDivElement;
        bar.innerHTML = `${amount}`;
}

function choose36(amount:string): void {
    size = true;
        const yellow = document.querySelector<HTMLImageElement>(`.size li[data-amount="${amount}"] img`) as HTMLImageElement;
        yellow.style.display = "block";
        const yellowB = document.querySelector<HTMLImageElement>(`.size li[data-amount="${amount}"]`) as HTMLImageElement;
        yellowB.classList.add('active');
        let bar = document.querySelector<HTMLDivElement>('.settingBar .size') as HTMLDivElement;
        bar.innerHTML = `${amount}`;
}

let readyToPlayIntervall = setInterval(() => {
    if (vibe && playerColor && size) {
        clearInterval(readyToPlayIntervall);
        const button2: HTMLButtonElement = document.querySelector('.startSession') as HTMLButtonElement;
        if (button2) {
            button2.disabled = false;
            if (button2.disabled === false) {
                button2.addEventListener('click', () => navigateTOPage('game'));
            }
        }
    }
}, 100);
