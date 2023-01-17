import { Vector3 } from "three";
import { renderer } from "../../renderer";
import { boxes } from "../components/boxes";
import { raycaster } from "../components/raycaster";
import { rightHand } from "../components/right-hand";

export const rightHandFrame = () => {
  const rightController = renderer.xr.getControllerGrip(1);
  rightHand.position.copy(rightController.position);
  rightHand.rotation.copy(rightController.rotation);
  raycaster.set(
    rightController.position,
    new Vector3().applyQuaternion(rightController.quaternion).normalize()
  );
  const [intersection] = raycaster.intersectObject(boxes, true);
  if (intersection && intersection.distance < 2) {
    intersection.object.removeFromParent();
  }
};
