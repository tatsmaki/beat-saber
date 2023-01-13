import { BoxGeometry, Mesh, MeshLambertMaterial } from "three";

export const bar = new Mesh(
  new BoxGeometry(0.5, 1, 2),
  new MeshLambertMaterial({ color: 0xffffff })
);
// bar.receiveShadow = true;
