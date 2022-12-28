import { Mesh, MeshLambertMaterial, PlaneGeometry } from "three";

const geometry = new PlaneGeometry(5, 5);
const material = new MeshLambertMaterial({ color: 0xffffff });

export const ground = new Mesh(geometry, material);

ground.position.set(0, 0, 0);
ground.rotation.set(90, 0, 0);
