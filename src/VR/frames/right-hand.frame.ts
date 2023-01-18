import { Matrix4, Vector2, Vector3 } from "three";
import { XrController } from "../../controllers/xr.controller";
import { renderer } from "../../renderer";
import { boxes } from "../components/boxes";
import { context, texture } from "../components/display";
import { raycaster } from "../components/raycaster";
import { rightHand } from "../components/right-hand";

const matrix4 = new Matrix4();
let score = 0;

export const rightHandFrame = (xrController: XrController) => {
  const rightControllerGrip = renderer.xr.getControllerGrip(1);
  const { position, rotation, angularVelocity } = rightControllerGrip;
  rightHand.position.copy(position);
  rightHand.rotation.copy(rotation);

  const { matrixWorld } = rightHand.children[0];
  matrix4.identity().extractRotation(matrixWorld);
  raycaster.ray.origin.setFromMatrixPosition(matrixWorld);
  raycaster.ray.direction.set(0, 0, -1).applyMatrix4(matrix4);
  const [intersection] = raycaster.intersectObject(boxes, true);

  if (intersection?.distance < 2) {
    const direction = new Vector2(-angularVelocity.y, angularVelocity.x);
    boxes.children.forEach((box) => {
      const boxDirection = new Vector2(
        box.userData.d.x || 0,
        box.userData.d.y || 0
      );
      const angle = Math.abs(direction.angle() - boxDirection.angle());
      if (angle < 0.4) {
        box.removeFromParent();
        xrController.makePulse();
        context.fillStyle = "#fff";
        context.fillRect(0, 0, 200, 100);
        context.fillStyle = "#000";
        context.fillText(`Score: ${(score += 1)}`, 10, 60, 200);
        texture.needsUpdate = true;
      }
    });
  }
};
