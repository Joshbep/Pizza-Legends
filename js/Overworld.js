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

    const x = 5; // x and y is where hero pops on map, with x and y axis
    const y = 6;
    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        0, // left cut
        0, // top cut
        32, // width of cut
        32, //height of cut
        x * 16 - 8, // character is 32x32, but map is 16x 16 blocks. this compensates for the grid itself
        y * 16 - 18, // subtracting is to try to get him into the 16x16 block itself. used measuring tool to see how many pixels to subtract by on axis
        32, //this basically says to draw it the same size as crop, tried making bigger, but looks super pixelated
        32
      )
    }
    hero.src = "./images/characters/people/hero.png";


  }

 }
