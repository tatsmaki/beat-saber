import {
  Color,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CylinderGeometry(0.015, 0.015, 1);
const material = new MeshPhongMaterial({
  // color: "black",
  emissive: new Color(0x005473),
  emissiveIntensity: 1,
});
const mesh = new Mesh(geometry, material);
mesh.translateZ(-0.5);
mesh.rotateX(degToRad(90));

export const rightHand = new Group();
rightHand.add(mesh);
