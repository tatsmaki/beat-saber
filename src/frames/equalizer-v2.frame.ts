import {
  BufferGeometry,
  CatmullRomCurve3,
  Curve,
  TubeGeometry,
  Vector3,
} from "three";
import { equalizerV2 } from "../components/equalizer-v2";

export const equalizerV2Frame = (uint8: Uint8Array) => {
  const points: Vector3[] = [];
  for (let i = 0; i < uint8.length; i += 1) {
    points[i] = new Vector3(0, uint8[i] / 64, -i / 2);
  }
  // const curve = new CatmullRomCurve3(points);
  const geometry = new BufferGeometry().setFromPoints(points);
  equalizerV2.geometry.dispose();
  equalizerV2.geometry = geometry;
};
