import { CylinderGeometry, Group, Mesh, MeshBasicMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CylinderGeometry(0.015, 0.015, 1);
const material = new MeshBasicMaterial({ color: 0x456875 });
const mesh = new Mesh(geometry, material);
mesh.translateZ(-0.8);
mesh.rotateX(degToRad(90));

export const rightHand = new Group();
rightHand.add(mesh);
