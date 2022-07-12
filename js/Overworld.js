// element is the most general base class from which all element objects in a document inherit
// element inherits properties from its parent interface

class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
  }
  init() {
    const image = new Image ();
    image.onload = () => {
      this.ctx.drawImage(image,0,0)
    };
    image.src = "./images/maps/DemoLower.png";

    const x = 0;
    const y = 0;
    const hero = new Image();
    hero.onload = () => {
    this.ctx.drawImage(
      hero,
      0,
      0,
      32,
      32,
      x,
      y
      )
    }
    hero.src = "./images/characters/people/hero.png"


  }
}
