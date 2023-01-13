import {
  equalizerChildren,
  equalizerChildrenLeft,
} from "../components/equalizer";

export const equalizerFrame = (values: Uint8Array) => {
  equalizerChildren.forEach((bar, index) => {
    bar.scale.set(1, values[index] / 32, 1);
  });
  equalizerChildrenLeft.forEach((bar, index) => {
    bar.scale.set(1, values[index] / 32, 1);
  });
};
