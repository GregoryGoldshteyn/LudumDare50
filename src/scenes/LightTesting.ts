///<reference path = "SceneBase.ts" />
namespace GameScene {
    export class LightTesting extends SceneBase {
        constructor(sceneName: string) {
            super(sceneName);
        }

        testLight;

        startSwinging = false;

        preload() {
            //this.load.image('testpic', ['assets/sprites/testpic.png', 'assets/sprites/testpic_n.png'])
            //this.load.image('testpic', ['assets/sprites/Cylander-Large.png', 'assets/sprites/Cylander-Large-n.png'])
            this.load.image('testpic', ['assets/sprites/CylanderBrickLarge.png', 'assets/sprites/CylanderBrickLarge_n.png'])
        }

        create() {
            this.cameras.main.removeBounds();
            var testpic = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'testpic').setPipeline('Light2D').setScale(2);

            //@ts-ignore
            this.renderer.pipelines.addPostPipeline('PixelPalettePipeline', Pipelines.PixelatedFX);
            
            this.lights.enable();
            this.lights.setAmbientColor(0x999999);

            this.testLight = this.lights.addLight(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2 + 100, 200, 0xFF9922, 4);

            this.cameras.main.setPostPipeline('PixelPalettePipeline');
        }

        update (time) {
            if(this.startSwinging) {
                this.testLight.x += 3 * Math.cos(time / 1000);
                this.testLight.y += 3 * Math.sin(time / 1000);
            }
            else{
                if (Math.cos(time / 1000) > 0.95 || Math.cos(time / 1000) < -0.95){
                    this.startSwinging = true;
                }
            }
        }
    }
}