import "./index.css";
import { XrController } from "./controllers/xr.controller";
// import { LockController } from "./controllers/lock.controller";
import { MouseController } from "./controllers/mouse.controller";
import { KeyboardController } from "./controllers/keyboard.controller";
import { WebController } from "./controllers/web.controller";
import { scene } from "./components/scene";
import { renderer } from "./renderer";
import { ground } from "./components/ground";
import { head, camera } from "./components/head";
import { rightHand } from "./components/right-hand";
import { AudioController } from "./controllers/audio.controller";
import { equalizerV3 } from "./components/equalizer-v3";
import { rightHandFrame } from "./frames/right-hand.frame";
import { moveFrame } from "./frames/move.frame";
import { equalizerV3Frame } from "./frames/equalizer-v3.frame";
import { boxes } from "./components/boxes";
import { boxesFrame } from "./frames/boxes.frame";
import { particles } from "./components/particles";
import { particlesFrame } from "./frames/particles.frame";
import { pointLight } from "./point-light";

scene.add(ground);
scene.add(head, rightHand);
scene.add(equalizerV3);
scene.add(boxes);
scene.add(particles);
scene.add(pointLight);

export const animation = () => {
  renderer.setAnimationLoop(() => {
    rightHandFrame();
    moveFrame(keyboardController);

    particlesFrame();

    const time = audioController.getTime();
    boxesFrame(time);
    const uint8 = audioController.getFrequency();
    const hv3 = renderer.xr.getCamera().position;
    equalizerV3Frame(uint8, hv3);

    renderer.render(scene, camera);
  });
};

const audioController = new AudioController();
const xrController = new XrController(audioController);
// const lockController = new LockController(xrController);
const mouseController = new MouseController();
const keyboardController = new KeyboardController();
const webController = new WebController(
  xrController,
  // lockController,
  audioController,
  animation
);
