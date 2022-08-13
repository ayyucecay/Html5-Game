import { CST } from "../CST"
var levelText = {
    style: {
      fontSize: '44px',
      fontFamily: 'playFont'
    }
  };
var level = {
    style: {
      fontSize: '24px',
      fontFamily: 'playFont'
    }
  };
const buttons = [];
var columns = 4;
  // rows of thumbnails in each page
var rows = 1;
var spacing = 20;
var thumbWidth = 90;
// thumbnail height, in pizels
var thumbHeight = 90;

export class PlayScene extends Phaser.Scene {
    constructor(){
        super({
            key: CST.SCENES.PLAY
        })
    }

    create(){

        var rowLength = thumbWidth * columns + spacing * (columns - 1);
        var colHeight = thumbHeight * columns + spacing * (columns - 1);
        var topMargin = (this.game.renderer.width - colHeight) / 2;
        let level_select = this.add.text(0,0,"LEVEL SELECT",levelText.style).setDepth(1);
        let level_bg = this.add.rectangle(this.game.renderer.width/2, this.game.renderer.height/6, this.game.renderer.width-200, this.game.renderer.height+1000, 0xffffff, .2).setDepth(0);
  
        Phaser.Display.Align.In.Center(level_select, level_bg);
        for(var i = 0; i < columns; i++){
            for(var j = 0; j < rows; j++){
                let image = this.add.image(this.game.renderer.width/3 + i * (thumbWidth), topMargin + j * (thumbHeight + spacing), "level_button");
                console.log("image",);
                let button = this.add.text(this.game.renderer.width/3 -7 + i * (thumbWidth), topMargin-10 + j * (thumbHeight + spacing), i+1,level.style)
                button.setName(i+1) 
                buttons.push(button);
                button.setInteractive();
                button.on("pointerup", ()=> {
                  image.setTexture("level_button_click")
                  this.sound.pauseOnBlur = false;
                  this.sound.play("click_music", {
                      loop:false
                  })
                  this.time.addEvent({
                    delay: 100,
                    loop: false,
                    callback: () => {
                      this.scene.start(CST.SCENES.LEVELONE, button);
                    }
                })  
                })      
            }
        }
        

    }
    
}