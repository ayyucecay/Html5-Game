import { delay } from "q";
import { CST } from "../CST"
//text style game name
var tconfig = {
    style: {
      fontSize: '94px',
      fontFamily: 'myFirstFont',
    }
  };
//text style play button
var playButtonText = {
    style: {
      
      fontFamily: 'playFont',
      fontSize: '64px',
    }
  };
//variable definition
let noti_txt1; 
let noti_txt2;  

export class MenuScene extends Phaser.Scene {
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }
    
    create(){
        //create audio
        this.sound.pauseOnBlur = false;

        this.sound.play("menu_music", {
            loop:true
        })
        
        let noti_bg = this.add.rectangle(this.game.renderer.width/2, this.game.renderer.height/4);
        noti_txt1 = this.add.text(-10,this.game.renderer.height/7,"ROAD",tconfig.style)
        noti_txt2 = this.add.text(600,this.game.renderer.height/3,"CONNECT",tconfig.style)


        this.time.addEvent({
          delay: 1000,
          loop: false,
          callback: () => {
            let play_Text = this.add.text(0,0,"PLAY", playButtonText.style)

            Phaser.Display.Align.To.BottomCenter(play_Text, noti_bg, 0, this.game.renderer.height/2.5);

            play_Text.setInteractive();

            play_Text.on("pointerup", ()=> {
              this.time.addEvent({
                delay: 300,
                loop: false,
                callback: () => {
                  this.scene.start(CST.SCENES.PLAY);
                }
              })   
            })
          }
        })
        this.time.addEvent({
          delay: 300,
          loop: false,
          callback: () => {
            var tween = this.tweens.add({
              targets: noti_txt1,
              x: this.game.renderer.width/3,
              ease: 'Power1',
              duration: 1000,
              repeat: 0,
              onStart: function () { },
              onComplete: function () { },
          });
          }
        })
        this.time.addEvent({
          delay: 300,
          loop: false,
          callback: () => {
            var tween = this.tweens.add({
              targets: noti_txt2,
              x: this.game.renderer.width/4.6,
              ease: 'Power1',
              duration: 1000,
              repeat: 0,
              onStart: function () { },
              onComplete: function () { },
          });
          }
        })
        
    }
    
}