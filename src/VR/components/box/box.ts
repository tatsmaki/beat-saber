import { Color, Mesh, MeshPhongMaterial } from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

const boxGeometry = new RoundedBoxGeometry(0.4, 0.4, 0.4, undefined, 0.04);

const boxMaterial = new MeshPhongMaterial({
  color: 0x2164a1,
  emissive: new Color(0x2164a1),
  emissiveIntensity: 0.5,
});

export const boxMesh = new Mesh(boxGeometry, boxMaterial);
