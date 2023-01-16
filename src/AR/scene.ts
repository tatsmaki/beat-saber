import { Scene } from "three";
import { camera } from "./camera";
import { cube } from "./cube";

export const scene = new Scene();
scene.add(camera);
scene.add(cube);
