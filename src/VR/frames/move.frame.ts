import { Euler } from "three";
import { KeyboardController } from "../controllers/keyboard.controller";
import { head } from "../components/head";

export const moveFrame = (keyboardController: KeyboardController) => {
  const direction = keyboardController.direction;
  const euler = new Euler();
  euler.setFromQuaternion(head.quaternion, "YXZ");
  euler.x = 0;
  direction.applyEuler(euler);
  head.position.addScaledVector(direction, 0.5);
};
