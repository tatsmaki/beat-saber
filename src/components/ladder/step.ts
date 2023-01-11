import {
  DoubleSide,
  Group,
  Mesh,
  MeshLambertMaterial,
  MeshPhysicalMaterial,
  PlaneGeometry,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new PlaneGeometry(0.5, 1);
const material = new MeshPhysicalMaterial({
  side: DoubleSide,
  roughness: 0.5,
  metalness: 0.2,
});

const mesh = new Mesh(geometry, material);
mesh.receiveShadow = true;
mesh.castShadow = true;
mesh.translateX(1);
mesh.rotation.z = degToRad(90);

export const step = new Group();

step.add(mesh);
