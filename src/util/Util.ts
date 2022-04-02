namespace Util {
    export function colorToHexString(c: Phaser.Display.Color){
        return '0x' + Phaser.Display.Color.ComponentToHex(c.red) + Phaser.Display.Color.ComponentToHex(c.green) + Phaser.Display.Color.ComponentToHex(c.blue);
    }
}