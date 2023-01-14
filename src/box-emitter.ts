import { IBox } from "./interfaces/box.interface";
import { ISong } from "./interfaces/song.interface";

class BoxEmitter {
  private song: ISong | null = null;

  async load() {
    const response = await fetch("json/falloutboy_centuries.json");
    this.song = await response.json();
  }

  emit(time: number, createBox: (data: IBox) => void) {
    const { boxes } = this.song!;
    if (boxes[0] && boxes[0].t <= time) {
      const data = boxes.shift();
      createBox(data!);
    }
  }
}

export const boxEmitter = new BoxEmitter();
