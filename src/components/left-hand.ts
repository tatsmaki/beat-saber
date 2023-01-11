import {
  Color,
  CylinderGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const grip = new Mesh(
  new CylinderGeometry(0.02, 0.02, 0.2),
  new MeshLambertMaterial({ color: "blue" })
);
grip.rotateX(degToRad(90));

const blade = new Mesh(
  new CylinderGeometry(0.02, 0.02, 1),
  new MeshLambertMaterial({ color: "blue", emissive: new Color("blue") })
);
blade.translateZ(-0.5);
blade.rotateX(degToRad(90));

export const leftHand = new Group();
leftHand.add(grip);
leftHand.add(blade);
