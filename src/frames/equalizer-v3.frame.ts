import { Vector3 } from "three";
import { equalizerV3, equalizerV3Children } from "../components/equalizer-v3";

const rotationPoint = new Vector3(0, 1, 0);

export const equalizerV3Frame = (uint8: Uint8Array, rhv3: Vector3) => {
  for (let i = 0; i < uint8.length; i += 1) {
    equalizerV3Children[i].position.y = uint8[i] / 64;
  }
  const angle = rotationPoint.angleTo(rhv3);
  equalizerV3.rotation.z = angle;
};
