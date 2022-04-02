///<reference path = "SceneBase.ts" />
namespace GameScene {
    export class DomTesting extends SceneBase {
        constructor(sceneName: string) {
            super(sceneName);
        }

        testLight;

        startSwinging = false;

        preload() {
            this.load.html('menu1', 'assets/html/example1.html');

            //this.load.image('background', ['assets/sprites/testpic.png', 'assets/sprites/testpic_n.png']);
            //this.load.image('testpic', ['assets/sprites/CylanderBrickLarge.png', 'assets/sprites/CylanderBrickLarge_n.png']);
        }

        create() {
            //this.cameras.main.removeBounds();

            var element = this.add.dom(400, 600).createFromCache('menu1');
            element.setPerspective(800);

            this.tweens.add({
                targets: element,
                y: 300,
                duration: 3000,
                ease: 'Power3'
            });
        }

        update (time) {
            
        }
    }
}