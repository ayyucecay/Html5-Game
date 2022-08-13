/** @type {import(../typings/phaser)} */

import { LevelOne } from "./scenes/LevelOne";
import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import {PlayScene} from "./scenes/PlayScene";
let game = new Phaser.Game({
    width: 800,
    height: 700,
    scene: [
        LoadScene,
        MenuScene,
        PlayScene,
        LevelOne
    ],
    backgroundColor: '#23BF8E',
    render:{
        pixelArt: true
    }
});