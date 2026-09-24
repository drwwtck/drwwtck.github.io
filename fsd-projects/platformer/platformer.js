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
    // toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(600, 650, 200, 10, "white");
    createPlatform(900, 550, 100, 10, "#dafbff");
    createPlatform(410, 410, 300, 10, "white");
    createPlatform(200, 300, 100, 10, "white");
    createPlatform(310, 175, 600, 10, "white");
    createPlatform(1000, 200, 100, 10, "white");
    createPlatform(1200, 150, 200, 10, "white");
    createFakePlatform(800, 450, 30, 10, "white");

    // TODO 3 - Create Collectables

    createCollectable("cinna", 200, 550, 0, 0);
    createCollectable("cinna", 600, 200, 0, 0);
    createCollectable("cinna", 1350, 100, 0, 0);

    // TODO 4 - Create Cannons

    createCannon("right", 650, 2000);
    createCannon("left", 50, 2000);
    createCannon("bottom", 400, 3000);
  }

  registerSetup(setup);
});
