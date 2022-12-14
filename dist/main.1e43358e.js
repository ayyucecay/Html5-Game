// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    PLAY: "PLAY",
    LEVELONE: "LEVELONE",
    LEVELTWO: "LEVELTWO"
  }
};
exports.CST = CST;
},{}],"src/scenes/LevelOne.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LevelOne = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var levelText = {
  style: {
    fontSize: '44px',
    fontFamily: 'playFont'
  }
}; //variable definition

var roadOne;
var roadTwo;
var roadThree;
var roadFour;
var roadFive;
var roadSix;
var roadSeven;
var roadEight;
var roadNine;
var roadTen;
var roadEleven;
var road12;
var road13;
var road14;

var LevelOne = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LevelOne, _Phaser$Scene);

  var _super = _createSuper(LevelOne);

  function LevelOne() {
    _classCallCheck(this, LevelOne);

    return _super.call(this, {
      key: _CST.CST.SCENES.LEVELONE
    });
  }

  _createClass(LevelOne, [{
    key: "create",
    value: function create(data) {
      var _this = this;

      var level_bg = this.add.rectangle(this.game.renderer.width / 2, this.game.renderer.height / 6);
      var level_select = this.add.text(-200, this.game.renderer.height / 6.9, "LEVEL ".concat(data.name), levelText.style);
      this.time.addEvent({
        delay: 300,
        loop: false,
        callback: function callback() {
          var tween = _this.tweens.add({
            targets: level_select,
            x: _this.game.renderer.width / 2.5,
            ease: 'Power1',
            duration: 600,
            repeat: 0,
            onStart: function onStart() {},
            onComplete: function onComplete() {}
          });
        }
      });
      var back_level_page = this.add.image(0, 0, "back_level_button");
      Phaser.Display.Align.In.BottomCenter(back_level_page, level_bg, 0, this.game.renderer.width / 1.6);
      back_level_page.setInteractive();
      back_level_page.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.PLAY);
      }); //level 1

      if (data.name === 1) {
        //road 1
        roadOne = this.add.sprite(this.game.renderer.width / 2.2, this.game.renderer.width / 8.8 * (0 + 1) + 100, "road2");
        roadOne.setScale(0.7);
        roadOne.setAngle(90 * (0 + 1));
        roadOne.inputEnabled = true;
        roadOne.setInteractive();
        this.registry.set('roadOne', roadOne.angle);
        roadOne.on('pointerup', function () {
          roadOne.setAngle(roadOne.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadOne', roadOne.angle);
        }); //road 2

        roadTwo = this.add.sprite(this.game.renderer.width / 2.2, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road2");
        roadTwo.setScale(0.7);
        roadTwo.setAngle(90 * (1 + 1));
        roadTwo.inputEnabled = true;
        roadTwo.setInteractive();
        this.registry.set('roadTwo', roadTwo.angle);
        roadTwo.on('pointerup', function () {
          roadTwo.setAngle(roadTwo.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadOne', roadTwo.angle);
        }); //road 3        

        roadThree = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 8.8 * (0 + 1) + 100, "road2");
        roadThree.setScale(0.7);
        roadThree.setAngle(-90 * 0);
        roadThree.setInteractive();
        this.registry.set('roadThree', roadThree.angle);
        roadThree.on("pointerup", function () {
          roadThree.setAngle(roadThree.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadThree', roadThree.angle);
        }); //road 4

        roadFour = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road2");
        roadFour.setScale(0.7);
        roadFour.setAngle(-90 * 1);
        roadFour.setInteractive();
        this.registry.set('roadFour', roadFour.angle);
        roadFour.on("pointerup", function () {
          roadFour.setAngle(roadFour.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadFour', roadFour.angle);
        }); //update road angle 

        this.events.on('update', function () {
          //check all the angles are true
          if (roadOne.angle === 0 && roadTwo.angle === -90 && roadThree.angle === 90 && roadFour.angle === -180) {
            var destroyLevelName = _this.tweens.add({
              targets: level_select,
              x: -1000,
              ease: 'Power1',
              duration: 1500,
              repeat: 0,
              onStart: function onStart() {},
              onComplete: function onComplete() {}
            });

            _this.time.addEvent({
              delay: 500,
              loop: false,
              callback: function callback() {
                _this.sound.pauseOnBlur = false;

                _this.sound.play("level_complete", {
                  loop: false
                });

                var tween = _this.tweens.add({
                  targets: [roadOne, roadTwo, roadThree, roadFour],
                  angle: {
                    value: 360,
                    duration: 2000
                  },
                  scaleX: {
                    value: 0,
                    duration: 30,
                    yoyo: true,
                    ease: 'Quad.easeInOut'
                  },
                  scaleY: {
                    value: 0,
                    duration: 30,
                    yoyo: true,
                    ease: 'Quad.easeInOut'
                  },
                  repeat: -1
                });

                _this.time.addEvent({
                  delay: 200,
                  loop: false,
                  callback: function callback() {
                    _this.scene.start(_CST.CST.SCENES.LEVELONE, data.setName(2));
                  }
                });
              }
            });
          }
        });
      } //level 2


      if (data.name === 2) {
        //road 1
        roadOne = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 8.8 * (0 + 1) + 100, "road2");
        roadOne.setScale(0.7);
        roadOne.setAngle(90 * (0 + 1));
        roadOne.setInteractive();
        this.registry.set('roadOne', roadOne.angle);
        roadOne.on("pointerup", function () {
          roadOne.setAngle(roadOne.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadOne', roadOne.angle);
        }); //road 2

        roadTwo = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road2");
        roadTwo.setScale(0.7);
        roadTwo.setAngle(90 * (1 + 1));
        roadTwo.setInteractive();
        this.registry.set('roadTwo', roadTwo.angle);
        roadTwo.on("pointerup", function () {
          roadTwo.setAngle(roadTwo.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadTwo', roadTwo.angle);
        }); //road 3    

        roadThree = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 8.8 * (0 + 1) + 100, "road7");
        roadThree.setScale(0.7);
        roadThree.setAngle(90);
        roadThree.setInteractive();
        this.registry.set('roadThree', roadThree.angle);
        roadThree.on("pointerup", function () {
          roadThree.setAngle(roadThree.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadThree', roadThree.angle);
        }); //road 4

        roadFour = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road3");
        roadFour.setScale(0.7);
        roadFour.setAngle(270);
        roadFour.setInteractive();
        this.registry.set('roadFour', roadFour.angle);
        roadFour.on("pointerup", function () {
          roadFour.setAngle(roadFour.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadFour', roadFour.angle);
        }); //road 5

        roadFive = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 2.2, "road7");
        roadFive.setScale(0.7);
        roadFive.setInteractive();
        this.registry.set('roadFive', roadFive.angle);
        roadFive.on("pointerup", function () {
          roadFive.setAngle(roadFive.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadFive', roadFive.angle);
        }); //road 6

        roadSix = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 2.2, "road3");
        roadSix.setScale(0.7);
        roadSix.setAngle(90);
        roadSix.setInteractive();
        this.registry.set('roadSix', roadSix.angle);
        roadSix.on("pointerup", function () {
          roadSix.setAngle(roadSix.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });

          _this.registry.set('roadSix', roadSix.angle);
        }); //change road angle

        this.events.on('update', function () {
          //check level 2 all the angles are true
          if (roadOne.angle === 0 && roadTwo.angle === -90 && roadThree.angle === -180 && roadFour.angle === 90 && roadFive.angle === 0 && roadSix.angle === -180) {
            var destroyLevelName = _this.tweens.add({
              targets: level_select,
              x: -1000,
              ease: 'Power1',
              duration: 1500,
              repeat: 0,
              onStart: function onStart() {},
              onComplete: function onComplete() {}
            });

            _this.time.addEvent({
              delay: 500,
              loop: false,
              callback: function callback() {
                _this.sound.pauseOnBlur = false;

                _this.sound.play("level_complete", {
                  loop: false
                });

                var tween = _this.tweens.add({
                  targets: [roadOne, roadTwo, roadThree, roadFour, roadFive, roadSix],
                  angle: {
                    value: 360,
                    duration: 2000
                  },
                  scaleX: {
                    value: 0,
                    duration: 30,
                    yoyo: true,
                    ease: 'Quad.easeInOut'
                  },
                  scaleY: {
                    value: 0,
                    duration: 30,
                    yoyo: true,
                    ease: 'Quad.easeInOut'
                  },
                  repeat: -1
                });

                _this.time.addEvent({
                  delay: 500,
                  loop: false,
                  callback: function callback() {
                    _this.scene.start(_CST.CST.SCENES.LEVELONE, data.setName(3));
                  }
                });
              }
            });
          }
        });
      } //level 3


      if (data.name === 3) {
        //road 1
        roadOne = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 8.8 * (0 + 1) + 100, "road2");
        roadOne.setScale(0.7);
        roadOne.setInteractive();
        this.registry.set('roadOne', roadOne.angle);
        roadOne.on("pointerup", function () {
          _this.registry.set('roadOne', roadOne.angle);

          roadOne.setAngle(roadOne.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road 2

        roadTwo = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 8.8 * (0 + 1) + 100, "road2");
        roadTwo.setScale(0.7);
        roadTwo.setAngle(180);
        roadTwo.setInteractive();
        this.registry.set('roadTwo', roadTwo.angle);
        roadTwo.on("pointerup", function () {
          _this.registry.set('roadTwo', roadTwo.angle);

          roadTwo.setAngle(roadTwo.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road 3

        roadThree = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road2");
        roadThree.setScale(0.7);
        roadThree.setAngle(180);
        roadThree.setInteractive();
        this.registry.set('roadThree', roadThree.angle);
        roadThree.on("pointerup", function () {
          _this.registry.set('roadThree', roadThree.angle);

          roadThree.setAngle(roadThree.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road 4

        roadFour = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road1");
        roadFour.setScale(0.7);
        roadFour.setAngle(90);
        roadFour.setInteractive();
        this.registry.set('roadFour', roadFour.angle);
        roadFour.on("pointerup", function () {
          _this.registry.set('roadFour', roadFour.angle);

          roadFour.setAngle(roadFour.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road 5

        roadFive = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 2.2, "road1");
        roadFive.setScale(0.7);
        roadFive.setAngle(90);
        roadFive.setInteractive();
        this.registry.set('roadFour', roadFive.angle);
        roadFive.on("pointerup", function () {
          _this.registry.set('roadFive', roadFive.angle);

          roadFive.setAngle(roadFive.angle + 90);
          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //change road angle

        this.events.on('update', function () {
          //check road angle
          if (roadOne.angle === 0 && roadTwo.angle === 90 && roadThree.angle === -90 && roadFour.angle === -180 && roadFive.angle === -180) {
            var destroyLevelName = _this.tweens.add({
              targets: level_select,
              x: -900,
              ease: 'Power1',
              duration: 1500,
              repeat: 0,
              onStart: function onStart() {},
              onComplete: function onComplete() {}
            });

            _this.time.addEvent({
              delay: 500,
              loop: false,
              callback: function callback() {
                _this.sound.pauseOnBlur = false;

                _this.sound.play("level_complete", {
                  loop: false
                });

                var tween = _this.tweens.add({
                  targets: [roadOne, roadTwo, roadThree, roadFour, roadFive],
                  angle: {
                    value: 360,
                    duration: 2000
                  },
                  scaleX: {
                    value: 0,
                    duration: 30,
                    yoyo: true,
                    ease: 'Quad.easeInOut'
                  },
                  scaleY: {
                    value: 0,
                    duration: 30,
                    yoyo: true,
                    ease: 'Quad.easeInOut'
                  },
                  repeat: -1
                });

                _this.time.addEvent({
                  delay: 200,
                  loop: false,
                  callback: function callback() {
                    _this.scene.start(_CST.CST.SCENES.LEVELONE, data.setName(4));
                  }
                });
              }
            });
          }
        });
      } //level 4


      if (data.name === 4) {
        //road1
        roadOne = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 8.8 * (0 + 1) + 100, "road7");
        roadOne.setScale(0.7);
        roadOne.setAngle(180);
        roadOne.setInteractive();
        this.registry.set('roadOne', roadOne.angle);
        roadOne.on("pointerup", function () {
          roadOne.setAngle(roadOne.angle + 90);

          _this.registry.set('roadOne', roadOne.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road2

        roadTwo = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 8.8 * (0 + 1) + 100, "road7");
        roadTwo.setScale(0.7);
        roadTwo.setAngle(0);
        roadTwo.setInteractive();
        this.registry.set('roadTwo', roadTwo.angle);
        roadTwo.on("pointerup", function () {
          roadTwo.setAngle(roadTwo.angle + 90);

          _this.registry.set('roadTwo', roadTwo.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road3

        roadThree = this.add.image(this.game.renderer.width / 2.9, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road3");
        roadThree.setScale(0.7);
        roadThree.setAngle(0);
        roadThree.setInteractive();
        this.registry.set('roadThree', roadThree.angle);
        roadThree.on("pointerup", function () {
          roadThree.setAngle(roadThree.angle + 90);

          _this.registry.set('roadThree', roadThree.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road4

        roadFour = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road6");
        roadFour.setScale(0.7);
        roadFour.setAngle(90);
        roadFour.setInteractive();
        this.registry.set('roadFour', roadFour.angle);
        roadFour.on("pointerup", function () {
          roadFour.setAngle(roadFour.angle + 90);

          _this.registry.set('roadFour', roadFour.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road5

        roadFive = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road6");
        roadFive.setScale(0.7);
        roadFive.setAngle(90);
        roadFive.setInteractive();
        this.registry.set('roadFive', roadFive.angle);
        roadFive.on("pointerup", function () {
          roadFive.setAngle(roadFive.angle + 90);

          _this.registry.set('roadFive', roadFive.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road6

        roadSix = this.add.image(this.game.renderer.width / 1.47, this.game.renderer.width / 8.8 * (1 + 1) + 100, "road3");
        roadSix.setScale(0.7);
        roadSix.setAngle(90);
        roadSix.setInteractive();
        this.registry.set('roadSix', roadSix.angle);
        roadSix.on("pointerup", function () {
          roadSix.setAngle(roadSix.angle + 90);

          _this.registry.set('roadSix', roadSix.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road7

        roadSeven = this.add.image(this.game.renderer.width / 2.9, this.game.renderer.width / 2.2, "road5");
        roadSeven.setScale(0.7);
        roadSeven.setAngle(90);
        roadSeven.setInteractive();
        this.registry.set('roadSeven', roadSeven.angle);
        roadSeven.on("pointerup", function () {
          roadSeven.setAngle(roadSeven.angle + 90);

          _this.registry.set('roadSeven', roadSeven.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road8

        roadEight = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 2.2, "road4");
        roadEight.setScale(0.7);
        roadEight.setInteractive();
        this.registry.set('roadEight', roadEight.angle);
        roadEight.on("pointerup", function () {
          roadEight.setAngle(roadEight.angle + 90);

          _this.registry.set('roadEight', roadEight.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road9

        roadNine = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 2.2, "road4");
        roadNine.setScale(0.7);
        roadNine.setAngle(90);
        roadNine.setInteractive();
        this.registry.set('roadNine', roadNine.angle);
        roadNine.on("pointerup", function () {
          roadNine.setAngle(roadNine.angle + 90);

          _this.registry.set('roadNine', roadNine.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road10

        roadTen = this.add.image(this.game.renderer.width / 1.47, this.game.renderer.width / 2.2, "road5");
        roadTen.setScale(0.7);
        roadTen.setAngle(90);
        roadTen.setInteractive();
        this.registry.set('roadTen', roadTen.angle);
        roadTen.on("pointerup", function () {
          roadTen.setAngle(roadTen.angle + 90);

          _this.registry.set('roadTen', roadTen.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road11

        roadEleven = this.add.image(this.game.renderer.width / 2.9, this.game.renderer.width / 1.77, "road3");
        roadEleven.setScale(0.7);
        roadEleven.setAngle(180);
        roadEleven.setInteractive();
        this.registry.set('roadEleven', roadEleven.angle);
        roadEleven.on("pointerup", function () {
          roadEleven.setAngle(roadEleven.angle + 90);

          _this.registry.set('roadEleven', roadEleven.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road12

        road12 = this.add.image(this.game.renderer.width / 2.2, this.game.renderer.width / 1.77, "road3");
        road12.setScale(0.7);
        road12.setAngle(270);
        road12.setInteractive();
        this.registry.set('road12', road12.angle);
        road12.on("pointerup", function () {
          road12.setAngle(road12.angle + 90);

          _this.registry.set('road12', road12.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road13

        road13 = this.add.image(this.game.renderer.width / 1.76, this.game.renderer.width / 1.77, "road3");
        road13.setScale(0.7);
        road13.setAngle(180);
        road13.setInteractive();
        this.registry.set('road13', road13.angle);
        road13.on("pointerup", function () {
          road13.setAngle(road13.angle + 90);

          _this.registry.set('road13', road13.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //road14

        road14 = this.add.image(this.game.renderer.width / 1.47, this.game.renderer.width / 1.77, "road3");
        road14.setScale(0.7);
        road14.setAngle(270);
        road14.setInteractive();
        this.registry.set('road13', road14.angle);
        road14.on("pointerup", function () {
          road14.setAngle(road14.angle + 90);

          _this.registry.set('road14', road14.angle);

          _this.sound.pauseOnBlur = false;

          _this.sound.play("rotate_music", {
            loop: false
          });
        }); //update road angle

        this.events.on('update', function () {
          //check road angle 
          if (roadOne.angle === 90 && roadTwo.angle === 90 && roadThree.angle === 0 && roadFour.angle === -180 && roadFive.angle === 0 && roadSix.angle === 90 && roadSeven.angle === 90 && roadEight.angle === 0 && roadNine.angle === 90 && roadTen.angle === 90 && roadEleven.angle === -180 && road12.angle === -90 && road13.angle === -180 && road14.angle === -90) {
            var destroyLevelName = _this.tweens.add({
              targets: level_select,
              x: -900,
              ease: 'Power1',
              duration: 1500,
              repeat: 0,
              onStart: function onStart() {},
              onComplete: function onComplete() {}
            });

            _this.time.addEvent({
              delay: 500,
              loop: false,
              callback: function callback() {
                _this.sound.pauseOnBlur = false;

                _this.sound.play("level_complete", {
                  loop: false
                });

                var tween = _this.tweens.add({
                  targets: [roadOne, roadTwo, roadThree, roadFour, roadFive, roadSix, roadSeven, roadEight, roadNine, roadTen, roadEleven, road12, road13, road14],
                  angle: {
                    value: 360,
                    duration: 2000
                  },
                  scaleX: {
                    value: 0,
                    duration: 30,
                    yoyo: true,
                    ease: 'Quad.easeInOut'
                  },
                  scaleY: {
                    value: 0,
                    duration: 30,
                    yoyo: true,
                    ease: 'Quad.easeInOut'
                  },
                  repeat: -1
                });

                _this.time.addEvent({
                  delay: 200,
                  loop: false,
                  callback: function callback() {
                    _this.scene.start(_CST.CST.SCENES.PLAY);
                  }
                });
              }
            });
          }
        });
      }
    }
  }]);

  return LevelOne;
}(Phaser.Scene);

exports.LevelOne = LevelOne;
},{"../CST":"src/CST.js"}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  var _super = _createSuper(LoadScene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.LOAD
    });
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      //road images
      this.load.image("road1", "./assets/road/roadTexture_01.png");
      this.load.image("road2", "./assets/road/roadTexture_02.png");
      this.load.image("road3", "./assets/road/roadTexture_06.png");
      this.load.image("road4", "./assets/road/roadTexture_10.png");
      this.load.image("road5", "./assets/road/roadTexture_22.png");
      this.load.image("road6", "./assets/road/roadTexture_29.png");
      this.load.image("road7", "./assets/road/roadTexture_45.png"); //ui images

      this.load.image("back_level_button", "./assets/ui/barsHorizontal.png");
      this.load.spritesheet("level_button", "./assets/ui/red_button08.png", {
        frameHeight: 120,
        frameWidth: 120
      });
      this.load.image("level_button_click", "./assets/ui/red_button09.png"); //audio

      this.load.audio("menu_music", "./audio/main_song.mp3");
      this.load.audio("click_music", "./audio/DefaultClick.mp3");
      this.load.audio("rotate_music", "./audio/RotateShape.mp3");
      this.load.audio("level_complete", "./audio/LevelComplete.mp3");
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.time.addEvent({
        delay: 10,
        loop: false,
        callback: function callback() {
          _this.scene.start(_CST.CST.SCENES.MENU);
        }
      });
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/q/q.js":[function(require,module,exports) {
var define;
var global = arguments[3];
var process = require("process");
// vim:ts=4:sts=4:sw=4:

/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function (definition) {
  "use strict"; // This file will function properly as a <script> tag, or a module
  // using CommonJS and NodeJS or RequireJS module formats.  In
  // Common/Node/RequireJS, the module exports the Q API and when
  // executed as a simple <script>, it creates a Q global instead.
  // Montage Require

  if (typeof bootstrap === "function") {
    bootstrap("promise", definition); // CommonJS
  } else if (typeof exports === "object" && typeof module === "object") {
    module.exports = definition(); // RequireJS
  } else if (typeof define === "function" && define.amd) {
    define(definition); // SES (Secure EcmaScript)
  } else if (typeof ses !== "undefined") {
    if (!ses.ok()) {
      return;
    } else {
      ses.makeQ = definition;
    } // <script>

  } else if (typeof window !== "undefined" || typeof self !== "undefined") {
    // Prefer window over self for add-on scripts. Use self for
    // non-windowed contexts.
    var global = typeof window !== "undefined" ? window : self; // Get the `window` object, save the previous Q global
    // and initialize Q as a global.

    var previousQ = global.Q;
    global.Q = definition(); // Add a noConflict function so Q can be removed from the
    // global namespace.

    global.Q.noConflict = function () {
      global.Q = previousQ;
      return this;
    };
  } else {
    throw new Error("This environment was not anticipated by Q. Please file a bug.");
  }
})(function () {
  "use strict";

  var hasStacks = false;

  try {
    throw new Error();
  } catch (e) {
    hasStacks = !!e.stack;
  } // All code after this point will be filtered from stack traces reported
  // by Q.


  var qStartingLine = captureLine();
  var qFileName; // shims
  // used for fallback in "allResolved"

  var noop = function () {}; // Use the fastest possible means to execute a task in a future turn
  // of the event loop.


  var nextTick = function () {
    // linked list of tasks (single, with head node)
    var head = {
      task: void 0,
      next: null
    };
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false; // queue for late tasks, used by unhandled rejection tracking

    var laterQueue = [];

    function flush() {
      /* jshint loopfunc: true */
      var task, domain;

      while (head.next) {
        head = head.next;
        task = head.task;
        head.task = void 0;
        domain = head.domain;

        if (domain) {
          head.domain = void 0;
          domain.enter();
        }

        runSingle(task, domain);
      }

      while (laterQueue.length) {
        task = laterQueue.pop();
        runSingle(task);
      }

      flushing = false;
    } // runs a single function in the async queue


    function runSingle(task, domain) {
      try {
        task();
      } catch (e) {
        if (isNodeJS) {
          // In node, uncaught exceptions are considered fatal errors.
          // Re-throw them synchronously to interrupt flushing!
          // Ensure continuation if the uncaught exception is suppressed
          // listening "uncaughtException" events (as domains does).
          // Continue in next event to avoid tick recursion.
          if (domain) {
            domain.exit();
          }

          setTimeout(flush, 0);

          if (domain) {
            domain.enter();
          }

          throw e;
        } else {
          // In browsers, uncaught exceptions are not fatal.
          // Re-throw them asynchronously to avoid slow-downs.
          setTimeout(function () {
            throw e;
          }, 0);
        }
      }

      if (domain) {
        domain.exit();
      }
    }

    nextTick = function (task) {
      tail = tail.next = {
        task: task,
        domain: isNodeJS && process.domain,
        next: null
      };

      if (!flushing) {
        flushing = true;
        requestTick();
      }
    };

    if (typeof process === "object" && process.toString() === "[object process]" && process.nextTick) {
      // Ensure Q is in a real Node environment, with a `process.nextTick`.
      // To see through fake Node environments:
      // * Mocha test runner - exposes a `process` global without a `nextTick`
      // * Browserify - exposes a `process.nexTick` function that uses
      //   `setTimeout`. In this case `setImmediate` is preferred because
      //    it is faster. Browserify's `process.toString()` yields
      //   "[object Object]", while in a real Node environment
      //   `process.toString()` yields "[object process]".
      isNodeJS = true;

      requestTick = function () {
        process.nextTick(flush);
      };
    } else if (typeof setImmediate === "function") {
      // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
      if (typeof window !== "undefined") {
        requestTick = setImmediate.bind(window, flush);
      } else {
        requestTick = function () {
          setImmediate(flush);
        };
      }
    } else if (typeof MessageChannel !== "undefined") {
      // modern browsers
      // http://www.nonblocking.io/2011/06/windownexttick.html
      var channel = new MessageChannel(); // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
      // working message ports the first time a page loads.

      channel.port1.onmessage = function () {
        requestTick = requestPortTick;
        channel.port1.onmessage = flush;
        flush();
      };

      var requestPortTick = function () {
        // Opera requires us to provide a message payload, regardless of
        // whether we use it.
        channel.port2.postMessage(0);
      };

      requestTick = function () {
        setTimeout(flush, 0);
        requestPortTick();
      };
    } else {
      // old browsers
      requestTick = function () {
        setTimeout(flush, 0);
      };
    } // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.


    nextTick.runAfter = function (task) {
      laterQueue.push(task);

      if (!flushing) {
        flushing = true;
        requestTick();
      }
    };

    return nextTick;
  }(); // Attempt to make generics safe in the face of downstream
  // modifications.
  // There is no situation where this is necessary.
  // If you need a security guarantee, these primordials need to be
  // deeply frozen anyway, and if you don???t need a security guarantee,
  // this is just plain paranoid.
  // However, this **might** have the nice side-effect of reducing the size of
  // the minified code by reducing x.call() to merely x()
  // See Mark Miller???s explanation of what this does.
  // http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming


  var call = Function.call;

  function uncurryThis(f) {
    return function () {
      return call.apply(f, arguments);
    };
  } // This is equivalent, but slower:
  // uncurryThis = Function_bind.bind(Function_bind.call);
  // http://jsperf.com/uncurrythis


  var array_slice = uncurryThis(Array.prototype.slice);
  var array_reduce = uncurryThis(Array.prototype.reduce || function (callback, basis) {
    var index = 0,
        length = this.length; // concerning the initial value, if one is not provided

    if (arguments.length === 1) {
      // seek to the first value in the array, accounting
      // for the possibility that is is a sparse array
      do {
        if (index in this) {
          basis = this[index++];
          break;
        }

        if (++index >= length) {
          throw new TypeError();
        }
      } while (1);
    } // reduce


    for (; index < length; index++) {
      // account for the possibility that the array is sparse
      if (index in this) {
        basis = callback(basis, this[index], index);
      }
    }

    return basis;
  });
  var array_indexOf = uncurryThis(Array.prototype.indexOf || function (value) {
    // not a very good shim, but good enough for our one use of it
    for (var i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      }
    }

    return -1;
  });
  var array_map = uncurryThis(Array.prototype.map || function (callback, thisp) {
    var self = this;
    var collect = [];
    array_reduce(self, function (undefined, value, index) {
      collect.push(callback.call(thisp, value, index, self));
    }, void 0);
    return collect;
  });

  var object_create = Object.create || function (prototype) {
    function Type() {}

    Type.prototype = prototype;
    return new Type();
  };

  var object_defineProperty = Object.defineProperty || function (obj, prop, descriptor) {
    obj[prop] = descriptor.value;
    return obj;
  };

  var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

  var object_keys = Object.keys || function (object) {
    var keys = [];

    for (var key in object) {
      if (object_hasOwnProperty(object, key)) {
        keys.push(key);
      }
    }

    return keys;
  };

  var object_toString = uncurryThis(Object.prototype.toString);

  function isObject(value) {
    return value === Object(value);
  } // generator related shims
  // FIXME: Remove this function once ES6 generators are in SpiderMonkey.


  function isStopIteration(exception) {
    return object_toString(exception) === "[object StopIteration]" || exception instanceof QReturnValue;
  } // FIXME: Remove this helper and Q.return once ES6 generators are in
  // SpiderMonkey.


  var QReturnValue;

  if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
  } else {
    QReturnValue = function (value) {
      this.value = value;
    };
  } // long stack traces


  var STACK_JUMP_SEPARATOR = "From previous event:";

  function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks && promise.stack && typeof error === "object" && error !== null && error.stack) {
      var stacks = [];

      for (var p = promise; !!p; p = p.source) {
        if (p.stack && (!error.__minimumStackCounter__ || error.__minimumStackCounter__ > p.stackCounter)) {
          object_defineProperty(error, "__minimumStackCounter__", {
            value: p.stackCounter,
            configurable: true
          });
          stacks.unshift(p.stack);
        }
      }

      stacks.unshift(error.stack);
      var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
      var stack = filterStackString(concatedStacks);
      object_defineProperty(error, "stack", {
        value: stack,
        configurable: true
      });
    }
  }

  function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];

    for (var i = 0; i < lines.length; ++i) {
      var line = lines[i];

      if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
        desiredLines.push(line);
      }
    }

    return desiredLines.join("\n");
  }

  function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
  }

  function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);

    if (attempt1) {
      return [attempt1[1], Number(attempt1[2])];
    } // Anonymous functions: "at filename:lineNumber:columnNumber"


    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);

    if (attempt2) {
      return [attempt2[1], Number(attempt2[2])];
    } // Firefox style: "function@filename:lineNumber or @filename:lineNumber"


    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);

    if (attempt3) {
      return [attempt3[1], Number(attempt3[2])];
    }
  }

  function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
      return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];
    return fileName === qFileName && lineNumber >= qStartingLine && lineNumber <= qEndingLine;
  } // discover own file name and line number range for filtering stack
  // traces


  function captureLine() {
    if (!hasStacks) {
      return;
    }

    try {
      throw new Error();
    } catch (e) {
      var lines = e.stack.split("\n");
      var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
      var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);

      if (!fileNameAndLineNumber) {
        return;
      }

      qFileName = fileNameAndLineNumber[0];
      return fileNameAndLineNumber[1];
    }
  }

  function deprecate(callback, name, alternative) {
    return function () {
      if (typeof console !== "undefined" && typeof console.warn === "function") {
        console.warn(name + " is deprecated, use " + alternative + " instead.", new Error("").stack);
      }

      return callback.apply(callback, arguments);
    };
  } // end of shims
  // beginning of real work

  /**
   * Constructs a promise for an immediate reference, passes promises through, or
   * coerces promises from different systems.
   * @param value immediate reference or promise
   */


  function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
      return value;
    } // assimilate thenables


    if (isPromiseAlike(value)) {
      return coerce(value);
    } else {
      return fulfill(value);
    }
  }

  Q.resolve = Q;
  /**
   * Performs a task in a future turn of the event loop.
   * @param {Function} task
   */

  Q.nextTick = nextTick;
  /**
   * Controls whether or not long stack traces will be on
   */

  Q.longStackSupport = false;
  /**
   * The counter is used to determine the stopping point for building
   * long stack traces. In makeStackTraceLong we walk backwards through
   * the linked list of promises, only stacks which were created before
   * the rejection are concatenated.
   */

  var longStackCounter = 1; // enable long stacks if Q_DEBUG is set

  if (typeof process === "object" && process && process.env && undefined) {
    Q.longStackSupport = true;
  }
  /**
   * Constructs a {promise, resolve, reject} object.
   *
   * `resolve` is a callback to invoke with a more resolved value for the
   * promise. To fulfill the promise, invoke `resolve` with any value that is
   * not a thenable. To reject the promise, invoke `resolve` with a rejected
   * thenable, or invoke `reject` with the reason directly. To resolve the
   * promise to another thenable, thus putting it in the same state, invoke
   * `resolve` with that other thenable.
   */


  Q.defer = defer;

  function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [],
        progressListeners = [],
        resolvedPromise;
    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
      var args = array_slice(arguments);

      if (messages) {
        messages.push(args);

        if (op === "when" && operands[1]) {
          // progress operand
          progressListeners.push(operands[1]);
        }
      } else {
        Q.nextTick(function () {
          resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
        });
      }
    }; // XXX deprecated


    promise.valueOf = function () {
      if (messages) {
        return promise;
      }

      var nearerValue = nearer(resolvedPromise);

      if (isPromise(nearerValue)) {
        resolvedPromise = nearerValue; // shorten chain
      }

      return nearerValue;
    };

    promise.inspect = function () {
      if (!resolvedPromise) {
        return {
          state: "pending"
        };
      }

      return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
      try {
        throw new Error();
      } catch (e) {
        // NOTE: don't try to use `Error.captureStackTrace` or transfer the
        // accessor around; that causes memory leaks as per GH-111. Just
        // reify the stack trace as a string ASAP.
        //
        // At the same time, cut off the first line; it's always just
        // "[object Promise]\n", as per the `toString`.
        promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        promise.stackCounter = longStackCounter++;
      }
    } // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.


    function become(newPromise) {
      resolvedPromise = newPromise;

      if (Q.longStackSupport && hasStacks) {
        // Only hold a reference to the new promise if long stacks
        // are enabled to reduce memory usage
        promise.source = newPromise;
      }

      array_reduce(messages, function (undefined, message) {
        Q.nextTick(function () {
          newPromise.promiseDispatch.apply(newPromise, message);
        });
      }, void 0);
      messages = void 0;
      progressListeners = void 0;
    }

    deferred.promise = promise;

    deferred.resolve = function (value) {
      if (resolvedPromise) {
        return;
      }

      become(Q(value));
    };

    deferred.fulfill = function (value) {
      if (resolvedPromise) {
        return;
      }

      become(fulfill(value));
    };

    deferred.reject = function (reason) {
      if (resolvedPromise) {
        return;
      }

      become(reject(reason));
    };

    deferred.notify = function (progress) {
      if (resolvedPromise) {
        return;
      }

      array_reduce(progressListeners, function (undefined, progressListener) {
        Q.nextTick(function () {
          progressListener(progress);
        });
      }, void 0);
    };

    return deferred;
  }
  /**
   * Creates a Node-style callback that will resolve or reject the deferred
   * promise.
   * @returns a nodeback
   */


  defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
      if (error) {
        self.reject(error);
      } else if (arguments.length > 2) {
        self.resolve(array_slice(arguments, 1));
      } else {
        self.resolve(value);
      }
    };
  };
  /**
   * @param resolver {Function} a function that returns nothing and accepts
   * the resolve, reject, and notify functions for a deferred.
   * @returns a promise that may be resolved with the given resolve and reject
   * functions, or rejected by a thrown exception in resolver
   */


  Q.Promise = promise; // ES6

  Q.promise = promise;

  function promise(resolver) {
    if (typeof resolver !== "function") {
      throw new TypeError("resolver must be a function.");
    }

    var deferred = defer();

    try {
      resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
      deferred.reject(reason);
    }

    return deferred.promise;
  }

  promise.race = race; // ES6

  promise.all = all; // ES6

  promise.reject = reject; // ES6

  promise.resolve = Q; // ES6
  // XXX experimental.  This method is a way to denote that a local value is
  // serializable and should be immediately dispatched to a remote upon request,
  // instead of passing a reference.

  Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
  };

  Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
  };
  /**
   * If two promises eventually fulfill to the same value, promises that value,
   * but otherwise rejects.
   * @param x {Any*}
   * @param y {Any*}
   * @returns {Any*} a promise for x and y if they are the same, but a rejection
   * otherwise.
   *
   */


  Q.join = function (x, y) {
    return Q(x).join(y);
  };

  Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
      if (x === y) {
        // TODO: "===" should be Object.is or equiv
        return x;
      } else {
        throw new Error("Q can't join: not the same: " + x + " " + y);
      }
    });
  };
  /**
   * Returns a promise for the first of an array of promises to become settled.
   * @param answers {Array[Any*]} promises to race
   * @returns {Any*} the first promise to be settled
   */


  Q.race = race;

  function race(answerPs) {
    return promise(function (resolve, reject) {
      // Switch to this once we can assume at least ES5
      // answerPs.forEach(function (answerP) {
      //     Q(answerP).then(resolve, reject);
      // });
      // Use this in the meantime
      for (var i = 0, len = answerPs.length; i < len; i++) {
        Q(answerPs[i]).then(resolve, reject);
      }
    });
  }

  Promise.prototype.race = function () {
    return this.then(Q.race);
  };
  /**
   * Constructs a Promise with a promise descriptor object and optional fallback
   * function.  The descriptor contains methods like when(rejected), get(name),
   * set(name, value), post(name, args), and delete(name), which all
   * return either a value, a promise for a value, or a rejection.  The fallback
   * accepts the operation name, a resolver, and any further arguments that would
   * have been forwarded to the appropriate method above had a method been
   * provided with the proper name.  The API makes no guarantees about the nature
   * of the returned object, apart from that it is usable whereever promises are
   * bought and sold.
   */


  Q.makePromise = Promise;

  function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
      fallback = function (op) {
        return reject(new Error("Promise does not support operation: " + op));
      };
    }

    if (inspect === void 0) {
      inspect = function () {
        return {
          state: "unknown"
        };
      };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
      var result;

      try {
        if (descriptor[op]) {
          result = descriptor[op].apply(promise, args);
        } else {
          result = fallback.call(promise, op, args);
        }
      } catch (exception) {
        result = reject(exception);
      }

      if (resolve) {
        resolve(result);
      }
    };

    promise.inspect = inspect; // XXX deprecated `valueOf` and `exception` support

    if (inspect) {
      var inspected = inspect();

      if (inspected.state === "rejected") {
        promise.exception = inspected.reason;
      }

      promise.valueOf = function () {
        var inspected = inspect();

        if (inspected.state === "pending" || inspected.state === "rejected") {
          return promise;
        }

        return inspected.value;
      };
    }

    return promise;
  }

  Promise.prototype.toString = function () {
    return "[object Promise]";
  };

  Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false; // ensure the untrusted promise makes at most a
    // single call to one of the callbacks

    function _fulfilled(value) {
      try {
        return typeof fulfilled === "function" ? fulfilled(value) : value;
      } catch (exception) {
        return reject(exception);
      }
    }

    function _rejected(exception) {
      if (typeof rejected === "function") {
        makeStackTraceLong(exception, self);

        try {
          return rejected(exception);
        } catch (newException) {
          return reject(newException);
        }
      }

      return reject(exception);
    }

    function _progressed(value) {
      return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
      self.promiseDispatch(function (value) {
        if (done) {
          return;
        }

        done = true;
        deferred.resolve(_fulfilled(value));
      }, "when", [function (exception) {
        if (done) {
          return;
        }

        done = true;
        deferred.resolve(_rejected(exception));
      }]);
    }); // Progress propagator need to be attached in the current tick.

    self.promiseDispatch(void 0, "when", [void 0, function (value) {
      var newValue;
      var threw = false;

      try {
        newValue = _progressed(value);
      } catch (e) {
        threw = true;

        if (Q.onerror) {
          Q.onerror(e);
        } else {
          throw e;
        }
      }

      if (!threw) {
        deferred.notify(newValue);
      }
    }]);
    return deferred.promise;
  };

  Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
  };
  /**
   * Works almost like "finally", but not called for rejections.
   * Original resolution value is passed through callback unaffected.
   * Callback may return a promise that will be awaited for.
   * @param {Function} callback
   * @returns {Q.Promise}
   * @example
   * doSomething()
   *   .then(...)
   *   .tap(console.log)
   *   .then(...);
   */


  Promise.prototype.tap = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
      return callback.fcall(value).thenResolve(value);
    });
  };
  /**
   * Registers an observer on a promise.
   *
   * Guarantees:
   *
   * 1. that fulfilled and rejected will be called only once.
   * 2. that either the fulfilled callback or the rejected callback will be
   *    called, but not both.
   * 3. that fulfilled and rejected will not be called in this turn.
   *
   * @param value      promise or immediate reference to observe
   * @param fulfilled  function to be called with the fulfilled value
   * @param rejected   function to be called with the rejection exception
   * @param progressed function to be called on any progress notifications
   * @return promise for the return value from the invoked callback
   */


  Q.when = when;

  function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
  }

  Promise.prototype.thenResolve = function (value) {
    return this.then(function () {
      return value;
    });
  };

  Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
  };

  Promise.prototype.thenReject = function (reason) {
    return this.then(function () {
      throw reason;
    });
  };

  Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
  };
  /**
   * If an object is not a promise, it is as "near" as possible.
   * If a promise is rejected, it is as "near" as possible too.
   * If it???s a fulfilled promise, the fulfillment value is nearer.
   * If it???s a deferred promise and the deferred has been resolved, the
   * resolution is "nearer".
   * @param object
   * @returns most resolved (nearest) form of the object
   */
  // XXX should we re-do this?


  Q.nearer = nearer;

  function nearer(value) {
    if (isPromise(value)) {
      var inspected = value.inspect();

      if (inspected.state === "fulfilled") {
        return inspected.value;
      }
    }

    return value;
  }
  /**
   * @returns whether the given object is a promise.
   * Otherwise it is a fulfilled value.
   */


  Q.isPromise = isPromise;

  function isPromise(object) {
    return object instanceof Promise;
  }

  Q.isPromiseAlike = isPromiseAlike;

  function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
  }
  /**
   * @returns whether the given object is a pending promise, meaning not
   * fulfilled or rejected.
   */


  Q.isPending = isPending;

  function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
  }

  Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
  };
  /**
   * @returns whether the given object is a value or fulfilled
   * promise.
   */


  Q.isFulfilled = isFulfilled;

  function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
  }

  Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
  };
  /**
   * @returns whether the given object is a rejected promise.
   */


  Q.isRejected = isRejected;

  function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
  }

  Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
  }; //// BEGIN UNHANDLED REJECTION TRACKING
  // This promise library consumes exceptions thrown in handlers so they can be
  // handled by a subsequent promise.  The exceptions get added to this array when
  // they are created, and removed when they are handled.  Note that in ES6 or
  // shimmed environments, this would naturally be a `Set`.


  var unhandledReasons = [];
  var unhandledRejections = [];
  var reportedUnhandledRejections = [];
  var trackUnhandledRejections = true;

  function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
      trackUnhandledRejections = true;
    }
  }

  function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
      return;
    }

    if (typeof process === "object" && typeof process.emit === "function") {
      Q.nextTick.runAfter(function () {
        if (array_indexOf(unhandledRejections, promise) !== -1) {
          process.emit("unhandledRejection", reason, promise);
          reportedUnhandledRejections.push(promise);
        }
      });
    }

    unhandledRejections.push(promise);

    if (reason && typeof reason.stack !== "undefined") {
      unhandledReasons.push(reason.stack);
    } else {
      unhandledReasons.push("(no stack) " + reason);
    }
  }

  function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
      return;
    }

    var at = array_indexOf(unhandledRejections, promise);

    if (at !== -1) {
      if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
          var atReport = array_indexOf(reportedUnhandledRejections, promise);

          if (atReport !== -1) {
            process.emit("rejectionHandled", unhandledReasons[at], promise);
            reportedUnhandledRejections.splice(atReport, 1);
          }
        });
      }

      unhandledRejections.splice(at, 1);
      unhandledReasons.splice(at, 1);
    }
  }

  Q.resetUnhandledRejections = resetUnhandledRejections;

  Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
  };

  Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
  };

  resetUnhandledRejections(); //// END UNHANDLED REJECTION TRACKING

  /**
   * Constructs a rejected promise.
   * @param reason value describing the failure
   */

  Q.reject = reject;

  function reject(reason) {
    var rejection = Promise({
      "when": function (rejected) {
        // note that the error has been handled
        if (rejected) {
          untrackRejection(this);
        }

        return rejected ? rejected(reason) : this;
      }
    }, function fallback() {
      return this;
    }, function inspect() {
      return {
        state: "rejected",
        reason: reason
      };
    }); // Note that the reason has not been handled.

    trackRejection(rejection, reason);
    return rejection;
  }
  /**
   * Constructs a fulfilled promise for an immediate reference.
   * @param value immediate reference
   */


  Q.fulfill = fulfill;

  function fulfill(value) {
    return Promise({
      "when": function () {
        return value;
      },
      "get": function (name) {
        return value[name];
      },
      "set": function (name, rhs) {
        value[name] = rhs;
      },
      "delete": function (name) {
        delete value[name];
      },
      "post": function (name, args) {
        // Mark Miller proposes that post with no name should apply a
        // promised function.
        if (name === null || name === void 0) {
          return value.apply(void 0, args);
        } else {
          return value[name].apply(value, args);
        }
      },
      "apply": function (thisp, args) {
        return value.apply(thisp, args);
      },
      "keys": function () {
        return object_keys(value);
      }
    }, void 0, function inspect() {
      return {
        state: "fulfilled",
        value: value
      };
    });
  }
  /**
   * Converts thenables to Q promises.
   * @param promise thenable promise
   * @returns a Q promise
   */


  function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
      try {
        promise.then(deferred.resolve, deferred.reject, deferred.notify);
      } catch (exception) {
        deferred.reject(exception);
      }
    });
    return deferred.promise;
  }
  /**
   * Annotates an object such that it will never be
   * transferred away from this process over any promise
   * communication channel.
   * @param object
   * @returns promise a wrapping of that object that
   * additionally responds to the "isDef" message
   * without a rejection.
   */


  Q.master = master;

  function master(object) {
    return Promise({
      "isDef": function () {}
    }, function fallback(op, args) {
      return dispatch(object, op, args);
    }, function () {
      return Q(object).inspect();
    });
  }
  /**
   * Spreads the values of a promised array of arguments into the
   * fulfillment callback.
   * @param fulfilled callback that receives variadic arguments from the
   * promised array
   * @param rejected callback that receives the exception if the promise
   * is rejected.
   * @returns a promise for the return value or thrown exception of
   * either callback.
   */


  Q.spread = spread;

  function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
  }

  Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
      return fulfilled.apply(void 0, array);
    }, rejected);
  };
  /**
   * The async function is a decorator for generator functions, turning
   * them into asynchronous generators.  Although generators are only part
   * of the newest ECMAScript 6 drafts, this code does not cause syntax
   * errors in older engines.  This code should continue to work and will
   * in fact improve over time as the language improves.
   *
   * ES6 generators are currently part of V8 version 3.19 with the
   * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
   * for longer, but under an older Python-inspired form.  This function
   * works on both kinds of generators.
   *
   * Decorates a generator function such that:
   *  - it may yield promises
   *  - execution will continue when that promise is fulfilled
   *  - the value of the yield expression will be the fulfilled value
   *  - it returns a promise for the return value (when the generator
   *    stops iterating)
   *  - the decorated function returns a promise for the return value
   *    of the generator or the first rejected promise among those
   *    yielded.
   *  - if an error is thrown in the generator, it propagates through
   *    every following yield until it is caught, or until it escapes
   *    the generator function altogether, and is translated into a
   *    rejection for the promise returned by the decorated generator.
   */


  Q.async = async;

  function async(makeGenerator) {
    return function () {
      // when verb is "send", arg is a value
      // when verb is "throw", arg is an exception
      function continuer(verb, arg) {
        var result; // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
        // engine that has a deployed base of browsers that support generators.
        // However, SM's generators use the Python-inspired semantics of
        // outdated ES6 drafts.  We would like to support ES6, but we'd also
        // like to make it possible to use generators in deployed browsers, so
        // we also support Python-style generators.  At some point we can remove
        // this block.

        if (typeof StopIteration === "undefined") {
          // ES6 Generators
          try {
            result = generator[verb](arg);
          } catch (exception) {
            return reject(exception);
          }

          if (result.done) {
            return Q(result.value);
          } else {
            return when(result.value, callback, errback);
          }
        } else {
          // SpiderMonkey Generators
          // FIXME: Remove this case when SM does ES6 generators.
          try {
            result = generator[verb](arg);
          } catch (exception) {
            if (isStopIteration(exception)) {
              return Q(exception.value);
            } else {
              return reject(exception);
            }
          }

          return when(result, callback, errback);
        }
      }

      var generator = makeGenerator.apply(this, arguments);
      var callback = continuer.bind(continuer, "next");
      var errback = continuer.bind(continuer, "throw");
      return callback();
    };
  }
  /**
   * The spawn function is a small wrapper around async that immediately
   * calls the generator and also ends the promise chain, so that any
   * unhandled errors are thrown instead of forwarded to the error
   * handler. This is useful because it's extremely common to run
   * generators at the top-level to work with libraries.
   */


  Q.spawn = spawn;

  function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
  } // FIXME: Remove this interface once ES6 generators are in SpiderMonkey.

  /**
   * Throws a ReturnValue exception to stop an asynchronous generator.
   *
   * This interface is a stop-gap measure to support generator return
   * values in older Firefox/SpiderMonkey.  In browsers that support ES6
   * generators like Chromium 29, just use "return" in your generator
   * functions.
   *
   * @param value the return value for the surrounding generator
   * @throws ReturnValue exception with the value.
   * @example
   * // ES6 style
   * Q.async(function* () {
   *      var foo = yield getFooPromise();
   *      var bar = yield getBarPromise();
   *      return foo + bar;
   * })
   * // Older SpiderMonkey style
   * Q.async(function () {
   *      var foo = yield getFooPromise();
   *      var bar = yield getBarPromise();
   *      Q.return(foo + bar);
   * })
   */


  Q["return"] = _return;

  function _return(value) {
    throw new QReturnValue(value);
  }
  /**
   * The promised function decorator ensures that any promise arguments
   * are settled and passed as values (`this` is also settled and passed
   * as a value).  It will also ensure that the result of a function is
   * always a promise.
   *
   * @example
   * var add = Q.promised(function (a, b) {
   *     return a + b;
   * });
   * add(Q(a), Q(B));
   *
   * @param {function} callback The function to decorate
   * @returns {function} a function that has been decorated.
   */


  Q.promised = promised;

  function promised(callback) {
    return function () {
      return spread([this, all(arguments)], function (self, args) {
        return callback.apply(self, args);
      });
    };
  }
  /**
   * sends a message to a value in a future turn
   * @param object* the recipient
   * @param op the name of the message operation, e.g., "when",
   * @param args further arguments to be forwarded to the operation
   * @returns result {Promise} a promise for the result of the operation
   */


  Q.dispatch = dispatch;

  function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
  }

  Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
      self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
  };
  /**
   * Gets the value of a property in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of property to get
   * @return promise for the property value
   */


  Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
  };

  Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
  };
  /**
   * Sets the value of a property in a future turn.
   * @param object    promise or immediate reference for object object
   * @param name      name of property to set
   * @param value     new value of property
   * @return promise for the return value
   */


  Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
  };

  Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
  };
  /**
   * Deletes a property in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of property to delete
   * @return promise for the return value
   */


  Q.del = // XXX legacy
  Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
  };

  Promise.prototype.del = // XXX legacy
  Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
  };
  /**
   * Invokes a method in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of method to invoke
   * @param value     a value to post, typically an array of
   *                  invocation arguments for promises that
   *                  are ultimately backed with `resolve` values,
   *                  as opposed to those backed with URLs
   *                  wherein the posted value can be any
   *                  JSON serializable object.
   * @return promise for the return value
   */
  // bound locally because it is used by other methods


  Q.mapply = // XXX As proposed by "Redsandro"
  Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
  };

  Promise.prototype.mapply = // XXX As proposed by "Redsandro"
  Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
  };
  /**
   * Invokes a method in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of method to invoke
   * @param ...args   array of invocation arguments
   * @return promise for the return value
   */


  Q.send = // XXX Mark Miller's proposed parlance
  Q.mcall = // XXX As proposed by "Redsandro"
  Q.invoke = function (object, name
  /*...args*/
  ) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
  };

  Promise.prototype.send = // XXX Mark Miller's proposed parlance
  Promise.prototype.mcall = // XXX As proposed by "Redsandro"
  Promise.prototype.invoke = function (name
  /*...args*/
  ) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
  };
  /**
   * Applies the promised function in a future turn.
   * @param object    promise or immediate reference for target function
   * @param args      array of application arguments
   */


  Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
  };

  Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
  };
  /**
   * Calls the promised function in a future turn.
   * @param object    promise or immediate reference for target function
   * @param ...args   array of application arguments
   */


  Q["try"] = Q.fcall = function (object
  /* ...args*/
  ) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
  };

  Promise.prototype.fcall = function
    /*...args*/
  () {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
  };
  /**
   * Binds the promised function, transforming return values into a fulfilled
   * promise and thrown errors into a rejected one.
   * @param object    promise or immediate reference for target function
   * @param ...args   array of application arguments
   */


  Q.fbind = function (object
  /*...args*/
  ) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
      return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
    };
  };

  Promise.prototype.fbind = function
    /*...args*/
  () {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
      return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
    };
  };
  /**
   * Requests the names of the owned properties of a promised
   * object in a future turn.
   * @param object    promise or immediate reference for target object
   * @return promise for the keys of the eventually settled object
   */


  Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
  };

  Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
  };
  /**
   * Turns an array of promises into a promise for an array.  If any of
   * the promises gets rejected, the whole array is rejected immediately.
   * @param {Array*} an array (or promise for an array) of values (or
   * promises for values)
   * @returns a promise for an array of the corresponding values
   */
  // By Mark Miller
  // http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled


  Q.all = all;

  function all(promises) {
    return when(promises, function (promises) {
      var pendingCount = 0;
      var deferred = defer();
      array_reduce(promises, function (undefined, promise, index) {
        var snapshot;

        if (isPromise(promise) && (snapshot = promise.inspect()).state === "fulfilled") {
          promises[index] = snapshot.value;
        } else {
          ++pendingCount;
          when(promise, function (value) {
            promises[index] = value;

            if (--pendingCount === 0) {
              deferred.resolve(promises);
            }
          }, deferred.reject, function (progress) {
            deferred.notify({
              index: index,
              value: progress
            });
          });
        }
      }, void 0);

      if (pendingCount === 0) {
        deferred.resolve(promises);
      }

      return deferred.promise;
    });
  }

  Promise.prototype.all = function () {
    return all(this);
  };
  /**
   * Returns the first resolved promise of an array. Prior rejected promises are
   * ignored.  Rejects only if all promises are rejected.
   * @param {Array*} an array containing values or promises for values
   * @returns a promise fulfilled with the value of the first resolved promise,
   * or a rejected promise if all promises are rejected.
   */


  Q.any = any;

  function any(promises) {
    if (promises.length === 0) {
      return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
      var promise = promises[index];
      pendingCount++;
      when(promise, onFulfilled, onRejected, onProgress);

      function onFulfilled(result) {
        deferred.resolve(result);
      }

      function onRejected(err) {
        pendingCount--;

        if (pendingCount === 0) {
          var rejection = err || new Error("" + err);
          rejection.message = "Q can't get fulfillment value from any promise, all " + "promises were rejected. Last error message: " + rejection.message;
          deferred.reject(rejection);
        }
      }

      function onProgress(progress) {
        deferred.notify({
          index: index,
          value: progress
        });
      }
    }, undefined);
    return deferred.promise;
  }

  Promise.prototype.any = function () {
    return any(this);
  };
  /**
   * Waits for all promises to be settled, either fulfilled or
   * rejected.  This is distinct from `all` since that would stop
   * waiting at the first rejection.  The promise returned by
   * `allResolved` will never be rejected.
   * @param promises a promise for an array (or an array) of promises
   * (or values)
   * @return a promise for an array of promises
   */


  Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");

  function allResolved(promises) {
    return when(promises, function (promises) {
      promises = array_map(promises, Q);
      return when(all(array_map(promises, function (promise) {
        return when(promise, noop, noop);
      })), function () {
        return promises;
      });
    });
  }

  Promise.prototype.allResolved = function () {
    return allResolved(this);
  };
  /**
   * @see Promise#allSettled
   */


  Q.allSettled = allSettled;

  function allSettled(promises) {
    return Q(promises).allSettled();
  }
  /**
   * Turns an array of promises into a promise for an array of their states (as
   * returned by `inspect`) when they have all settled.
   * @param {Array[Any*]} values an array (or promise for an array) of values (or
   * promises for values)
   * @returns {Array[State]} an array of states for the respective values.
   */


  Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
      return all(array_map(promises, function (promise) {
        promise = Q(promise);

        function regardless() {
          return promise.inspect();
        }

        return promise.then(regardless, regardless);
      }));
    });
  };
  /**
   * Captures the failure of a promise, giving an oportunity to recover
   * with a callback.  If the given promise is fulfilled, the returned
   * promise is fulfilled.
   * @param {Any*} promise for something
   * @param {Function} callback to fulfill the returned promise if the
   * given promise is rejected
   * @returns a promise for the return value of the callback
   */


  Q.fail = // XXX legacy
  Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
  };

  Promise.prototype.fail = // XXX legacy
  Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
  };
  /**
   * Attaches a listener that can respond to progress notifications from a
   * promise's originating deferred. This listener receives the exact arguments
   * passed to ``deferred.notify``.
   * @param {Any*} promise for something
   * @param {Function} callback to receive any progress notifications
   * @returns the given promise, unchanged
   */


  Q.progress = progress;

  function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
  }

  Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
  };
  /**
   * Provides an opportunity to observe the settling of a promise,
   * regardless of whether the promise is fulfilled or rejected.  Forwards
   * the resolution to the returned promise when the callback is done.
   * The callback can return a promise to defer completion.
   * @param {Any*} promise
   * @param {Function} callback to observe the resolution of the given
   * promise, takes no arguments.
   * @returns a promise for the resolution of the given promise when
   * ``fin`` is done.
   */


  Q.fin = // XXX legacy
  Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
  };

  Promise.prototype.fin = // XXX legacy
  Promise.prototype["finally"] = function (callback) {
    if (!callback || typeof callback.apply !== "function") {
      throw new Error("Q can't apply finally callback");
    }

    callback = Q(callback);
    return this.then(function (value) {
      return callback.fcall().then(function () {
        return value;
      });
    }, function (reason) {
      // TODO attempt to recycle the rejection with "this".
      return callback.fcall().then(function () {
        throw reason;
      });
    });
  };
  /**
   * Terminates a chain of promises, forcing rejections to be
   * thrown as exceptions.
   * @param {Any*} promise at the end of a chain of promises
   * @returns nothing
   */


  Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
  };

  Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
      // forward to a future turn so that ``when``
      // does not catch it and turn it into a rejection.
      Q.nextTick(function () {
        makeStackTraceLong(error, promise);

        if (Q.onerror) {
          Q.onerror(error);
        } else {
          throw error;
        }
      });
    }; // Avoid unnecessary `nextTick`ing via an unnecessary `when`.


    var promise = fulfilled || rejected || progress ? this.then(fulfilled, rejected, progress) : this;

    if (typeof process === "object" && process && process.domain) {
      onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
  };
  /**
   * Causes a promise to be rejected if it does not get fulfilled before
   * some milliseconds time out.
   * @param {Any*} promise
   * @param {Number} milliseconds timeout
   * @param {Any*} custom error message or Error object (optional)
   * @returns a promise for the resolution of the given promise if it is
   * fulfilled before the timeout, otherwise rejected.
   */


  Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
  };

  Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
      if (!error || "string" === typeof error) {
        error = new Error(error || "Timed out after " + ms + " ms");
        error.code = "ETIMEDOUT";
      }

      deferred.reject(error);
    }, ms);
    this.then(function (value) {
      clearTimeout(timeoutId);
      deferred.resolve(value);
    }, function (exception) {
      clearTimeout(timeoutId);
      deferred.reject(exception);
    }, deferred.notify);
    return deferred.promise;
  };
  /**
   * Returns a promise for the given value (or promised value), some
   * milliseconds after it resolved. Passes rejections immediately.
   * @param {Any*} promise
   * @param {Number} milliseconds
   * @returns a promise for the resolution of the given promise after milliseconds
   * time has elapsed since the resolution of the given promise.
   * If the given promise rejects, that is passed immediately.
   */


  Q.delay = function (object, timeout) {
    if (timeout === void 0) {
      timeout = object;
      object = void 0;
    }

    return Q(object).delay(timeout);
  };

  Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
      var deferred = defer();
      setTimeout(function () {
        deferred.resolve(value);
      }, timeout);
      return deferred.promise;
    });
  };
  /**
   * Passes a continuation to a Node function, which is called with the given
   * arguments provided as an array, and returns a promise.
   *
   *      Q.nfapply(FS.readFile, [__filename])
   *      .then(function (content) {
   *      })
   *
   */


  Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
  };

  Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Passes a continuation to a Node function, which is called with the given
   * arguments provided individually, and returns a promise.
   * @example
   * Q.nfcall(FS.readFile, __filename)
   * .then(function (content) {
   * })
   *
   */


  Q.nfcall = function (callback
  /*...args*/
  ) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
  };

  Promise.prototype.nfcall = function
    /*...args*/
  () {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Wraps a NodeJS continuation passing function and returns an equivalent
   * version that returns a promise.
   * @example
   * Q.nfbind(FS.readFile, __filename)("utf-8")
   * .then(console.log)
   * .done()
   */


  Q.nfbind = Q.denodeify = function (callback
  /*...args*/
  ) {
    if (callback === undefined) {
      throw new Error("Q can't wrap an undefined function");
    }

    var baseArgs = array_slice(arguments, 1);
    return function () {
      var nodeArgs = baseArgs.concat(array_slice(arguments));
      var deferred = defer();
      nodeArgs.push(deferred.makeNodeResolver());
      Q(callback).fapply(nodeArgs).fail(deferred.reject);
      return deferred.promise;
    };
  };

  Promise.prototype.nfbind = Promise.prototype.denodeify = function
    /*...args*/
  () {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
  };

  Q.nbind = function (callback, thisp
  /*...args*/
  ) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
      var nodeArgs = baseArgs.concat(array_slice(arguments));
      var deferred = defer();
      nodeArgs.push(deferred.makeNodeResolver());

      function bound() {
        return callback.apply(thisp, arguments);
      }

      Q(bound).fapply(nodeArgs).fail(deferred.reject);
      return deferred.promise;
    };
  };

  Promise.prototype.nbind = function
    /*thisp, ...args*/
  () {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
  };
  /**
   * Calls a method of a Node-style object that accepts a Node-style
   * callback with a given array of arguments, plus a provided callback.
   * @param object an object that has the named method
   * @param {String} name name of the method of object
   * @param {Array} args arguments to pass to the method; the callback
   * will be provided by Q and appended to these arguments.
   * @returns a promise for the value or error
   */


  Q.nmapply = // XXX As proposed by "Redsandro"
  Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
  };

  Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
  Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Calls a method of a Node-style object that accepts a Node-style
   * callback, forwarding the given variadic arguments, plus a provided
   * callback argument.
   * @param object an object that has the named method
   * @param {String} name name of the method of object
   * @param ...args arguments to pass to the method; the callback will
   * be provided by Q and appended to these arguments.
   * @returns a promise for the value or error
   */


  Q.nsend = // XXX Based on Mark Miller's proposed "send"
  Q.nmcall = // XXX Based on "Redsandro's" proposal
  Q.ninvoke = function (object, name
  /*...args*/
  ) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };

  Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
  Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
  Promise.prototype.ninvoke = function (name
  /*...args*/
  ) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * If a function would like to support both Node continuation-passing-style and
   * promise-returning-style, it can end its internal promise chain with
   * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
   * elects to use a nodeback, the result will be sent there.  If they do not
   * pass a nodeback, they will receive the result promise.
   * @param object a result (or a promise for a result)
   * @param {Function} nodeback a Node.js-style callback
   * @returns either the promise or nothing
   */


  Q.nodeify = nodeify;

  function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
  }

  Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
      this.then(function (value) {
        Q.nextTick(function () {
          nodeback(null, value);
        });
      }, function (error) {
        Q.nextTick(function () {
          nodeback(error);
        });
      });
    } else {
      return this;
    }
  };

  Q.noConflict = function () {
    throw new Error("Q.noConflict only works when Q is used as a global");
  }; // All code before this point will be filtered from stack traces.


  var qEndingLine = captureLine();
  return Q;
});
},{"process":"node_modules/process/browser.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _q = require("q");

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//text style game name
var tconfig = {
  style: {
    fontSize: '94px',
    fontFamily: 'myFirstFont'
  }
}; //text style play button

var playButtonText = {
  style: {
    fontFamily: 'playFont',
    fontSize: '64px'
  }
}; //variable definition

var noti_txt1;
var noti_txt2;

var MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  var _super = _createSuper(MenuScene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.MENU
    });
  }

  _createClass(MenuScene, [{
    key: "create",
    value: function create() {
      var _this = this;

      //create audio
      this.sound.pauseOnBlur = false;
      this.sound.play("menu_music", {
        loop: true
      });
      var noti_bg = this.add.rectangle(this.game.renderer.width / 2, this.game.renderer.height / 4);
      noti_txt1 = this.add.text(-10, this.game.renderer.height / 7, "ROAD", tconfig.style);
      noti_txt2 = this.add.text(600, this.game.renderer.height / 3, "CONNECT", tconfig.style);
      this.time.addEvent({
        delay: 1000,
        loop: false,
        callback: function callback() {
          var play_Text = _this.add.text(0, 0, "PLAY", playButtonText.style);

          Phaser.Display.Align.To.BottomCenter(play_Text, noti_bg, 0, _this.game.renderer.height / 2.5);
          play_Text.setInteractive();
          play_Text.on("pointerup", function () {
            _this.time.addEvent({
              delay: 300,
              loop: false,
              callback: function callback() {
                _this.scene.start(_CST.CST.SCENES.PLAY);
              }
            });
          });
        }
      });
      this.time.addEvent({
        delay: 300,
        loop: false,
        callback: function callback() {
          var tween = _this.tweens.add({
            targets: noti_txt1,
            x: _this.game.renderer.width / 3,
            ease: 'Power1',
            duration: 1000,
            repeat: 0,
            onStart: function onStart() {},
            onComplete: function onComplete() {}
          });
        }
      });
      this.time.addEvent({
        delay: 300,
        loop: false,
        callback: function callback() {
          var tween = _this.tweens.add({
            targets: noti_txt2,
            x: _this.game.renderer.width / 4.6,
            ease: 'Power1',
            duration: 1000,
            repeat: 0,
            onStart: function onStart() {},
            onComplete: function onComplete() {}
          });
        }
      });
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"q":"node_modules/q/q.js","../CST":"src/CST.js"}],"src/scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
var buttons = [];
var columns = 4; // rows of thumbnails in each page

var rows = 1;
var spacing = 20;
var thumbWidth = 90; // thumbnail height, in pizels

var thumbHeight = 90;

var PlayScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  var _super = _createSuper(PlayScene);

  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.PLAY
    });
  }

  _createClass(PlayScene, [{
    key: "create",
    value: function create() {
      var _this = this;

      var rowLength = thumbWidth * columns + spacing * (columns - 1);
      var colHeight = thumbHeight * columns + spacing * (columns - 1);
      var topMargin = (this.game.renderer.width - colHeight) / 2;
      var level_select = this.add.text(0, 0, "LEVEL SELECT", levelText.style).setDepth(1);
      var level_bg = this.add.rectangle(this.game.renderer.width / 2, this.game.renderer.height / 6, this.game.renderer.width - 200, this.game.renderer.height + 1000, 0xffffff, .2).setDepth(0);
      Phaser.Display.Align.In.Center(level_select, level_bg);

      for (var i = 0; i < columns; i++) {
        var _loop = function _loop() {
          var image = _this.add.image(_this.game.renderer.width / 3 + i * thumbWidth, topMargin + j * (thumbHeight + spacing), "level_button");

          console.log("image");

          var button = _this.add.text(_this.game.renderer.width / 3 - 7 + i * thumbWidth, topMargin - 10 + j * (thumbHeight + spacing), i + 1, level.style);

          button.setName(i + 1);
          buttons.push(button);
          button.setInteractive();
          button.on("pointerup", function () {
            image.setTexture("level_button_click");
            _this.sound.pauseOnBlur = false;

            _this.sound.play("click_music", {
              loop: false
            });

            _this.time.addEvent({
              delay: 100,
              loop: false,
              callback: function callback() {
                _this.scene.start(_CST.CST.SCENES.LEVELONE, button);
              }
            });
          });
        };

        for (var j = 0; j < rows; j++) {
          _loop();
        }
      }
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LevelOne = require("./scenes/LevelOne");

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _PlayScene = require("./scenes/PlayScene");

/** @type {import(../typings/phaser)} */
var game = new Phaser.Game({
  width: 800,
  height: 700,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _PlayScene.PlayScene, _LevelOne.LevelOne],
  backgroundColor: '#23BF8E',
  render: {
    pixelArt: true
  }
});
},{"./scenes/LevelOne":"src/scenes/LevelOne.js","./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/PlayScene":"src/scenes/PlayScene.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54105" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map