import { renderGameUI } from "./renderGame";
export function generateGameUI(): void {
    let wrapper = document.querySelector<HTMLDivElement>('.gameSettingsWrapper');
    if (wrapper) {
        wrapper.innerHTML = '';
    }
    let game = document.querySelector<HTMLDivElement>('.gameUI') as HTMLDivElement;
    if (game) {
        game.innerHTML = renderGameUI();
    }
};