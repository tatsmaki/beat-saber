import { renderer } from "../../renderer";
import { boxes } from "../components/boxes";
import { raycaster } from "../components/raycaster";
import { rightHand } from "../components/right-hand";

export const rightHandFrame = () => {
  const rightController = renderer.xr.getControllerGrip(1);
  const { position, rotation } = rightController;
  rightHand.position.copy(position);
  rightHand.rotation.copy(rotation);
  raycaster.ray.origin = position;
  raycaster.ray.direction.setFromEuler(rotation);
  const [intersection] = raycaster.intersectObject(boxes, true);

  if (intersection && intersection.distance < 2) {
    intersection.object.removeFromParent();
  }
};
