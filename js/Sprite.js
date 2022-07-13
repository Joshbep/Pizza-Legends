class Sprite {
  constructor(config) {

    // set up image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
    this.isLoaded = true;
    }

    //shadow
    this.shadow = new Image();
    this.useShadow = true;
    if (this.useShadow) {
      this.shadow.src = "./images/characters/shadow.png"
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    }

    // configure animtaion and initial state
    this.animations = config.animations || {
      idleDown: [
        [0,0]
      ]
    }
    this.currentAnimation = config.currentAnimation || 'idleDown';
    this.currentAnimationFrame = 0;

    // reference the game object
    this.gameObject = config.gameObject;
  }
  draw(ctx) {
    //nudging our sprite
    const x = this.gameObject.x * 16 - 8; //character is 32x32, but map is 16x 16 blocks. this compensates for the grid itself
    const y = this.gameObject.y * 16 - 18; //subtracting is to try to get him into the 16x16 block itself. used measuring tool to see how many pixels to subtract by on axis

    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)

    this.isLoaded && ctx.drawImage(this.image,
      0,0, //left cut or x coordinate and then top cut y coordinate
      32,32, // width of cut and height of cut
      x,y,
      32,32 //this basically says to draw it the same size as crop, tried making bigger, but looks super pixelated
    )
  }
}
