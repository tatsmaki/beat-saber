import {
  CylinderGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
  RectAreaLight,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CylinderGeometry(0.02, 0.02, 0.2);
const material = new MeshLambertMaterial({ color: "red" });

const mesh = new Mesh(geometry, material);
mesh.rotateX(degToRad(90));

export const rightHand = new Group();

rightHand.add(mesh);

const light = new RectAreaLight(0xffffff, 1, 0.2, 1);
// light.position.set(0, 0, 0.1);
light.rotateX(degToRad(90));

rightHand.add(light);
