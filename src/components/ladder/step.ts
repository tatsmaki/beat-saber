import { DoubleSide, Mesh, MeshLambertMaterial, PlaneGeometry } from "three";

const geometry = new PlaneGeometry(0.5, 1);
const material = new MeshLambertMaterial({ side: DoubleSide });

export const step = new Mesh(geometry, material);

step.receiveShadow = true;
step.castShadow = true;
