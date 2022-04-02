namespace UI {
    export class TextTerminal extends Phaser.GameObjects.GameObject {
        textBox : Phaser.GameObjects.BitmapText;
        currentPhraseIndex = 0;
        currText = "                   ";
        phrases = [
            " --- THERE ONCE WAS A MAN WHO LIVED IN A SHOE",
            " --- SOMEONE POISONED THE WATERING HOLE!",
            " --- WAR! WHAT IS IT GOOD FOR?",
            " --- Sphinx of black quartz, judge my vow"
        ];

        // Number of updates needed to scroll 1 character
        updatesPerScroll = 4;
        currentUpdateCount = 0;

        constructor(scene) {
            super(scene, 'TextTerminal');
            this.textBox = scene.add.bitmapText(248, 490, "5pxFont", "                  ").setTint(Constants.COLORS.WHITE.color32).setOrigin(0.5, 0.5).setScale(4);
        }

        preUpdate() {
            if(this.currentUpdateCount >= this.updatesPerScroll){
                this.getNextTextChars();
                this.currentUpdateCount = 0;
            }
            else{
                this.currentUpdateCount += 1;
            }
        }

        getNextPhrase() {
            var r = Math.floor(Math.random() * this.phrases.length);
            while(r == this.currentPhraseIndex){
                r = Math.floor(Math.random() * this.phrases.length);
            }
            this.currentPhraseIndex = r;
            return this.phrases[r];
        }

        getNextTextChars() {
            this.currText = this.currText.slice(1);
            this.textBox.setText(this.currText.slice(0, 18).toUpperCase());

            if(this.currText.length <= 18){
                this.currText += this.getNextPhrase();
            }
        }
    }
}