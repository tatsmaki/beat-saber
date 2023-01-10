import "./index.css";
import { XrController } from "./controllers/xr.controller";
import { LockController } from "./controllers/lock.controller";
import { MouseController } from "./controllers/mouse.controller";
import { KeyboardController } from "./controllers/keyboard.controller";
import { WebController } from "./controllers/web.controller";
import { scene } from "./components/scene";
import { ground } from "./components/ground";
import { ambientLight } from "./components/ambient-light";
import { sun } from "./components/sun";
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
scene.add(ambientLight, sun);
scene.add(head);
scene.add(leftHand, rightHand);
scene.add(...ladder.steps);

renderer.setAnimationLoop((time: number) => {
  leftHandFrame();
  rightHandFrame();

  fallFrame();

  moveFrame(keyboardController);

  renderer.render(scene, camera);
});

const xrController = new XrController(renderer);
const lockController = new LockController(xrController);
const mouseController = new MouseController(head);
const keyboardController = new KeyboardController();
const webController = new WebController(xrController, lockController, renderer);
