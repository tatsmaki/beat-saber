import { BoxGeometry, Mesh, MeshLambertMaterial, TubeGeometry } from "three";

export const bar = new Mesh(
  new BoxGeometry(0.5, 1, 2),
  // new TubeGeometry(),
  new MeshLambertMaterial({ color: 0xffffff })
);
// bar.receiveShadow = true;
