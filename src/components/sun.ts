import { Group, Mesh, MeshLambertMaterial, SphereGeometry } from "three";

const geometry = new SphereGeometry(1, 32, 32);
const material = new MeshLambertMaterial({ color: 0xfff59f });

const mesh = new Mesh(geometry, material);
mesh.position.set(10, 0, 0);

export const sun = new Group();

sun.add(mesh);