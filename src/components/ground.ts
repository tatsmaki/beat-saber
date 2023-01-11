import {
  Mesh,
  MeshLambertMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
} from "three";
import { degToRad } from "three/src/math/MathUtils";
import { renderer } from "../renderer";

const geometry = new PlaneGeometry(20, 20);
const material = new MeshPhysicalMaterial({
  color: 0x1a1817,
  roughness: 0.5,
  metalness: 0.2,
});

export const ground = new Mesh(geometry, material);

ground.position.set(0, 0, 0);
ground.rotation.set(degToRad(-90), 0, 0);
ground.receiveShadow = true;
