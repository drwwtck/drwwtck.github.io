$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms

/*
When platform is moving up and down... min x and max x must be equal to the x value
When platform is moving left or right... min y and max y must be equal to y value
When platform is moving on both axis.... suffer and figure it out
*/

    // createPlatform(600, 650, 200, 10, "white");
    // createPlatform(900, 550, 100, 10, "#dafbff");
    // createPlatform(410, 410, 300, 10, "white");
    // createPlatform(200, 300, 100, 10, "white");
    // createPlatform(310, 175, 600, 10, "white");
    // createPlatform(1000, 200, 100, 10, "white");
    // createPlatform(1200, 150, 200, 10, "white");
    // createFakePlatform(800, 450, 30, 10, "white");
    createPlatform(150, 650, 150, 10, "white");
    createPlatform(300, 600, 200, 10, "white", 300, 300, 0, 400, 600, 0.5);
    createPlatform(600, 400, 200, 10, "white");
    createBadPlatform(600, 550, 200, 10, "white");
    createPlatform(1000, 300, 100, 10, "white", 1000, 1000, 0, 200, 400, 1);

    createPlatform(1250, 200, 10, canvas.height);
    // TODO 3 - Create Collectables

    // createCollectable("cinna", 200, 550, 0, 0);
    // createCollectable("cinna", 600, 200, 0, 0);
    // createCollectable("cinna", 1350, 100, 0, 0);
    createCollectable("cinna", 1310, 700, 0, 0);
    createCollectable("cinna", 600, 200, 0, 0, 600, 800, 2)
    createCollectable("cinna", 225, 500, 0, 0)
    // TODO 4 - Create Cannons

    createCannon("right", 650, 2000, 20, 10);
    createCannon("left", 50, 2000, 20, 10);
    // createCannon("bottom", 400, 3000);

    createCannon("bottom", 300, 1000, 20, 10, 300, 900, 2)
  }

  registerSetup(setup);
});
