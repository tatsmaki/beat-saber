import "./index.css";
import { renderer } from "./renderer";
import * as VR from "./VR";
import { AudioController } from "./controllers/audio.controller";
import { XrController } from "./controllers/xr.controller";
import { WebController } from "./controllers/web.controller";

const vr = () => {
  const keyboardController = new VR.KeyboardController();
  renderer.setAnimationLoop(() => {
    VR.rightHandFrame();
    VR.moveFrame(keyboardController);

    VR.particlesFrame();

    const time = audioController.getTime();
    VR.boxesFrame(time);
    const uint8 = audioController.getFrequency();
    const hv3 = renderer.xr.getCamera().position;
    VR.equalizerFrame(uint8, hv3);

    renderer.render(VR.scene, VR.camera);
  });
};

// const ar = () => {
//   renderer.setClearColor(0xffffff, 0);
//   const mouseController = new AR.MouseController();
//   renderer.setAnimationLoop(() => {
//     AR.cube.rotation.z += 0.002;
//     renderer.render(AR.scene, AR.camera);
//   });
// };

const audioController = new AudioController();
const xrController = new XrController(audioController);
const webController = new WebController(xrController, audioController, vr);
