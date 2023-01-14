import "./index.css";
import { XrController } from "./controllers/xr.controller";
import { LockController } from "./controllers/lock.controller";
import { MouseController } from "./controllers/mouse.controller";
import { KeyboardController } from "./controllers/keyboard.controller";
import { WebController } from "./controllers/web.controller";
import { scene } from "./components/scene";
import { renderer } from "./renderer";
import { ground } from "./components/ground";
import { directionalLight } from "./components/directional-light";
import { head, camera } from "./components/head";
import { leftHand } from "./components/left-hand";
import { rightHand } from "./components/right-hand";
import { ladder } from "./components/ladder";
import { AudioController } from "./controllers/audio.controller";
import { equalizerV3 } from "./components/equalizer-v3";
import { centerPoint } from "./components/center-point";
import { leftHandFrame } from "./frames/left-hand.frame";
import { rightHandFrame } from "./frames/right-hand.frame";
import { moveFrame } from "./frames/move.frame";
import { equalizerV3Frame } from "./frames/equalizer-v3.frame";
import { boxEmitter } from "./box-emitter";
import { boxes } from "./components/boxes";
import { boxesFrame } from "./frames/boxes.frame";

scene.add(ground);
scene.add(directionalLight);
scene.add(head, leftHand, rightHand);
scene.add(ladder);
scene.add(equalizerV3);
scene.add(centerPoint);
scene.add(boxes);

export const animation = () => {
  renderer.setAnimationLoop(() => {
    leftHandFrame();
    rightHandFrame();
    moveFrame(keyboardController);

    const time = audioController.getTime();
    boxesFrame(time);
    const uint8 = audioController.getFrequency();
    // const max = Math.max(...uint8);
    // const min = Math.min(...uint8);
    // const diff = max - min;
    const hv3 = renderer.xr.getCamera().position;
    equalizerV3Frame(uint8, hv3);
    // equalizerV3.rotation.z += 0.01;

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
    // const even = Math.floor(time / 1000) % 2 === 0;
    // if (even) {
    //   ladder.rotation.y += diff / 7000;
    // } else {
    //   ladder.rotation.y -= diff / 7000;
    // }
    renderer.render(scene, camera);
  });
};

const audioController = new AudioController();
const xrController = new XrController(audioController);
const lockController = new LockController(xrController);
const mouseController = new MouseController();
const keyboardController = new KeyboardController();
const webController = new WebController(
  xrController,
  lockController,
  audioController,
  animation
);
