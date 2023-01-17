import { Vector3 } from "three";
import { equalizer, equalizerChildren } from "../components/equalizer";

const rv3 = new Vector3(0, 1.5, 0);

export const equalizerFrame = (uint8: Uint8Array, hv3: Vector3) => {
  let avg = 0;
  for (let i = 0; i < uint8.length; i += 1) {
    avg += uint8[i];
  }
  avg /= uint8.length;
  for (let i = 0; i < uint8.length; i += 1) {
    equalizerChildren[i].position.y = (uint8[i] - avg) / 64;
  }
  const angle = Math.atan2(hv3.y - rv3.y, hv3.x - rv3.x);
  equalizer.rotation.z = angle;
};
