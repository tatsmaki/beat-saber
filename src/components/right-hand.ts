import { CylinderGeometry, Group, Mesh, MeshBasicMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils";

const mesh = new Mesh(
  new CylinderGeometry(0.015, 0.015, 1),
  new MeshBasicMaterial({
    color: 0x456875,

    // emissive: new Color(0x456875),
    // emissiveIntensity: 1,
  })
);
mesh.translateZ(-0.8);
mesh.rotateX(degToRad(90));

// const blade = new Mesh(
//   new CylinderGeometry(0.015, 0.015, 1),
//   new MeshBasicMaterial({ color: 0x456875 })
// );
// blade.translateZ(-0.5);
// blade.rotateX(degToRad(90));

// const light = new RectAreaLight("red", 20, 0.02, 1);
// light.translateZ(-0.5);
// light.rotateX(degToRad(90));
// const helper = new RectAreaLightHelper(light);
// light.add(helper);

export const rightHand = new Group();
rightHand.add(mesh);
// rightHand.add(blade);
// rightHand.add(light);
