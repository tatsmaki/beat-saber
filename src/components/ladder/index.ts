import { Group } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { step } from "./step";

class Ladder {
  steps: Group[] = [];
  counter = 0;

  constructor() {
    for (let height = 1; height < 70; height += 1) {
      this.counter += 1;
      const plane = step.clone();
      plane.position.set(0, height, 0);
      plane.rotation.set(degToRad(90), 0, -2 / Math.sin(1 / height));
      this.steps.push(plane);
    }
  }

  update(direction: boolean) {
    this.steps.forEach((step) => {
      // step.rotation.x += 0.01;
      // step.position.x += 0.01;
      step.translateX(direction ? -1 : 1);
    });
  }
}

export const ladder = new Group();
ladder.position.set(0, 3, 0);
ladder.rotateZ(degToRad(90));
ladder.rotateX(degToRad(-90));
export const ladderObject = new Ladder();
ladder.add(...ladderObject.steps);
