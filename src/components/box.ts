import { BoxGeometry, Group, Mesh, MeshBasicMaterial } from "three";

const mesh = new Mesh(
  new BoxGeometry(0.4, 0.4, 0.4),
  new MeshBasicMaterial({ color: 0xffffff })
);

export const box = new Group();
box.add(mesh);
