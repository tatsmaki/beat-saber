import {
  Color,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CylinderGeometry(0.015, 0.015, 1);
const material = new MeshPhysicalMaterial({
  color: 0x2164a1,
  emissive: new Color(0x2164a1),
  emissiveIntensity: 3,
});
const mesh = new Mesh(geometry, material);
mesh.translateZ(-0.44);
mesh.rotateX(degToRad(90));

export const rightHand = new Group();
rightHand.add(mesh);
