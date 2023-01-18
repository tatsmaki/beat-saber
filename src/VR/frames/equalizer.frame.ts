import { Quaternion, Vector3 } from "three";
import { equalizer, equalizerChildren } from "../components/equalizer";

const rv3 = new Vector3(0, 1.6, 0);
const za = new Vector3(0, 0, 1);

export const equalizerFrame = (uint8: Uint8Array, hv3: Vector3) => {
  let avg = 0;
  for (let i = 0; i < uint8.length; i += 1) {
    avg += uint8[i];
  }
  avg /= uint8.length;
  for (let i = 0; i < uint8.length; i += 1) {
    const value = (uint8[i] - avg) / 16;
    const { position } = equalizerChildren[i];
    position.lerp(new Vector3(position.x, value, position.z), 0.2);
  }
  const angle = Math.atan2(hv3.y - rv3.y, hv3.x - rv3.x);
  equalizer.quaternion.slerp(
    new Quaternion()
      .setFromEuler(equalizer.rotation)
      .setFromAxisAngle(za, angle),
    0.1
  );
};
