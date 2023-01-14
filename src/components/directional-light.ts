import { DirectionalLight, Group } from "three";
import { DirectionalLightHelper } from "three/src/helpers/DirectionalLightHelper";

const light = new DirectionalLight("red", 10);
light.position.set(-50, 15, -100); // -50, 15, -100 is fun
light.castShadow = true;
light.lookAt(0, 0, 0);
light.shadow.bias = -0.0001;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

const light2 = new DirectionalLight("blue", 10);
light2.position.set(50, -15, -100);
light2.castShadow = true;
light2.lookAt(0, 0, 0);
light2.shadow.bias = -0.0001;
light2.shadow.mapSize.width = 1024;
light2.shadow.mapSize.height = 1024;

export const directionalLight = new Group();
directionalLight.add(light, light2);

if (window.location.origin === "http://localhost:3000") {
  const helper = new DirectionalLightHelper(light, 1);
  const helper2 = new DirectionalLightHelper(light2, 1);
  directionalLight.add(helper, helper2);
}
