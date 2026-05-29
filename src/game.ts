

/**
 * @param renderGameUI - imported function to render the basic game User Interface
 * @param navigateTOPage - imported function to navigate to the correct page
 * @param checkForMatch - imported function to check if a player has opened a match
 * @param cardsTemplate - imported function to render the cards
 * @param globalPlayer - variable to store the current player is here defined
 */
import { renderGameUI } from "./renderGame";
import { navigateTOPage } from "./main";
import { checkForMatch } from "./gameLogic";
import { cardsTemplate } from "./renderGame";
let globalPlayer: string = '';

/**
 * @function generateGameUI this function generates the game User Interface
 * @function hideWrapperDiv this function hides the wrapper setting div in order to show the game User Interface
 * after that
 * @function renderAndSetUpGameUI this function renders the game User Interface and sets up the event listeners
 * for the cards exit option
 * @returns void
 */
export function generateGameUI(): void {
    let wrapper = document.querySelector<HTMLDivElement>('.gameSettingsWrapper');
    globalPlayer = document.querySelector<HTMLDivElement>('.player')?.innerHTML.toUpperCase() || '';
    if (wrapper) {
        hideWrapperDiv(wrapper);
    }
    let theme = document.querySelector<HTMLDivElement>('.theme') as HTMLDivElement;
    document.documentElement.setAttribute('data-theme', `${theme.innerHTML}`);
    let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
    if (game) {
        renderAndSetUpGameUI(game);  
    };
}

/**
 * @function hideWrapperDiv this function hides the wrapper setting div in order to make place for the game User Interface
 * @param wrapper
 * @returns void 
 */
function hideWrapperDiv(wrapper: HTMLDivElement) {
    wrapper.style.display = 'none';
    wrapper.style.opacity = '0';
}

/**
 * @function renderAndSetUpGameUI this function renders the game User Interface and sets up the event listeners
 * for the cards exit option
 * @param game 
 * @returns void
 */
function renderAndSetUpGameUI(game: HTMLDivElement) {
    game.innerHTML = renderGameUI();
        document.querySelector('.yes')?.addEventListener('click', reloadpage);
        activateExitWindow();
        setThemeOnRoot();
        setTimeout(() => {
            renderCards();
        }, 300);
}

/**
 * @function reloadpage this function reloads the page
 * @returns void
 */
function reloadpage() {
    window.location.reload();
}


/**
 * @function setThemeOnRoot this function sets the theme as chosen by the user in the game User Interface
 * @param col this col variable is to decide which card set the User has chosen and set the columns accordingly
 * @returns void
 */
let col = 0;

export function setThemeOnRoot(): void {
    let themeImg: string | null = '';
    themeImg = document.documentElement.getAttribute('data-theme');
    let choosenPlayer = document.querySelector<HTMLDivElement>('.player')?.innerHTML.toLocaleLowerCase() || '';
    globalPlayer = choosenPlayer;
    let size = document.querySelector<HTMLDivElement>('.size .active') as HTMLDivElement;
    let t = size.getAttribute('data-amount');
    col = Number(t);
    let rightPlayerImg = document.querySelector<HTMLImageElement>('.currentPlayerImg') as HTMLImageElement;
    let rightPlayer = document.querySelector<HTMLImageElement>('.currentPlayerImg img') as HTMLImageElement;
    setRightPlayerIconAndBackground(themeImg, choosenPlayer, rightPlayerImg, rightPlayer);
}

/**
 * @function setRightPlayerIconAndBackground this function sets the right player icon and background in the middle of the game, top side
 * @param themeImg 
 * @param choosenPlayer 
 * @param rightPlayerImg 
 * @param rightPlayer 
 * @returns void
 */
function setRightPlayerIconAndBackground(themeImg: string | null, choosenPlayer: string, rightPlayerImg: HTMLImageElement, rightPlayer: HTMLImageElement) {
    if (rightPlayer) {
        rightPlayer.src = `${themeImg === 'codeVibes' ? `/memory_app/assets/icons/codeVibes_${choosenPlayer}.svg` :
        themeImg === 'gaming' ? `/memory_app/assets/icons/gaming_white.svg` : `/memory_app/assets/icons/gaming_white.svg`}`;
    }
    if (themeImg === 'gaming' || themeImg === 'daproject') {
        rightPlayerImg.style.background = choosenPlayer === 'blue' ? "blue" : "orange";
    }
}

/**
 * @function setGlobalPlayer this function sets the global player as value or parameter in order to use and change it in another file
 * @param value 
 * @returns { globalPlayer }
 */
export function setGlobalPlayer(value: string) {
    globalPlayer = value;
}

/**
 * @param globalPlayer here we export the variable globalPlayer
 * @param rightArray here we choose which card set the player wants, and select the right arraay to show the right data source for the cards
 */
export { globalPlayer };
export let rightArray: string[] = [];

/**
 * @function getColumns this function returns the right amount of columns for the game0
 * @param col 
 * @returns void
 */
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

/**
 * @function setListenerPlayer this function sets the event listener for the cards and opens a card after click
 * by adding the is-filtered class
 * @returns void
 */
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

/**
 * @function renderCards this function renders the cards in the game field
 * checks which array it has to render, shuffles it and renders it
 * @returns void
 */
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
                field.innerHTML += cardsTemplate(themeImg, element);
            }
        }
        document.querySelectorAll<HTMLElement>('.card').forEach((card, i) => {
            card.style.animationDelay = `${i * 0.05}s`; // 50ms Abstand zwischen jeder Karte
        });
        setListenerPlayer();
    }
}

/**
 * @function shuffle this function shuffles the array and generates a ramdom order in the memory card game
 * @param rightArray 
 * @returns { rightArray }
 */
function shuffle(rightArray: string[]): string[] {
    let currentIndex = rightArray.length;
    while (currentIndex != 0) { // While there remain elements to shuffle..
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [rightArray[currentIndex], rightArray[randomIndex]] = [
            rightArray[randomIndex], rightArray[currentIndex]];
    }
    return rightArray;
}


/**
 * @function activateExitWindow this function lets the exit window slide down if we click on exit
 * @returns void
 */
function activateExitWindow() {
    let exitBtn = document.querySelector('.exitGame') as HTMLDivElement;
    let wrapper = document.querySelector('.exitPopupWrapper') as HTMLDivElement;
    let exitWindow = document.querySelector('.exitGamePopup') as HTMLDivElement;
    if (exitBtn && exitWindow) {
        letExitWindowSlideDown(exitBtn, exitWindow, wrapper);
    }
}

/**
 * @function letExitWindowSlideDown this function lets the exit window slide down and changes the css
 * @param exitBtn 
 * @param exitWindow 
 * @param wrapper 
 * @returns void
 */
function letExitWindowSlideDown(exitBtn: HTMLDivElement, exitWindow: HTMLDivElement, wrapper: HTMLDivElement) {
    exitBtn.addEventListener('click', () => {
        wrapper.style.transition = '500ms ease-in-out';
        wrapper.style.opacity = '1';
        wrapper.style.top = '0%';
        exitWindow.style.transition = '500ms ease-in-out';
        exitWindow.style.top = '330px';
        handleClicks(exitWindow, wrapper);
    });
}

/**
 * @function handleClicks this function adds an event listener to the buttons in the exit window
 * and triggers the back to game or exit function if we click
 * @param exitWindow 
 * @param wrapper 
 * @returns void
 */
function handleClicks(exitWindow: HTMLDivElement, wrapper: HTMLDivElement) {
    let yesBtn = document.querySelector('.exitGamePopup .yes') as HTMLButtonElement;
    let noBtn = document.querySelector('.exitGamePopup .no') as HTMLButtonElement;
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            navigateTOPage('start');
        })
    }
    if (noBtn) {
        noBtn.addEventListener('click', () => {
            exitWindow.style.top = '-290px';
            wrapper.style.top = '-100%';
        })
    }
}