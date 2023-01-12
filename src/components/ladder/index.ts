import { Group } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { step } from "./step";

class Ladder {
  steps: Group[] = [];
  counter = 0;

  constructor() {
    for (let height = 1; height < 50; height += 1) {
      this.counter += 1;
      const plane = step.clone();
      plane.position.set(0, height, 0);
      plane.rotation.set(degToRad(90), 0, -2 / Math.sin(1 / height));
      this.steps.push(plane);
    }
  }
}

export const ladder = new Group();
ladder.position.y = 2;
ladder.position.z = -20;
ladder.rotateZ(degToRad(90));
ladder.rotateX(degToRad(-90));
ladder.add(...new Ladder().steps);
