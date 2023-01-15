import { MeshBasicMaterial, PlaneGeometry, sRGBEncoding } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { Water } from "three/examples/jsm/objects/Water2";

const geometry = new PlaneGeometry(3, 128);
const material = new MeshBasicMaterial({
  transparent: true,
  opacity: 0.3,
});
export const ground = new Water(geometry, {
  color: 0xffffff,
  scale: 1,
  textureWidth: 1024,
  textureHeight: 1024,
  encoding: sRGBEncoding,
});

ground.position.set(0, 0, -62);
ground.rotation.set(degToRad(-90), 0, 0);
