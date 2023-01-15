import { DirectionalLight, Group } from "three";
import { DirectionalLightHelper } from "three/src/helpers/DirectionalLightHelper";

const light = new DirectionalLight("red", 10);
light.position.set(-30, 15, -100); // -50, 15, -100 is fun
light.lookAt(0, 0, 0);
// light.castShadow = true;
// light.shadow.bias = -0.0001;
// light.shadow.mapSize.width = 1024;
// light.shadow.mapSize.height = 1024;

const light2 = new DirectionalLight("blue", 10);
light2.position.set(30, 15, -100);
light2.lookAt(0, 0, 0);
const greenLight = new DirectionalLight("green", 10);
greenLight.position.set(0, -15, -100);
greenLight.lookAt(0, 0, 0);

export const directionalLight = new Group();
directionalLight.add(light, light2, greenLight);

if (window.location.origin === "http://localhost:3000") {
  directionalLight.add(
    new DirectionalLightHelper(light, 1),
    new DirectionalLightHelper(light2, 1),
    new DirectionalLightHelper(greenLight, 1)
  );
}
