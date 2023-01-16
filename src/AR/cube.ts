import { BoxGeometry, Color, Mesh, MeshPhysicalMaterial } from "three";

const geometry = new BoxGeometry(0.5, 0.5, 0.5);
const material = new MeshPhysicalMaterial({
  color: 0xffffff,
  emissive: new Color(0xffffff),
  emissiveIntensity: 2,
});

export const cube = new Mesh(geometry, material);
cube.position.set(1, 1, 0);
