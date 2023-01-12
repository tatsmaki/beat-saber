import {
  Color,
  CylinderGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
  RectAreaLight,
} from "three";
import { degToRad } from "three/src/math/MathUtils";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

const grip = new Mesh(
  new CylinderGeometry(0.02, 0.02, 0.2),
  new MeshLambertMaterial({ color: "blue" })
);
grip.rotateX(degToRad(90));

// const blade = new Mesh(
//   new CylinderGeometry(0.02, 0.02, 1),
//   new MeshLambertMaterial({ color: "blue", emissive: new Color("blue") })
// );
// blade.translateZ(-0.5);
// blade.rotateX(degToRad(90));

const light = new RectAreaLight("blue", 10, 0.02, 1);
light.translateZ(-0.5);
light.rotateX(degToRad(90));
const helper = new RectAreaLightHelper(light);
light.add(helper);

export const leftHand = new Group();
leftHand.add(grip);
// leftHand.add(blade);
leftHand.add(light);
