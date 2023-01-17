import { Raycaster, Vector3 } from "three";

const origin = new Vector3(0, 0, 0);
const direction = new Vector3(0, 0, 0);

export const raycaster = new Raycaster(origin, direction);
