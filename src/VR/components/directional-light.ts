import { DirectionalLight, Group } from "three";
import { DirectionalLightHelper } from "three/src/helpers/DirectionalLightHelper";

const redLight = new DirectionalLight("red", 10);
redLight.position.set(-30, 0, -100); // -50, 15, -100 is fun
redLight.lookAt(0, 0, -100);
// light.castShadow = true;
// light.shadow.bias = -0.0001;
// light.shadow.mapSize.width = 1024;
// light.shadow.mapSize.height = 1024;

const blueLight = new DirectionalLight("blue", 10);
blueLight.position.set(30, 0, -100);
blueLight.lookAt(0, 0, -100);
// const greenLight = new DirectionalLight("green", 10);
// greenLight.position.set(0, -15, -100);
// greenLight.lookAt(0, 0, 0);

export const directionalLight = new Group();
directionalLight.add(redLight, blueLight);

if (window.location.origin === "http://localhost:3000") {
  directionalLight.add(
    new DirectionalLightHelper(redLight, 1),
    new DirectionalLightHelper(blueLight, 1)
  );
}
