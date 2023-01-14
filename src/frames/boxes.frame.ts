import { boxEmitter } from "../box-emitter";
import { box } from "../components/box";
import { boxes } from "../components/boxes";
import { IBox } from "../interfaces/box.interface";

let boxesOffset = 0;

const createBox = ({ p }: IBox) => {
  const newBox = box.clone();
  newBox.position.set(p.x, p.y, -boxesOffset);
  boxes.add(newBox);
};

const boxSpeed = 1;

export const boxesFrame = (time: number) => {
  boxEmitter.emit(time, createBox);
  boxesOffset += boxSpeed;
  boxes.position.z += boxSpeed;
};
