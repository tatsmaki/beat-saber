import { Group, Mesh } from "three";
import { radToDeg } from "three/src/math/MathUtils";
import { step } from "./step";

class Ladder {
  steps: Group[] = [];
  counter = 0;

  constructor() {
    for (let height = 0.3; height < 20; height += 0.3) {
      this.counter += 1;
      const plane = step.clone();
      plane.position.set(0, height, 0);
      plane.rotation.set(radToDeg(-90), 0, 1 / Math.sin(1 / height));
      this.steps.push(plane);
    }
  }
}

export const ladder = new Ladder();
