import { Group, Mesh, MeshLambertMaterial, PlaneGeometry } from "three";
import { degToRad } from "three/src/math/MathUtils";

export const equalizerV3 = new Group();

export const equalizerV3Children: Mesh[] = [];

for (let i = 0; i < 128; i += 1) {
  const mesh = new Mesh(
    new PlaneGeometry(1, 1),
    new MeshLambertMaterial({ color: 0xffffff })
  );
  mesh.position.z = -i;
  mesh.position.x = 5;
  mesh.rotation.y = degToRad(-90);
  equalizerV3Children[i] = mesh;
}

equalizerV3.position.set(0, 3, 3);
equalizerV3.add(...equalizerV3Children);
