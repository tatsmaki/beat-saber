import { Group } from "three";
import { arrowMesh } from "./arrow";
import { boxMesh } from "./box";

export const box = new Group();
box.add(boxMesh);
box.add(arrowMesh);
