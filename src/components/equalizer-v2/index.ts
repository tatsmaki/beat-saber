import { Line, LineBasicMaterial, Mesh, MeshLambertMaterial } from "three";

const material = new LineBasicMaterial({ color: 0xffffff });

export const equalizerV2 = new Line(undefined, material);
equalizerV2.position.set(5, -2, 2);
