import {
  Mesh,
  MeshLambertMaterial,
  MeshPhysicalMaterial,
  PlaneGeometry,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new PlaneGeometry(4, 4);
const material = new MeshPhysicalMaterial({
  color: 0x1a1817,
  roughness: 0.5,
  metalness: 0.5,
});

export const ground = new Mesh(geometry, material);

ground.position.set(0, 0, 0);
ground.rotation.set(degToRad(-90), 0, 0);
ground.receiveShadow = true;
