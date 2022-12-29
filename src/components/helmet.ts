import { Group, PerspectiveCamera } from "three";

const fov = 50;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 100;

export const camera = new PerspectiveCamera(fov, aspect, near, far);

export const helmet = new Group();

helmet.add(camera);
