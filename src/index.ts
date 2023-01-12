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

scene.add(ground);
scene.add(directionalLight);
scene.add(head, leftHand, rightHand);
scene.add(ladder);

const setAnimationLoop = () => {
  renderer.setAnimationLoop(() => {
    leftHandFrame();
    rightHandFrame();
    moveFrame(keyboardController);
    ladder.rotation.y -= 0.001;

    renderer.render(scene, camera);
  });
};

const xrController = new XrController(renderer);
const lockController = new LockController(xrController, renderer);
const mouseController = new MouseController(head);
const keyboardController = new KeyboardController();
const webController = new WebController(
  xrController,
  lockController,
  setAnimationLoop
);
