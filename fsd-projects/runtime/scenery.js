// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 400, width: 100, height: 300, speedX: -3 },
      { x: 300, width: 100, height: 200, speedX: -3.5 },
      { x: 550, width: 100, height: 290, speedX: -3 },
      { x: 500, width: 100, height: 250, speedX: -3.5 },
      { x: 950, width: 100, height: 350, speedX: -3 },
      { x: 725, width: 100, height: 250, speedX: -3 },
      { x: 650, width: 100, height: 350, speedX: -4 },
      { x: 625, width: 100, height: 200, speedX: -4.5 },
      { x: 750, width: 100, height: 200, speedX: -5 },
      { x: 850, width: 100, height: 300, speedX: -5 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 50, width: 50, height: 150, speedX: 0 },
      { x: 300, width: 50, height: 150, speedX: 0 },
      { x: 550, width: 50, height: 150, speedX: 0 },
      { x: 800, width: 50, height: 150, speedX: 0 },
      { x: 1050, width: 50, height: 150, speedX: 0 },
      { x: 1300, width: 50, height: 150, speedX: 0 },
    ],
  },
};
