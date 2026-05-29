
/**
 * @param renderSettingsPage - function to render the settings page into the DOM
 * @param generateGameUI - function to render the game UI into the DOM
 * @param renderResultsUI - function to render the results  into the DOM
 * 
 */
import './styles/main.scss';
import { renderSettingsPage } from './renderSettings';
import { generateGameUI} from './game';
import { renderResultsUI } from "./result";

/**
 * @function addEventListener - function to add an event listener to the body element and get the current page
 * this data attribut is used to navigate to the correct page
 */
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.body.getAttribute('data-page') ?? 'start';
    navigateTOPage(currentPage);
})

/**
 * @function navigateTOPage - function to navigate to the correct page by asking the current page and select according to the case
 * @function generateSettingsPage - function to render the settings page into the DOM
 * @function generateGameUI - function to render the game UI into the DOM
 * @function rnderResultsUI - function to render the results  into the DOM
 * @default generateSettingsPage this is the default case, if an Error occurs
 * @param currentPage the variable to store the data attribut on the body tag
 */
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




/**
 * @function generateSettingsPage - function to render the settings page into the DOM
 * @function setLitenerTheme - function to add an event listener to the theme buttons
 * @function setLitenerPlayer - function to add an event listener to the player buttons
 * @function setLitenerSize - function to add an event listener to the size buttons
 * @returns void
 */
function generateSettingsPage(): void {
    let setting = document.querySelector('.gameSettingsWrapper') as HTMLDivElement;
    setting.innerHTML = "";
    setting.innerHTML = renderSettingsPage();
    setLitenerTheme();
    setLitenerPlayer();
    setLitenerSize();
}


// function init2() {
//     const fieldRef = document.getElementById('card');
//     if (fieldRef) {
//         fieldRef.addEventListener('click', e => {
//             const card = (e.target as HTMLElement).closest('.card') as HTMLButtonElement;
//             if (card) {
//                 card.classList.toggle('is-filtered');
//                 console.log(card.classList);
//             }
//         })
//     }
// }

// <section id="field">
//         <button class="card">
//             <div class="card__inner">
//                 <div class="card__face"></div>
//                 <div class="card__face card__face--back"></div>
//             </div>
//         </button>
//     </section>


/**
 * @function addEventListener - function to add an event listener to the start button
 * if pressed, it slides the start content out of the screen
 */
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

/**
 * this sets the button to start the game disabled, until the theme, player and size are choosen
 */
const button2: HTMLButtonElement = document.querySelector('.startSession') as HTMLButtonElement;
if (button2) {
    button2.disabled = true;
}

/**
 * here we we wait a second and set the opacity of the layer to 1
 */
const layer: HTMLButtonElement = document.querySelector('.gameSettingsWrapper') as HTMLButtonElement;
if (layer) {
    setTimeout(() => {
        layer.style.opacity = '1';
    }, 1000);;
}


/**
 * @function setLitenerTheme - function to add an event listener to the theme buttons
 * so the User is able to choose a theme
 */
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

/**
 * @function chooseThemeSetting - function does show some additional css on each theme element
 * @param theme the choosen theme
 */
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

let vibe = false;
let playerColor = false;
let size = false;

/**
 * @function chooseCodeVibes - function does show some additional css on this specific li element
 * @function chooseGaming - function does show some additional css on this specific li element
 * @function chooseDaproject - function does show some additional css on this specific li element
 * @param theme choosen theme
 */
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

/**
 * @function setLitenerPlayer - function to add an event listener to the player buttons
 * so the User is able to choose a player color
 */
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

/**
 * @function choosePlayerSetting - function decides which player color is choosen
 * @param player player color
 * @returns void
 */
function choosePlayerSetting(player: string): void {
    if (player === 'Blue') {
        chooseBlue(player);
    }
    if (player === "Orange") {
        chooseOrange(player);
    }
}

/**
 * @function chooseBlue this function sets the css for the player blue
 * @function chooseOrange this function sets the css for the player orange
 * @returns void
 */
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

/**
 * @function setLitenerSize - function to add an event listener to the size buttons
 * so the User is able to choose a size
 * @returns void
 */
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

/**
 * @function chooseSizeSetting - function decides which carddeck is choosen
 * @param amount the carddeck the User has choosen
 */
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

/**
 * @function choose16 - this function sets the css for the 16 card deck
 * @function choose24 - this function sets the css for the 24 card deck
 * @function choose36 - this function sets the css for the 36 card deck
 * @param amount 
 */
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

/**
 * @function readyToPlayIntervall - function to check if the User is ready to play and has choosen all options
 * only if true the start button will be enabled
 * @returns void
 */
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
