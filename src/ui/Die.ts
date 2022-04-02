namespace UI {
    export class Die extends Phaser.GameObjects.Sprite {
        startRolling = false;
        isRolling = false;
        startTime = 0;
        currThreshold = 0;
        thresholds = [];
        accum = 0;
        currframe = 0;

        constructor(scene, x, y) {
            super(scene, x, y, 'D7');
            this.generateThresholds();
            this.currThreshold = this.thresholds.length;

            //this.on('dragend', this.onDragend);
        }

        onDragend() {
            this.startRolling = true;
        }

        update(time, delta){
            if(this.startRolling)
            {
                this.startTime = time;
                this.currThreshold = 0;
                this.startRolling = false;
            }
            if(this.currThreshold < this.thresholds.length){
                var nextThreshold = this.getNextThreshold(time - this.startTime)
                if (nextThreshold > this.currThreshold){
                    this.currThreshold = nextThreshold;
                    this.rollToNext();
                }
            }
        }

        getValue(){
            return 7 - this.currframe;
        }

        rollToNext(){
            this.currframe = (this.currframe + Math.ceil(Math.random() * 6)) % 7;
            this.setFrame(this.currframe);
        }

        getNextThreshold(timePassed){
            for(var i = 0; i < this.thresholds.length; i += 1)
            {
                if(this.thresholds[i] > timePassed){
                    return i
                }
            }

            return this.thresholds.length;
        }

        generateThresholds(){
            var num = 2;
            var top = 2 ** 10;
            for( var i = 2, j = 1; i <= 2 ** 10; i = 2 ** j, j += 0.5){
                this.thresholds.push(i);
            }
        }
    }
}