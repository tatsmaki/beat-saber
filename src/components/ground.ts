import { Group, PlaneGeometry } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { Water } from "three/examples/jsm/objects/Water2";

const geometry = new PlaneGeometry(4, 60);
const water = new Water(geometry, {
  color: 0xffffff,
  scale: 1,
  textureWidth: 1024,
  textureHeight: 1024,
});

export const ground = new Group();
ground.add(water);
ground.position.set(0, 0, -27);
ground.rotation.set(degToRad(-90), 0, 0);
