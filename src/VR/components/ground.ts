import { MeshBasicMaterial, PlaneGeometry } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { Water } from "three/examples/jsm/objects/Water2";

const geometry = new PlaneGeometry(3, 128);

export const ground = new Water(geometry, {
  color: 0xffffff,
  scale: 2,
  textureWidth: 512,
  textureHeight: 512,
});
ground.position.set(0, 0, -62);
ground.rotation.set(degToRad(-90), 0, 0);
