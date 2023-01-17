import { Color, Group, Mesh, MeshStandardMaterial, PlaneGeometry } from "three";
import { degToRad } from "three/src/math/MathUtils";

export const equalizer = new Group();

export const equalizerChildren: Mesh[] = [];

for (let i = 0; i < 128; i += 1) {
  const mesh = new Mesh(
    new PlaneGeometry(1, 2),
    new MeshStandardMaterial({
      color: 0x2164a1,
      emissive: new Color(0x2164a1),
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.2,
    })
  );
  mesh.position.z = -i;
  mesh.position.x = 5;
  mesh.rotation.y = degToRad(-90);
  equalizerChildren[i] = mesh;
}

equalizer.position.set(0, 3, 3);
equalizer.add(...equalizerChildren);
