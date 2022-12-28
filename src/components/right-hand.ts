import { CylinderGeometry, Group, Mesh, MeshLambertMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CylinderGeometry(0.02, 0.02, 0.2);
const material = new MeshLambertMaterial({ color: "red" });

const mesh = new Mesh(geometry, material);
mesh.position.set(0, 0, 0.05);
mesh.rotateX(degToRad(-45));

export const rightHand = new Group().add(mesh);
