import { CylinderGeometry, Group, Mesh, MeshLambertMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CylinderGeometry(0.02, 0.02, 0.2);
const material = new MeshLambertMaterial({ color: "blue" });

const mesh = new Mesh(geometry, material);
// mesh.position.set(0, 0, 0.1);
mesh.rotateX(degToRad(90));

export const leftHand = new Group();

leftHand.add(mesh);
