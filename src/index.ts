import "./index.css";
import { XrController } from "./controllers/xr.controller";
import { LockController } from "./controllers/lock.controller";
import { MouseController } from "./controllers/mouse.controller";
import { KeyboardController } from "./controllers/keyboard.controller";
import { WebController } from "./controllers/web.controller";
import { scene } from "./components/scene";
import { ground } from "./components/ground";
import { directionalLight } from "./components/directional-light";
import { head, camera } from "./components/head";
import { leftHand } from "./components/left-hand";
import { rightHand } from "./components/right-hand";
import { ladder, ladderObject } from "./components/ladder";
import { renderer } from "./renderer";
import { leftHandFrame } from "./frames/left-hand.frame";
import { rightHandFrame } from "./frames/right-hand.frame";
import { fallFrame } from "./frames/fall.frame";
import { moveFrame } from "./frames/move.frame";
import { AudioController } from "./controllers/audio.controller";
import { equalizerV3 } from "./components/equalizer-v3";
import { equalizerV3Frame } from "./frames/equalizer-v3.frame";

scene.add(ground);
scene.add(directionalLight);
scene.add(head, leftHand, rightHand);
scene.add(ladder);
scene.add(equalizerV3);

const setAnimationLoop = () => {
  renderer.setAnimationLoop((time) => {
    leftHandFrame();
    const rhv3 = rightHandFrame();
    moveFrame(keyboardController);

    const uint8 = audioController.getFrequency();
    const max = Math.max(...uint8);
    const min = Math.min(...uint8);
    const diff = max - min;
    equalizerV3Frame(uint8, rhv3);

    /* NOT OK */
    // if (Math.floor(time / 1000) % 2 === 0) {
    //   ladder.position.z += diff / 100;
    // } else {
    //   ladder.position.z -= diff / 100;
    // }

    // if (max > 170) {
    //   ladder.rotation.y += max / 7000;
    // } else {
    //   ladder.rotation.y -= max / 7000;
    // }

    /* OK */
    const even = Math.floor(time / 1000) % 2 === 0;
    if (even) {
      ladder.rotation.y += diff / 7000;
    } else {
      ladder.rotation.y -= diff / 7000;
    }
    renderer.render(scene, camera);
  });
};

const xrController = new XrController(renderer);
const audioController = new AudioController();
const lockController = new LockController(
  xrController,
  audioController,
  renderer
);
const mouseController = new MouseController(head);
const keyboardController = new KeyboardController();
const webController = new WebController(
  xrController,
  lockController,
  audioController,
  setAnimationLoop
);
