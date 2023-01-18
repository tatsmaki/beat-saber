import { context, STATE, texture } from "../components/display";

export const displayFrame = () => {
  const text = `${STATE.score}  x${STATE.multiply}`;
  // context.fillStyle = "#fff";
  context.clearRect(0, 0, 200, 100);
  // context.fillStyle = "#000";
  context.fillText(text, 10, 60, 200);
  texture.needsUpdate = true;
};
