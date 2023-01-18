import "./index.css";
import { renderer } from "./renderer";
import * as VR from "./VR";
import { AudioController } from "./controllers/audio.controller";
import { XrController } from "./controllers/xr.controller";
import { WebController } from "./controllers/web.controller";
import { ladder } from "./VR/components/ladder";

const vr = () => {
  const keyboardController = new VR.KeyboardController();
  renderer.setAnimationLoop((t) => {
    VR.rightHandFrame(xrController);
    VR.leftHandFrame();
    VR.moveFrame(keyboardController);

    VR.particlesFrame();

    const time = audioController.getTime();
    const uint8 = audioController.getFrequency();
    const max = Math.max(...uint8);
    const min = Math.min(...uint8);
    const diff = max - min;
    VR.boxesFrame(time, diff);
    const hv3 = renderer.xr.getCamera().position;
    VR.equalizerFrame(uint8, hv3);
    if (time % 2 > 1) {
      ladder.rotation.y += diff / 50000;
    } else {
      ladder.rotation.y -= diff / 50000;
    }
    VR.displayFrame();
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
