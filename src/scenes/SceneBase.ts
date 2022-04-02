// Class which serves as base for all scenes
// Contains common methods and properties for all scenes
namespace GameScene {
    export class SceneBase extends Phaser.Scene {

        // The previous scene that called this scene, useful for menus that lead back to other menus
        prevScene: string;

        constructor(sceneTitle: string) {
            super(sceneTitle);
        }

        public get gameWidth(): number {
            return this.sys.game.config.width as number;
        }

        public get gameHeight(): number {
            return this.sys.game.config.height as number;
        }

        public get optionMenuWidth(): number {
            return this.gameWidth * 3 / 4;
        }

        public get optionMenuHeight(): number {
            return this.gameHeight * 3 / 4;
        }

        public get keyChangeModalWidth(): number {
            return this.gameWidth / 2;
        }

        public get keyChangeModalHeight(): number {
            return this.gameHeight / 2;
        }
    }
}