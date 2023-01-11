import {
  CylinderGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
  RectAreaLight,
} from "three";
import { degToRad } from "three/src/math/MathUtils";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

const geometry = new CylinderGeometry(0.02, 0.02, 0.2);
const material = new MeshLambertMaterial({ color: "red" });

const mesh = new Mesh(geometry, material);
mesh.rotateX(degToRad(90));

export const rightHand = new Group();

rightHand.add(mesh);

const light = new RectAreaLight(0xffffff, 1, 0.2, 1);
// light.position.set(0, 0, 0.1);
light.rotateX(degToRad(90));
light.lookAt(0, 0, 0);

const helper = new RectAreaLightHelper(light);
light.add(helper);

rightHand.add(light);
