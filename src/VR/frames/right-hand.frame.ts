import { Matrix4, Vector2, Vector3 } from "three";
import { XrController } from "../../controllers/xr.controller";
import { renderer } from "../../renderer";
import { boxes } from "../components/boxes";
import { STATE } from "../components/display";
import { raycaster } from "../components/raycaster";
import { rightHand } from "../components/right-hand";

const matrix4 = new Matrix4();

export const rightHandFrame = (xrController: XrController) => {
  const rightControllerGrip = renderer.xr.getControllerGrip(1);
  const { position, rotation, angularVelocity } = rightControllerGrip;
  rightHand.position.copy(position);
  rightHand.rotation.copy(rotation);

  // const { matrixWorld } = rightHand.children[0];
  // matrix4.identity().extractRotation(matrixWorld);
  // raycaster.ray.origin.setFromMatrixPosition(matrixWorld);
  // raycaster.ray.direction.set(0, 0, -1).applyMatrix4(matrix4);
  // const [intersection] = raycaster.intersectObject(boxes, true);

  // if (intersection?.distance < 2) {
  const direction = new Vector2(-angularVelocity.y, angularVelocity.x);
  boxes.children.forEach((box) => {
    const boxDirection = new Vector2(
      box.userData.d.x || 0,
      box.userData.d.y || 0
    );
    const angle = Math.abs(direction.angle() - boxDirection.angle());
    const distance = box.getWorldPosition(new Vector3()).distanceTo(position);
    if (distance < 1.4 && angle < 0.5) {
      box.removeFromParent();
      xrController.makePulse();
      const points = 1 * STATE.multiply;
      STATE.score += points;
      STATE.multiply = Math.min(8, STATE.multiply * 2);
    }
  });
  // }
};
