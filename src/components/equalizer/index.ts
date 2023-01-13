import { Group, Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { bar } from "./bar";

export const equalizer = new Group();
equalizer.rotateY(degToRad(90));
equalizer.position.x = 5;
equalizer.position.z = 2;
equalizer.position.y = -2;
export const equalizerChildren: Mesh[] = [];
for (let i = 0; i < 128; i += 1) {
  const newBar = bar.clone();
  newBar.position.x = i / 2;
  equalizerChildren.push(newBar);
}

equalizer.add(...equalizerChildren);

export const equalizerLeft = equalizer.clone();
equalizerLeft.position.x = -5;
export const equalizerChildrenLeft: Mesh[] = [];
for (let i = 0; i < 128; i += 1) {
  const newBar = bar.clone();
  newBar.position.x = i / 2;
  equalizerChildrenLeft.push(newBar);
}
equalizerLeft.add(...equalizerChildrenLeft);
