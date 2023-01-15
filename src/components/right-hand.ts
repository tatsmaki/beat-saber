import {
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  RectAreaLight,
} from "three";
import { degToRad } from "three/src/math/MathUtils";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

const mesh = new Mesh(
  new CylinderGeometry(0.02, 0.02, 0.2),
  new MeshLambertMaterial({ color: "red" })
);
mesh.rotateX(degToRad(90));

const blade = new Mesh(
  new CylinderGeometry(0.01, 0.01, 1),
  new MeshBasicMaterial({ color: "red" })
);
blade.translateZ(-0.5);
blade.rotateX(degToRad(90));

const light = new RectAreaLight("red", 20, 0.02, 1);
light.translateZ(-0.5);
light.rotateX(degToRad(90));
const helper = new RectAreaLightHelper(light);
light.add(helper);

export const rightHand = new Group();
rightHand.add(mesh);
rightHand.add(blade);
rightHand.add(light);
