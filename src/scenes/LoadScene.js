import { CST } from "../CST"
export class LoadScene extends Phaser.Scene {
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init(){

    }
    preload(){
        //road images
        this.load.image("road1","./assets/road/roadTexture_01.png")
        this.load.image("road2","./assets/road/roadTexture_02.png")
        this.load.image("road3","./assets/road/roadTexture_06.png")
        this.load.image("road4","./assets/road/roadTexture_10.png")
        this.load.image("road5","./assets/road/roadTexture_22.png")
        this.load.image("road6","./assets/road/roadTexture_29.png")
        this.load.image("road7","./assets/road/roadTexture_45.png")

        //ui images
        this.load.image("back_level_button", "./assets/ui/barsHorizontal.png");
        this.load.spritesheet("level_button","./assets/ui/red_button08.png",{
            frameHeight: 120,
            frameWidth: 120,
        });
        this.load.image("level_button_click", "./assets/ui/red_button09.png");
        //audio
        this.load.audio("menu_music","./audio/main_song.mp3");
        this.load.audio("click_music", "./audio/DefaultClick.mp3");
        this.load.audio("rotate_music", "./audio/RotateShape.mp3");
        this.load.audio("level_complete", "./audio/LevelComplete.mp3");
        
       
    
    }
    create(){
        
        this.time.addEvent({
        delay: 10,
        loop: false,
        callback: () => {
        
            this.scene.start(CST.SCENES.MENU); 
        }
    })
        
    }
}