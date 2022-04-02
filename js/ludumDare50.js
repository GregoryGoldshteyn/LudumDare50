var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game;
(function (Game_1) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = 
            // Init using config
            _super.call(this, 
            //@ts-ignore
            Constants.GAME_CONFIG) || this;
            //this.scene.start(Constants.TUTORIAL_SCENE_NAME);
            _this.scene.start(Constants.MAIN_MENU_SCENE_NAME);
            return _this;
        }
        return Game;
    }(Phaser.Game));
    Game_1.Game = Game;
})(Game || (Game = {}));
var Game;
(function (Game) {
    Game.game = null;
})(Game || (Game = {}));
function startGame() {
    var game = new Game.Game;
    Game.game = game;
}
window.onload = startGame;
// Class which serves as base for all scenes
// Contains common methods and properties for all scenes
var GameScene;
(function (GameScene) {
    var SceneBase = /** @class */ (function (_super) {
        __extends(SceneBase, _super);
        function SceneBase(sceneTitle) {
            return _super.call(this, sceneTitle) || this;
        }
        Object.defineProperty(SceneBase.prototype, "gameWidth", {
            get: function () {
                return this.sys.game.config.width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "gameHeight", {
            get: function () {
                return this.sys.game.config.height;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "optionMenuWidth", {
            get: function () {
                return this.gameWidth * 3 / 4;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "optionMenuHeight", {
            get: function () {
                return this.gameHeight * 3 / 4;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "keyChangeModalWidth", {
            get: function () {
                return this.gameWidth / 2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "keyChangeModalHeight", {
            get: function () {
                return this.gameHeight / 2;
            },
            enumerable: false,
            configurable: true
        });
        return SceneBase;
    }(Phaser.Scene));
    GameScene.SceneBase = SceneBase;
})(GameScene || (GameScene = {}));
///<reference path = "SceneBase.ts" />
var GameScene;
(function (GameScene) {
    var MainMenu = /** @class */ (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu(sceneName) {
            return _super.call(this, sceneName) || this;
        }
        MainMenu.prototype.preload = function () {
        };
        MainMenu.prototype.create = function () {
        };
        MainMenu.prototype.update = function () {
        };
        return MainMenu;
    }(GameScene.SceneBase));
    GameScene.MainMenu = MainMenu;
})(GameScene || (GameScene = {}));
var Colors;
(function (Colors) {
    Colors.R_BROWN_0 = new Phaser.Display.Color(59, 32, 39);
    Colors.R_BROWN_1 = new Phaser.Display.Color(125, 56, 51);
    Colors.R_BROWN_2 = new Phaser.Display.Color(171, 81, 48);
    Colors.ORANGE_0 = new Phaser.Display.Color(207, 117, 43);
    Colors.YELLOW_0 = new Phaser.Display.Color(240, 181, 65);
    Colors.GREEN_6 = new Phaser.Display.Color(255, 238, 131);
    Colors.GREEN_5 = new Phaser.Display.Color(200, 212, 93);
    Colors.GREEN_4 = new Phaser.Display.Color(99, 171, 63);
    Colors.GREEN_3 = new Phaser.Display.Color(59, 125, 79);
    Colors.GREEN_2 = new Phaser.Display.Color(47, 87, 83);
    Colors.GREEN_1 = new Phaser.Display.Color(40, 53, 64);
    Colors.GREEN_0 = new Phaser.Display.Color(27, 31, 33);
    Colors.BLUE_0 = new Phaser.Display.Color(43, 43, 69);
    Colors.BLUE_1 = new Phaser.Display.Color(58, 63, 94);
    Colors.BLUE_2 = new Phaser.Display.Color(76, 104, 133);
    Colors.BLUE_3 = new Phaser.Display.Color(79, 164, 184);
    Colors.BLUE_4 = new Phaser.Display.Color(146, 232, 192);
    Colors.WHITE = new Phaser.Display.Color(245, 255, 232);
    Colors.GREY_5 = new Phaser.Display.Color(223, 224, 232);
    Colors.GREY_4 = new Phaser.Display.Color(163, 167, 194);
    Colors.GREY_3 = new Phaser.Display.Color(104, 111, 153);
    Colors.GREY_2 = new Phaser.Display.Color(64, 73, 115);
    Colors.GREY_1 = new Phaser.Display.Color(44, 53, 77);
    Colors.GREY_0 = new Phaser.Display.Color(20, 24, 46);
    Colors.PURPLE_0 = new Phaser.Display.Color(75, 29, 82);
    Colors.PURPLE_1 = new Phaser.Display.Color(105, 36, 100);
    Colors.PURPLE_2 = new Phaser.Display.Color(156, 42, 112);
    Colors.PINK_0 = new Phaser.Display.Color(204, 47, 123);
    Colors.PINK_1 = new Phaser.Display.Color(255, 82, 119);
    Colors.FLESH = new Phaser.Display.Color(255, 194, 161);
    Colors.GOLD = new Phaser.Display.Color(255, 137, 51);
    Colors.ORANGE_1 = new Phaser.Display.Color(230, 69, 57);
    Colors.VIOLET_2 = new Phaser.Display.Color(173, 47, 69);
    Colors.VIOLET_1 = new Phaser.Display.Color(120, 29, 79);
    Colors.VIOLET_0 = new Phaser.Display.Color(79, 29, 76);
    Colors.BROWN_0 = new Phaser.Display.Color(41, 29, 43);
    Colors.BROWN_1 = new Phaser.Display.Color(61, 41, 54);
    Colors.BROWN_2 = new Phaser.Display.Color(82, 51, 63);
    Colors.BROWN_3 = new Phaser.Display.Color(143, 77, 87);
    Colors.BROWN_4 = new Phaser.Display.Color(189, 106, 98);
    Colors.BROWN_5 = new Phaser.Display.Color(255, 174, 112);
})(Colors || (Colors = {}));
var Constants;
(function (Constants) {
    Constants.MAIN_MENU_SCENE_NAME = 'MainMenuScene';
    Constants.LIGHT_TEST_SCENE_NAME = 'LightTestScene';
    Constants.DICE_TEST_SCENE_NAME = 'DiceTestScene';
    Constants.DOM_TEST_SCENE_NAME = 'DomTestScene';
    Constants.SCREEN_WIDTH = 960;
    Constants.SCREEN_HEIGHT = 540;
    Constants.SCREEN_MIDDLE = {
        X: Constants.SCREEN_WIDTH / 2,
        Y: Constants.SCREEN_HEIGHT / 2
    };
    Constants.COLORS = {
        DARK: new Phaser.Display.Color(27, 3, 38),
        RED: new Phaser.Display.Color(122, 28, 75),
        ORANGE: new Phaser.Display.Color(186, 80, 68),
        WHITE: new Phaser.Display.Color(239, 249, 214),
    };
    Constants.FONT_TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ";
    // The text terminal can fit at most 18 chars
    Constants.TEXT_TERMINAL_MAX_WIDTH = 18;
    Constants.FONT_CONFIG = {
        image: '5pxFont',
        width: 6,
        height: 6,
        chars: Constants.FONT_TEXT,
        charsPerRow: 4,
        spacing: { x: 0, y: 0 },
        offset: { x: 0, y: 0 },
        linespacing: 1
    };
    Constants.GAME_CONFIG = {
        type: Phaser.WEBGL,
        width: Constants.SCREEN_WIDTH,
        height: Constants.SCREEN_HEIGHT,
        parent: 'game-div',
        pixelArt: true,
        backgroundColor: Constants.COLORS.DARK,
        dom: {
            createContainer: true
        },
        fps: {
            target: 30,
            forceSetTimeOut: true
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false,
                debugShowBody: false,
                debugShowStaticBody: false
            }
        },
        scene: [GameScene.MainMenu]
    };
})(Constants || (Constants = {}));
var Util;
(function (Util) {
    function colorToHexString(c) {
        return '0x' + Phaser.Display.Color.ComponentToHex(c.red) + Phaser.Display.Color.ComponentToHex(c.green) + Phaser.Display.Color.ComponentToHex(c.blue);
    }
    Util.colorToHexString = colorToHexString;
})(Util || (Util = {}));
//# sourceMappingURL=ludumDare50.js.map