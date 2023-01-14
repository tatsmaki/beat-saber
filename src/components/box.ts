import { BoxGeometry, Group, Mesh, MeshLambertMaterial } from "three";

const mesh = new Mesh(
  new BoxGeometry(0.2, 0.2, 0.2),
  new MeshLambertMaterial({ color: 0xffffff })
);

export const box = new Group();
box.add(mesh);
