// explanation on sprite sheet https://www.codeandweb.com/what-is-a-sprite-sheet,
// how to create a sprite sheet https://www.codeandweb.com/texturepacker/tutorials/how-to-create-a-sprite-sheet,
// https://itch.io/game-assets/tag-top-down is where I am finding assets

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

    //Place some Game Objects
    const hero = new GameObject({
      x: 5,
      y: 6,
    })
    const npc1 = new GameObject({
      x: 7,
      y: 9,
      src: './images/characters/people/erio.png'
    })
    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc1.sprite.draw(this.ctx);
    }, 200)
  }

 }
