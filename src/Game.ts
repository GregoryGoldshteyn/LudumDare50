namespace Game {
    export class Game extends Phaser.Game {
        constructor() {
            // Init using config
            super(
                //@ts-ignore
                Constants.GAME_CONFIG
            );

            //this.scene.start(Constants.TUTORIAL_SCENE_NAME);
            this.scene.start(Constants.MAIN_MENU_SCENE_NAME);
        }
    }
}