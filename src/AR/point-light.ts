import { Group, PointLight } from "three";

const red = new PointLight(0xff0000, 10);
red.position.set(0, 2, 0);
const blue = new PointLight(0x0000ff, 10);
blue.position.set(0, -2, 0);

export const pointLight = new Group();
pointLight.add(red, blue);
