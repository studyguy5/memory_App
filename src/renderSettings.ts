
/**
 * 
 * @returns the template Literal for the settings page to select options for the game
 * @retuns html
 */
export function renderSettingsPage(){
    return /*html*/`
    <div class="gameSettingsContent">
            <h2 class="SettingHeadline">Settings</h2>
            <img src="/memory_app/assets/icons/yellow_underline.svg">
            <div class="settingsAria">
                <div class="settingLeft">

                    <p class="themesHeadline">Game themes<img src="/memory_app/assets/icons/themes_icon.svg"></p>
                    <ul class="themes">
                        <li data-theme="codeVibes">code vibes <img src="/memory_app/assets/icons/yellow_choosen.svg"></li>
                        <li data-theme="gaming">gaming theme<img src="/memory_app/assets/icons/yellow_choosen.svg"></li>
                        <li data-theme="daproject">Da Projects theme<img src="/memory_app/assets/icons/yellow_choosen.svg"></li>
                    </ul>
                    <p class="chooseHeadline">choose Player<img src="/memory_app/assets/icons/chess_icon.svg"></p>
                    <ul class="choose">
                        <li data-player="Blue">Blue <img src="/memory_app/assets/icons/yellow_choosen.svg"></li>
                        <li data-player="Orange">Orange <img src="/memory_app/assets/icons/yellow_choosen.svg"></li>
                    </ul>
                    <p class="BoardHeadline">Board size<img src="/memory_app/assets/icons/card_icon.svg"></p>
                    <ul class="size">
                        <li data-amount="16">16 Cards <img src="/memory_app/assets/icons/yellow_choosen.svg"></li>
                        <li data-amount="24">24 Cards <img src="/memory_app/assets/icons/yellow_choosen.svg"></li>
                        <li data-amount="36">36 Cards <img src="/memory_app/assets/icons/yellow_choosen.svg"></li>
                    </ul>
                </div>
                <div class="settingRight">
                    <div class="themeImg"><img src="/memory_app/assets/icons/code_vibeImg.svg"></div>
                    <div class="settingBar">
                        <p class="theme">game theme</p>
                        <img src="/memory_app/assets/icons/yellow_line.svg" alt="seperator">
                        <p class="player">choose player</p>
                        <img src="/memory_app/assets/icons/yellow_line.svg" alt="seperator">
                        <p class="size">card deck</p>
                        <button  disabled = "true" class="startSession">
                        <img src="/memory_app/assets/icons/play_icon.svg"><p>Start</p></button>
                    </div>
                </div>
            </div>
        </div>
    `
}