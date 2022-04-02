namespace UI {
    export class Event {
        eventTitle : Phaser.GameObjects.BitmapText;
        eventDescription: Phaser.GameObjects.BitmapText;
        countText: Phaser.GameObjects.BitmapText;

        diceRect: Phaser.GameObjects.Rectangle;
        eventBody : Phaser.GameObjects.Image;
        eventContainer : Phaser.GameObjects.Container;

        constructor(scene : Phaser.Scene) {
            // The background
            this.eventBody = scene.add.image(0, 0, 'EventBody').setScale(4);

            // Text of the event
            this.eventTitle = scene.add.bitmapText(-200, -198, "5pxFont", "EVENT").setScale(4).setMaxWidth(420).setTint(Constants.COLORS.ORANGE.color32);
            this.eventDescription = scene.add.bitmapText(-200, -168, "5pxFont", "SOME EXAMPLE TEXT").setScale(2).setMaxWidth(420).setTint(Constants.COLORS.WHITE.color32);

            // The dice count
            this.countText = scene.add.bitmapText(-130, 138, "5pxFont", "8").setOrigin(0.5, 0.5).setScale(16).setCenterAlign().setLetterSpacing(-2);
            this.diceRect = scene.add.rectangle(-6, 138, 120, 84, Constants.COLORS.DARK.color, 0.0).setOrigin(0.5, 0.5);
            
            this.eventContainer = scene.add.container(246, 244);

            this.eventContainer.add(this.eventBody);
            this.eventContainer.add(this.eventTitle);
            this.eventContainer.add(this.eventDescription);
            this.eventContainer.add(this.diceRect);
            this.eventContainer.add(this.countText);
        }

        setUIForEvent(event) {
            console.log(event.title);
            this.eventTitle.setText(event.title.toUpperCase());
            this.eventDescription.setText(event.description.toUpperCase());
            this.countText.setText(event.threshold.toString());
        }
    }
}