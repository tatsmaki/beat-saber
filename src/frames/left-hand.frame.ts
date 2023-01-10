import { renderer } from "../renderer";
import { leftHand } from "../components/left-hand";

export const leftHandFrame = () => {
  const leftController = renderer.xr.getController(0);
  leftHand.position.copy(leftController.position);
  leftHand.rotation.copy(leftController.rotation);
};
