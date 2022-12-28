import { Mesh, MeshLambertMaterial, PlaneGeometry } from "three";

const geometry = new PlaneGeometry(30, 30);
const material = new MeshLambertMaterial({ color: 0xffffff });

export const ground = new Mesh(geometry, material);

ground.position.set(0, 0, 0);
