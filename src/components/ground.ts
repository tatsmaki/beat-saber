import {
  Mesh,
  MeshLambertMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  PMREMGenerator,
} from "three";
import { degToRad } from "three/src/math/MathUtils";
import { renderer } from "../renderer";

export const pmremGenerator = new PMREMGenerator(renderer);

const geometry = new PlaneGeometry(10, 10);
const material = new MeshPhysicalMaterial({
  // color: 0x7dcb80,
  color: 0x1a1817,
  roughness: 0.5,
  // clearcoat: 1,
  // clearcoatRoughness: 0.1,
  metalness: 0.2,
});

export const ground = new Mesh(geometry, material);

ground.position.set(0, 0, 0);
ground.rotation.set(degToRad(-90), 0, 0);
ground.receiveShadow = true;
