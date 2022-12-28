import { BoxGeometry, Mesh, MeshLambertMaterial } from "three";

const geometry = new BoxGeometry(0.5, 1, 0.1);
const material = new MeshLambertMaterial({ color: "red" });

export const rightHand = new Mesh(geometry, material);
