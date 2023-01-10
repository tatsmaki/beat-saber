import { renderer } from "../renderer";
import { raycaster } from "../components/raycaster";
import { scene } from "../components/scene";
import { head } from "../components/head";

let velocity = 0;

export const fallFrame = () => {
  // const helmet = renderer.xr.getCamera();
  raycaster.ray.origin.copy(head.position);
  const [intersection] = raycaster.intersectObjects(scene.children, true);

  if (intersection?.distance <= 1.7) {
    velocity = 0;
  }
  // if (intersection?.distance < 1.6) {
  //   head.position.y += 1.65 - intersection.distance;
  // }
  if (!intersection || intersection?.distance > 1.7) {
    // head.position.y -= velocity;
    // velocity += 0.002;
  }

  if (head.position.y < -10) {
    head.position.y = 30;
  }
};
