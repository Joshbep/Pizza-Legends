// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
// explanation on sprite sheet https://www.codeandweb.com/what-is-a-sprite-sheet,
// how to create a sprite sheet https://www.codeandweb.com/texturepacker/tutorials/how-to-create-a-sprite-sheet,
// https://itch.io/game-assets/tag-top-down is where I am finding assets
// element is the most general base class from which all element objects in a document inherit
// element inherits properties from its parent interface

 class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
   this.map = null;
 }
 startGameLoop() {
   const step = () => {
    //Clear off the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //Draw Lower layer
    this.map.drawLowerImage(this.ctx);
    // Draw Game Objects
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
    Object.values(this.map.gameObjects).forEach(object => {
      object.x += 0.02;
      object.sprite.draw(this.ctx);
    })
    //Draw Upper layer
    this.map.drawUpperImage(this.ctx);
    //https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // this method is basically used when your ready to update your animation on screen
     requestAnimationFrame(() => {
      step();
     })
   }
   step();
 }
 init() {
  this.map = new OverWorldMap(window.OverworldMaps.Kitchen);
  this.startGameLoop();
 }
}
