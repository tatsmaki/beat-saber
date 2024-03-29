import {
  BackSide,
  BufferGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  Vector2,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new BufferGeometry();
geometry.setFromPoints([
  new Vector2(0, 0),
  new Vector2(5, 50),
  new Vector2(10, 0),
]);
const material = new MeshBasicMaterial({
  side: BackSide,
  color: 0xff0000,
  transparent: true,
  opacity: 0.2,
});
const mesh = new Mesh(geometry, material);
mesh.translateX(56);
mesh.rotation.z = degToRad(90);
// mesh.castShadow = true;

export const step = new Group();
step.add(mesh);
