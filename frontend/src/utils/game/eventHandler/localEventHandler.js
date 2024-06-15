function localEventHandler(canvas, scene) {
  const redPaddle = scene.getObjectByName('redPaddle');
  const bluePaddle = scene.getObjectByName('bluePaddle');

  canvas.focus();
  const keyPressed = {
    w: false,
    s: false,
    a: false,
    d: false,
    up: false,
    down: false,
    left: false,
    right: false,
  };

  // 키보드 컨트롤
  canvas.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW') {
      keyPressed.w = true;
    }
    if (e.code === 'KeyS') {
      keyPressed.s = true;
    }
    if (e.code === 'KeyA') {
      keyPressed.a = true;
    }
    if (e.code === 'KeyD') {
      keyPressed.d = true;
    }
    if (e.code === 'ArrowUp') {
      keyPressed.up = true;
    }
    if (e.code === 'ArrowDown') {
      keyPressed.down = true;
    }
    if (e.code === 'ArrowLeft') {
      keyPressed.left = true;
    }
    if (e.code === 'ArrowRight') {
      keyPressed.right = true;
    }
  });

  canvas.addEventListener('keyup', (e) => {
    if (e.code === 'KeyW') keyPressed.w = false;
    if (e.code === 'KeyS') keyPressed.s = false;
    if (e.code === 'KeyA') keyPressed.a = false;
    if (e.code === 'KeyD') keyPressed.d = false;
    if (e.code === 'ArrowUp') keyPressed.up = false;
    if (e.code === 'ArrowDown') keyPressed.down = false;
    if (e.code === 'ArrowLeft') keyPressed.left = false;
    if (e.code === 'ArrowRight') keyPressed.right = false;
  });

  const movePaddle = () => {
    const move = 0.2;
    if (keyPressed.w) {
      if (redPaddle.position.y < 5) redPaddle.position.y += move;
    }
    if (keyPressed.s) {
      if (redPaddle.position.y > -5) redPaddle.position.y -= move;
    }
    if (keyPressed.a) {
      if (redPaddle.position.z < 7.5) redPaddle.position.z += move;
    }
    if (keyPressed.d) {
      if (redPaddle.position.z > -7.5) redPaddle.position.z -= move;
    }
    if (keyPressed.up) {
      if (bluePaddle.position.y < 5) bluePaddle.position.y += move;
    }
    if (keyPressed.down) {
      if (bluePaddle.position.y > -5) bluePaddle.position.y -= move;
    }
    if (keyPressed.left) {
      if (bluePaddle.position.z > -7.5) bluePaddle.position.z -= move;
    }
    if (keyPressed.right) {
      if (bluePaddle.position.z < 7.5) bluePaddle.position.z += move;
    }
  };

  setInterval(movePaddle, 10);
}

export default localEventHandler;