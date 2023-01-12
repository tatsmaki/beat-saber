import {
  BackSide,
  BufferGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  Vector2,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new BufferGeometry();
geometry.setFromPoints([
  new Vector2(0, 0),
  new Vector2(2, 20),
  new Vector2(4, 0),
]);
const material = new MeshLambertMaterial({
  side: BackSide,
});
const mesh = new Mesh(geometry, material);
mesh.translateX(21);
mesh.rotation.z = degToRad(90);
mesh.castShadow = true;

export const step = new Group();
step.add(mesh);
