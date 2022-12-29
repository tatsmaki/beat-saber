import {
  DoubleSide,
  Group,
  Mesh,
  MeshLambertMaterial,
  PlaneGeometry,
} from "three";

const geometry = new PlaneGeometry(0.5, 1);
const material = new MeshLambertMaterial({ side: DoubleSide });

const mesh = new Mesh(geometry, material);
mesh.receiveShadow = true;
mesh.castShadow = true;
mesh.translateX(1);

export const step = new Group();

step.add(mesh);
