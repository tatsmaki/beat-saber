import {
  Color,
  CylinderGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CylinderGeometry(0.015, 0.015, 1.4);
const material = new MeshStandardMaterial({
  color: 0xff0000,
  emissive: new Color(0xff0000),
  emissiveIntensity: 10,
});
const mesh = new Mesh(geometry, material);
mesh.translateZ(-0.74);
mesh.rotateX(degToRad(90));

export const leftHand = new Group();
leftHand.add(mesh);
