// import { navigateTOPage } from "./main";
import { renderGameUI } from "./renderGame";
export function generateGameUI(): void {
    let wrapper = document.querySelector<HTMLDivElement>('.gameSettingsWrapper');
    if (wrapper) {
        wrapper.style.display = 'none';
        console.log('wrapper geleert')
    }
    let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
    if (game) {
        game.innerHTML = renderGameUI();
        setThemeOnRoot();
        renderCards();
        if (wrapper)
            document.remmoveEventListener();
            // wrapper.innerHTML = '';
    }
};


let col = 0;

export function setThemeOnRoot(): void {
    let theme = document.querySelector<HTMLDivElement>('.theme') as HTMLDivElement;
    let player = document.querySelector<HTMLDivElement>('.player') as HTMLDivElement;
    let size = document.querySelector<HTMLDivElement>('.size .active') as HTMLDivElement;
    let t = size.getAttribute('data-amount');
    col = Number(t);


    //    getColumns(t);

    console.log('themeEl:', theme);   // null oder das Element?
    console.log('playerEl:', player);
    console.log('sizeEl:', size);

    document.documentElement.setAttribute('data-theme', `${theme.innerHTML}`);

    let p = player.innerHTML;
    let s = size.innerHTML;
    console.log(p, s);

}

let rightArray: string[] = [];

function getColumns(col: number) {
    switch (col) {
        case col = 16:
           rightArray = card_16
            return 4; 
        case col = 24:
            rightArray = card_24
            return 6;
        case col = 36:
            return 6;

        default: return 4;
    }
}


// import { card_36 } from "./cardSize";
import { card_24 } from "./cardSize";
import { card_16 } from "./cardSize";
function renderCards(): void {
    let field = document.querySelector<HTMLDivElement>('.gameField') as HTMLDivElement;
    if (field) {
        let column: number = getColumns(col);
        field.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        for (let index = 0; index < 2; index++) {
            const shuffled: string[] = shuffle(rightArray);
            for (let i = 0; i < shuffled.length; i++) {
                const element = shuffled[i];
                field.innerHTML += `
                <div class="card">
                ${element}
                </div>
                `;
            }
        }
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