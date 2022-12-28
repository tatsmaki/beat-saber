import {
  CircleGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
  PointLight,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CircleGeometry(1, 32);
const material = new MeshLambertMaterial({ color: 0xfffbdb });

const mesh = new Mesh(geometry, material);
mesh.position.set(-50, 0, 0);
mesh.rotateY(degToRad(90));

const light = new PointLight(0xfffbdb);
light.position.set(-49, 0, 0);

export const sun = new Group();

sun.add(mesh);
sun.add(light);
