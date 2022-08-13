import { CST } from "../CST"
let levelText = {
    style: {
      fontSize: '44px',
      fontFamily: 'playFont',
    }
  };

//variable definition
let roadOne
let roadTwo
let roadThree
let roadFour
let roadFive
let roadSix
let roadSeven
let roadEight
let roadNine
let roadTen
let roadEleven
let road12
let road13
let road14

export class LevelOne extends Phaser.Scene {
    constructor(){
        super({
            key: CST.SCENES.LEVELONE
        })
    }

    create(data){
        
        let level_bg = this.add.rectangle(this.game.renderer.width/2, this.game.renderer.height/6);

        let level_select = this.add.text(-200,this.game.renderer.height/6.9,`LEVEL ${data.name}`,levelText.style)

        this.time.addEvent({
            delay: 300,
            loop: false,
            callback: () => {
                var tween = this.tweens.add({
                    targets: level_select,
                    x: this.game.renderer.width/2.5,
                    ease: 'Power1',
                    duration: 600,
                    repeat: 0,
                    onStart: function () { },
                    onComplete: function () { },
                });
            }
          })
        let back_level_page = this.add.image(0,0,"back_level_button");
        Phaser.Display.Align.In.BottomCenter(back_level_page, level_bg, 0, this.game.renderer.width/1.6);

        back_level_page.setInteractive();

        back_level_page.on("pointerup", ()=> {
            this.scene.start(CST.SCENES.PLAY);
            
        })
//level 1
        if(data.name === 1) {
            //road 1
            roadOne = this.add.sprite(this.game.renderer.width/2.2,this.game.renderer.width/8.8*(0+1)+100,"road2");
            roadOne.setScale(0.7)
            roadOne.setAngle(90*(0+1));
            roadOne.inputEnabled = true;
            roadOne.setInteractive();
            this.registry.set('roadOne', roadOne.angle)
            roadOne.on('pointerup', ()=>{
                roadOne.setAngle(roadOne.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadOne', roadOne.angle)    
            }); 
            //road 2
            roadTwo = this.add.sprite(this.game.renderer.width/2.2,this.game.renderer.width/8.8*(1+1)+100,"road2");
            roadTwo.setScale(0.7)
            roadTwo.setAngle(90*(1+1));
            roadTwo.inputEnabled = true;
            roadTwo.setInteractive();
            this.registry.set('roadTwo', roadTwo.angle)
            roadTwo.on('pointerup', ()=>{
                roadTwo.setAngle(roadTwo.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadOne', roadTwo.angle)    
            }); 
            //road 3        
            roadThree = this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/8.8*(0+1)+100,"road2");
            roadThree.setScale(0.7)
            roadThree.setAngle(-90*(0)); 
            roadThree.setInteractive();
            this.registry.set('roadThree', roadThree.angle)
            roadThree.on("pointerup", ()=> {
                roadThree.setAngle(roadThree.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadThree', roadThree.angle)   
            })
            //road 4
            roadFour = this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/8.8*(1+1)+100,"road2");
            roadFour.setScale(0.7)
            roadFour.setAngle(-90*(1)); 
            roadFour.setInteractive();
            this.registry.set('roadFour', roadFour.angle)
            roadFour.on("pointerup", ()=> {
                roadFour.setAngle(roadFour.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadFour', roadFour.angle)   
            })
            //update road angle 
            this.events.on('update', ()=> {
                //check all the angles are true
                if( roadOne.angle === 0 && roadTwo.angle === -90 && roadThree.angle === 90 && roadFour.angle === -180 ){
                    var destroyLevelName = this.tweens.add({
                        targets: level_select,
                        x: -1000,
                        ease: 'Power1',
                        duration: 1500,
                        repeat: 0,
                        onStart: function () { },
                        onComplete: function () { },
                    });
                    this.time.addEvent({
                        delay: 500,
                        loop: false,
                        callback: () => {
                            this.sound.pauseOnBlur = false;
                                    this.sound.play("level_complete", {
                                        loop:false
                                    })
                            var tween = this.tweens.add({
                                targets: [roadOne,roadTwo,roadThree,roadFour],
                                angle: { value: 360, duration: 2000 },
                                scaleX: { value: 0, duration: 30, yoyo: true, ease: 'Quad.easeInOut' },
                                scaleY: { value: 0, duration: 30, yoyo: true, ease: 'Quad.easeInOut' },
                                repeat: -1,
                            });
                            this.time.addEvent({
                                delay: 200,
                                loop: false,
                                callback: () => {
                                    this.scene.start(CST.SCENES.LEVELONE, data.setName(2)); 
                                }
                            })
                             
                        }
                    })
                    
                }
            })  
        }
//level 2
        if(data.name === 2) {
            //road 1
            roadOne= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/8.8*(0+1)+100,"road2");
            roadOne.setScale(0.7)
            roadOne.setAngle(90*(0+1));
            roadOne.setInteractive();
            this.registry.set('roadOne', roadOne.angle)
            roadOne.on("pointerup", ()=> {
                roadOne.setAngle(roadOne.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadOne', roadOne.angle) 
            })
            //road 2
            roadTwo= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/8.8*(1+1)+100,"road2");
            roadTwo.setScale(0.7)
            roadTwo.setAngle(90*(1+1));
            roadTwo.setInteractive();
            this.registry.set('roadTwo', roadTwo.angle)
            roadTwo.on("pointerup", ()=> {
                roadTwo.setAngle(roadTwo.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadTwo', roadTwo.angle) 
            })
            //road 3    
            roadThree = this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/8.8*(0+1)+100,"road7");
            roadThree.setScale(0.7)
            roadThree.setAngle(90)
            roadThree.setInteractive();
            this.registry.set('roadThree', roadThree.angle)
            roadThree.on("pointerup", ()=> {
                roadThree.setAngle(roadThree.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadThree', roadThree.angle) 
            })
            //road 4
            roadFour= this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/8.8*(1+1)+100,"road3");
            roadFour.setScale(0.7)
            roadFour.setAngle(270)
            roadFour.setInteractive();
            this.registry.set('roadFour', roadFour.angle)
            roadFour.on("pointerup", ()=> {
                roadFour.setAngle(roadFour.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadFour', roadFour.angle) 
            })
            //road 5
            roadFive= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/2.2,"road7");
            roadFive.setScale(0.7)
            roadFive.setInteractive();
            this.registry.set('roadFive', roadFive.angle)
            roadFive.on("pointerup", ()=> {
                roadFive.setAngle(roadFive.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadFive', roadFive.angle) 
            })
            //road 6
            roadSix= this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/2.2,"road3");
            roadSix.setScale(0.7)
            roadSix.setAngle(90)
            roadSix.setInteractive();
            this.registry.set('roadSix', roadSix.angle)
            roadSix.on("pointerup", ()=> {
                roadSix.setAngle(roadSix.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
                this.registry.set('roadSix', roadSix.angle) 
            })
            //change road angle
            this.events.on('update', ()=> {
                //check level 2 all the angles are true
                if( roadOne.angle === 0 && roadTwo.angle === -90 && roadThree.angle === -180 && roadFour.angle === 90 && roadFive.angle === 0 && roadSix.angle === -180 ){
                    var destroyLevelName = this.tweens.add({
                        targets: level_select,
                        x: -1000,
                        ease: 'Power1',
                        duration: 1500,
                        repeat: 0,
                        onStart: function () { },
                        onComplete: function () { },
                    });
                    this.time.addEvent({
                        delay: 500,
                        loop: false,
                        callback: () => {
                            this.sound.pauseOnBlur = false;
                                    this.sound.play("level_complete", {
                                        loop:false
                                    })
                            var tween = this.tweens.add({
                                targets: [roadOne,roadTwo,roadThree,roadFour,roadFive,roadSix],
                                angle: { value: 360, duration: 2000 },
                                scaleX: { value: 0, duration: 30, yoyo: true, ease: 'Quad.easeInOut' },
                                scaleY: { value: 0, duration: 30, yoyo: true, ease: 'Quad.easeInOut' },
                                repeat: -1,
                            });
                            this.time.addEvent({
                                delay: 500,
                                loop: false,
                                callback: () => {
                                    this.scene.start(CST.SCENES.LEVELONE, data.setName(3)); 
                                }
                            })
                             
                        }
                    })
                }
            }) 
        }
//level 3
        if(data.name === 3) {
            //road 1
            roadOne= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/8.8*(0+1)+100,"road2");
            roadOne.setScale(0.7)
            roadOne.setInteractive();
            this.registry.set('roadOne', roadOne.angle);
            roadOne.on("pointerup", ()=> {
                this.registry.set('roadOne', roadOne.angle)
                roadOne.setAngle(roadOne.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road 2
            roadTwo= this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/8.8*(0+1)+100,"road2");
            roadTwo.setScale(0.7)
            roadTwo.setAngle(180)
            roadTwo.setInteractive();
            this.registry.set('roadTwo', roadTwo.angle)
            roadTwo.on("pointerup", ()=> {
                this.registry.set('roadTwo', roadTwo.angle)
                roadTwo.setAngle(roadTwo.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road 3
            roadThree= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/8.8*(1+1)+100,"road2");
            roadThree.setScale(0.7)
            roadThree.setAngle(180)
            roadThree.setInteractive();
            this.registry.set('roadThree', roadThree.angle)
            roadThree.on("pointerup", ()=> {
                this.registry.set('roadThree', roadThree.angle)
                roadThree.setAngle(roadThree.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road 4
            roadFour= this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/8.8*(1+1)+100,"road1");
            roadFour.setScale(0.7)
            roadFour.setAngle(90)
            roadFour.setInteractive();
            this.registry.set('roadFour', roadFour.angle)
            roadFour.on("pointerup", ()=> {
                this.registry.set('roadFour', roadFour.angle)
                roadFour.setAngle(roadFour.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road 5
            roadFive= this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/2.2,"road1");
            roadFive.setScale(0.7)
            roadFive.setAngle(90)
            roadFive.setInteractive();
            this.registry.set('roadFour', roadFive.angle)
            roadFive.on("pointerup", () => {
                this.registry.set('roadFive', roadFive.angle)
                roadFive.setAngle(roadFive.angle+90);
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //change road angle
            this.events.on('update', ()=> {
                //check road angle
                if(roadOne.angle === 0 && roadTwo.angle === 90 && roadThree.angle === (-90) && roadFour.angle === -180 && roadFive.angle === (-180)){
                    var destroyLevelName = this.tweens.add({
                        targets: level_select,
                        x: -900,
                        ease: 'Power1',
                        duration: 1500,
                        repeat: 0,
                        onStart: function () { },
                        onComplete: function () { },
                    });
                    this.time.addEvent({
                        delay: 500,
                        loop: false,
                        callback: () => {
                            this.sound.pauseOnBlur = false;
                                    this.sound.play("level_complete", {
                                        loop:false
                                    })
                            var tween = this.tweens.add({
                                targets: [roadOne,roadTwo,roadThree,roadFour,roadFive],
                                angle: { value: 360, duration: 2000 },
                                scaleX: { value: 0, duration: 30, yoyo: true, ease: 'Quad.easeInOut' },
                                scaleY: { value: 0, duration: 30, yoyo: true, ease: 'Quad.easeInOut' },
                                repeat: -1,
                            });
                            this.time.addEvent({
                                delay: 200,
                                loop: false,
                                callback: () => {
                                    this.scene.start(CST.SCENES.LEVELONE, data.setName(4)); 
                                }
                            })
                             
                        }
                    })
                }
            })
        }
//level 4
        if(data.name === 4) {
            //road1
            roadOne = this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/8.8*(0+1)+100,"road7");
            roadOne.setScale(0.7)
            roadOne.setAngle(180)
            roadOne.setInteractive();
            this.registry.set('roadOne', roadOne.angle)
            roadOne.on("pointerup", ()=> {
                roadOne.setAngle(roadOne.angle+90);
                this.registry.set('roadOne', roadOne.angle) 
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road2
            roadTwo= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/8.8*(0+1)+100,"road7");
            roadTwo.setScale(0.7)
            roadTwo.setAngle(0);
            roadTwo.setInteractive();
            this.registry.set('roadTwo', roadTwo.angle)
            roadTwo.on("pointerup", ()=> {
                roadTwo.setAngle(roadTwo.angle+90);
                this.registry.set('roadTwo', roadTwo.angle)
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  }) 
            })

            //road3
            roadThree = this.add.image(this.game.renderer.width/2.9,this.game.renderer.width/8.8*(1+1)+100,"road3");
            roadThree.setScale(0.7)
            roadThree.setAngle(0)
            roadThree.setInteractive();
            this.registry.set('roadThree', roadThree.angle)
            roadThree.on("pointerup", ()=> {
                roadThree.setAngle(roadThree.angle+90);
                this.registry.set('roadThree', roadThree.angle) 
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road4
            roadFour= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/8.8*(1+1)+100,"road6");
            roadFour.setScale(0.7)
            roadFour.setAngle(90);
            roadFour.setInteractive();
            this.registry.set('roadFour', roadFour.angle)
            roadFour.on("pointerup", ()=> {
                roadFour.setAngle(roadFour.angle+90);
                this.registry.set('roadFour', roadFour.angle) 
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road5
            roadFive= this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/8.8*(1+1)+100,"road6");
            roadFive.setScale(0.7)
            roadFive.setAngle(90)
            roadFive.setInteractive();
            this.registry.set('roadFive', roadFive.angle)
            roadFive.on("pointerup", ()=> {
                roadFive.setAngle(roadFive.angle+90);
                this.registry.set('roadFive', roadFive.angle)
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  }) 
            })
            //road6
            roadSix = this.add.image(this.game.renderer.width/1.47,this.game.renderer.width/8.8*(1+1)+100,"road3");
            roadSix.setScale(0.7)
            roadSix.setAngle(90)
            roadSix.setInteractive();
            this.registry.set('roadSix', roadSix.angle)
            roadSix.on("pointerup", ()=> {
                roadSix.setAngle(roadSix.angle+90);
                this.registry.set('roadSix', roadSix.angle) 
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road7
            roadSeven= this.add.image(this.game.renderer.width/2.9,this.game.renderer.width/2.2,"road5");
            roadSeven.setScale(0.7)
            roadSeven.setAngle(90)
            roadSeven.setInteractive();
            this.registry.set('roadSeven', roadSeven.angle)
            roadSeven.on("pointerup", ()=> {
                roadSeven.setAngle(roadSeven.angle+90);
                this.registry.set('roadSeven', roadSeven.angle)
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  }) 
            })
            //road8
            roadEight= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/2.2,"road4");
            roadEight.setScale(0.7)
            roadEight.setInteractive();
            this.registry.set('roadEight', roadEight.angle)
            roadEight.on("pointerup", ()=> {
                roadEight.setAngle(roadEight.angle+90);
                this.registry.set('roadEight', roadEight.angle)
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  }) 
            })
            //road9
            roadNine= this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/2.2,"road4");
            roadNine.setScale(0.7)
            roadNine.setAngle(90)
            roadNine.setInteractive();
            this.registry.set('roadNine', roadNine.angle)
            roadNine.on("pointerup", ()=> {
                roadNine.setAngle(roadNine.angle+90);
                this.registry.set('roadNine', roadNine.angle) 
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road10
            roadTen= this.add.image(this.game.renderer.width/1.47,this.game.renderer.width/2.2,"road5");
            roadTen.setScale(0.7)
            roadTen.setAngle(90)
            roadTen.setInteractive();
            this.registry.set('roadTen', roadTen.angle)
            roadTen.on("pointerup", ()=> {
                roadTen.setAngle(roadTen.angle+90);
                this.registry.set('roadTen', roadTen.angle)
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  }) 
            })
            //road11
            roadEleven= this.add.image(this.game.renderer.width/2.9,this.game.renderer.width/1.77,"road3");
            roadEleven.setScale(0.7)
            roadEleven.setAngle(180)
            roadEleven.setInteractive();
            this.registry.set('roadEleven', roadEleven.angle)
            roadEleven.on("pointerup", ()=> {
                roadEleven.setAngle(roadEleven.angle+90);
                this.registry.set('roadEleven', roadEleven.angle)
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  }) 
            })
            //road12
            road12= this.add.image(this.game.renderer.width/2.2,this.game.renderer.width/1.77,"road3");
            road12.setScale(0.7)
            road12.setAngle(270)
            road12.setInteractive();
            this.registry.set('road12', road12.angle)
            road12.on("pointerup", ()=> {
                road12.setAngle(road12.angle+90);
                this.registry.set('road12', road12.angle)
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  }) 
            })
            //road13
            road13= this.add.image(this.game.renderer.width/1.76,this.game.renderer.width/1.77,"road3");
            road13.setScale(0.7)
            road13.setAngle(180)
            road13.setInteractive();
            this.registry.set('road13', road13.angle)
            road13.on("pointerup", ()=> {
                road13.setAngle(road13.angle+90);
                this.registry.set('road13', road13.angle) 
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  })
            })
            //road14
            road14= this.add.image(this.game.renderer.width/1.47,this.game.renderer.width/1.77,"road3");
            road14.setScale(0.7)
            road14.setAngle(270)
            road14.setInteractive();
            this.registry.set('road13', road14.angle)
            road14.on("pointerup", ()=> {
                road14.setAngle(road14.angle+90);
                this.registry.set('road14', road14.angle)
                this.sound.pauseOnBlur = false;
                  this.sound.play("rotate_music", {
                      loop:false
                  }) 
            })
            //update road angle
            this.events.on('update', ()=> {
                //check road angle 
                if( roadOne.angle === 90 && roadTwo.angle === 90 && roadThree.angle === 0 && roadFour.angle === -180 && 
                    roadFive.angle === 0 && roadSix.angle === 90 && roadSeven.angle === 90 && roadEight.angle === 0 &&
                    roadNine.angle === 90 && roadTen.angle === 90 && roadEleven.angle === -180 && road12.angle === -90 &&
                    road13.angle === -180 && road14.angle === -90
                    ){
                        var destroyLevelName = this.tweens.add({
                            targets: level_select,
                            x: -900,
                            ease: 'Power1',
                            duration: 1500,
                            repeat: 0,
                            onStart: function () { },
                            onComplete: function () { },
                        });
                        this.time.addEvent({
                            delay: 500,
                            loop: false,
                            callback: () => {
                                this.sound.pauseOnBlur = false;
                                    this.sound.play("level_complete", {
                                        loop:false
                                    })
                                var tween = this.tweens.add({
                                    targets: [roadOne,roadTwo,roadThree,roadFour,roadFive,roadSix,roadSeven,roadEight,roadNine,roadTen,roadEleven,road12,road13,road14],
                                    angle: { value: 360, duration: 2000 },
                                    scaleX: { value: 0, duration: 30, yoyo: true, ease: 'Quad.easeInOut' },
                                    scaleY: { value: 0, duration: 30, yoyo: true, ease: 'Quad.easeInOut' },
                                    repeat: -1,
                                });

                                this.time.addEvent({
                                    delay: 200,
                                    loop: false,
                                    callback: () => {
                                        this.scene.start(CST.SCENES.PLAY); 
                                    }
                                })
                                 
                            }
                        })
                }
            }) 
        }
    }
}