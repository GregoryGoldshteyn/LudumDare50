///<reference path = "SceneBase.ts" />
namespace GameScene {
    export class DiceTesting extends SceneBase {
        constructor(sceneName: string) {
            super(sceneName);
        }

        preload() {
            // Load sprites
            this.load.setPath('assets/sprites/');
            this.load.spritesheet('D7', 'D7.png', {frameWidth: 16});
            this.load.image('UIBackground', 'UIBack.png');
            this.load.image('Town', 'Town.png');
            this.load.image('5pxFont', 'Font.png',);
            this.load.image('EventBody', "Event.png");

            // Load events + messages
            this.load.setPath('assets/json/');
            this.load.json("events", "events.json");
        }

        create() {
            // Add font to cache
            //@ts-ignore
            this.cache.bitmapFont.add('5pxFont', Phaser.GameObjects.RetroFont.Parse(this, Constants.FONT_CONFIG))
            this.cameras.main.removeBounds();

            // Add the town
            var background = this.add.image(Constants.SCREEN_MIDDLE.X, Constants.SCREEN_MIDDLE.Y, 'UIBackground').setScale(4);
            var town = this.add.image(246, 244, 'Town').setScale(4);

            // Add the first die
            var testDie = new UI.Die(this, Constants.SCREEN_MIDDLE.X, Constants.SCREEN_MIDDLE.Y).setScale(4);

            // Add the news terminal
            var terminal = this.add.existing(new UI.TextTerminal(this));

            // Add event object
            var eventObj = new UI.Event(this);

            console.log(this.cache.json.get("events"));

            eventObj.setUIForEvent(this.cache.json.get("events")[0]);

            // Add draggable to dice
            testDie.setInteractive();
            this.input.setDraggable(testDie);

            this.add.existing(testDie);

            var dice = this.add.group({
                name: 'dice',
                runChildUpdate: true
            });

            dice.add(testDie);

            this.input.on('drag', function( pointer, gameObject, dragX, dragY){
                gameObject.x = dragX;
                gameObject.y = dragY;
            });

            this.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
                var intersects = Phaser.Geom.Rectangle.Overlaps(
                    gameObject.getBounds(),
                    eventObj.diceRect.getBounds()
                );

                if(intersects) {
                    var num = parseInt(eventObj.countText.text);
                    num -= gameObject.getValue();
                    eventObj.countText.setText(num.toString());
                }
                else {
                    gameObject.startRolling = true
                }
            });
        }

        update(time, delta) {
            //console.log(Math.log(time));
        }
    }
}