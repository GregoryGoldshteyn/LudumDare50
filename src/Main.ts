namespace Game {
    export let game: Phaser.Game = null;
}

function startGame(): void {
    let game = new Game.Game;
    Game.game = game;
}

window.onload = startGame;