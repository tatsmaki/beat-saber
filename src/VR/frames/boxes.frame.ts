import { Vector2, Vector3 } from "three";
import { boxEmitter } from "../box-emitter";
import { box } from "../components/box";
import { boxes } from "../components/boxes";
import { IBox } from "../interfaces/box.interface";

let boxesOffset = 0;

const createBox = ({ p, d }: IBox) => {
  const newBox = box.clone();
  newBox.position.set(p.x, p.y, -boxesOffset);
  if (d) {
    newBox.rotation.z = Math.atan2(d.x || 0, -d.y || 0);
  }
  newBox.userData = { d };
  boxes.add(newBox);
};

const boxSpeed = 0.4;

export const boxesFrame = (time: number, diff: number) => {
  boxEmitter.emit(time, diff, createBox);
  boxesOffset += boxSpeed;
  boxes.position.z += boxSpeed;
  if (boxes.children.length) {
    for (let i = 0; i < boxes.children.length; i += 1) {
      const box = boxes.children[i];
      if (box.getWorldPosition(new Vector3()).z > 10) {
        box.removeFromParent();
      }
    }
  }
};
