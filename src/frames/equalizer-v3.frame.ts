import { Euler, Plane, Quaternion, Vector3 } from "three";
import { equalizerV3, equalizerV3Children } from "../components/equalizer-v3";

const rv3 = new Vector3(0, 1.5, 0);

export const equalizerV3Frame = (uint8: Uint8Array, hv3: Vector3) => {
  for (let i = 0; i < uint8.length; i += 1) {
    equalizerV3Children[i].position.y = uint8[i] / 64;
  }
  hv3.z = 0;
  const angle = Math.atan2(hv3.y - rv3.y, hv3.x - rv3.x);
  equalizerV3.rotation.z = angle;
  // const euler = new Euler().setFromVector3()
  // const quaternion = new Quaternion().angleTo
  // const euler = new Euler().setFromVector3(hv3);
  // equalizerV3.applyQuaternion(quaternion);
  // equalizerV3.setRotationFromQuaternion(quaternion);
  // equalizerV3.setRotationFromEuler(euler);
};
