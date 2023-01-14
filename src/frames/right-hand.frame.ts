import { renderer } from "../renderer";
import { rightHand } from "../components/right-hand";

export const rightHandFrame = () => {
  const rightController = renderer.xr.getControllerGrip(1);
  rightHand.position.copy(rightController.position);
  rightHand.rotation.copy(rightController.rotation);
  return rightController.position;
};
