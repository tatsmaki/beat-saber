import { Vector2 } from "three";
import { boxEmitter } from "../box-emitter";
import { box } from "../components/box";
import { boxes } from "../components/boxes";
import { IBox } from "../interfaces/box.interface";

let boxesOffset = 0;

const createBox = ({ p, d }: IBox) => {
  const newBox = box.clone();
  newBox.position.set(p.x, p.y, -boxesOffset);
  if (d) {
    newBox.rotation.z = new Vector2(d.x, d.y).angle();
  }
  boxes.add(newBox);
};

const boxSpeed = 0.3;

export const boxesFrame = (time: number) => {
  boxEmitter.emit(time, createBox);
  boxesOffset += boxSpeed;
  boxes.position.z += boxSpeed;
};
