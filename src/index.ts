import "./index.css";
import { XrController } from "./controllers/xr.controller";
import { LockController } from "./controllers/lock.controller";
import { MouseController } from "./controllers/mouse.controller";
import { KeyboardController } from "./controllers/keyboard.controller";
import { WebController } from "./controllers/web.controller";
import { scene } from "./components/scene";
import { ground } from "./components/ground";
// import { ambientLight } from "./components/ambient-light";
import { directionalLight } from "./components/directional-light";
import { head, camera } from "./components/head";
import { leftHand } from "./components/left-hand";
import { rightHand } from "./components/right-hand";
import { ladder } from "./components/ladder";
import { renderer } from "./renderer";
import { leftHandFrame } from "./frames/left-hand.frame";
import { rightHandFrame } from "./frames/right-hand.frame";
import { fallFrame } from "./frames/fall.frame";
import { moveFrame } from "./frames/move.frame";
import { AudioController } from "./controllers/audio.controller";
import { equalizerFrame } from "./frames/equalizer.frame";
import { equalizer, equalizerLeft } from "./components/equalizer";

scene.add(ground);
scene.add(directionalLight);
scene.add(head, leftHand, rightHand);
scene.add(ladder);
scene.add(equalizer, equalizerLeft);

const setAnimationLoop = () => {
  renderer.setAnimationLoop(() => {
    leftHandFrame();
    rightHandFrame();
    moveFrame(keyboardController);

    const uint8 = audioController.getFrequency();
    const max = Math.max(...uint8);
    if (max > 170) {
      ladder.rotation.y += max / 7000;
    } else {
      ladder.rotation.y -= max / 7000;
    }
    // const min = Math.min(...uint8);
    // const scale = Math.max(1, min / 64);
    // ladder.scale.set(scale, 1, scale);
    equalizerFrame(uint8);
    renderer.render(scene, camera);
  });
};

const xrController = new XrController(renderer);
const lockController = new LockController(xrController, renderer);
const mouseController = new MouseController(head);
const keyboardController = new KeyboardController();
const audioController = new AudioController();
const webController = new WebController(
  xrController,
  lockController,
  audioController,
  setAnimationLoop
);
