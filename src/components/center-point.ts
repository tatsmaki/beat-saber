import { Mesh, MeshLambertMaterial, SphereGeometry } from "three";

export const centerPoint = new Mesh(
  new SphereGeometry(0.2),
  new MeshLambertMaterial({ color: 0xffffff })
);
centerPoint.position.set(0, 1.5, 0);
