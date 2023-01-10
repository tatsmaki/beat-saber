import {
  CircleGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshBasicMaterial,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new CircleGeometry(1, 32);
const material = new MeshBasicMaterial({ color: 0xfffbdb });

const mesh = new Mesh(geometry, material);
mesh.position.set(-50, 0, 0);
mesh.rotateY(degToRad(90));

export const directionalLight = new DirectionalLight(0xfffbdb);
directionalLight.position.set(-49, 0, 0);
directionalLight.castShadow = true;
directionalLight.lookAt(0, 0, 0);
directionalLight.shadow.bias = -0.0001;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;

export const sun = new Group();

sun.add(mesh);
sun.add(directionalLight);
