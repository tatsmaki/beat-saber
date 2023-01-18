import { Vector2 } from "three";
import { IBox } from "./interfaces/box.interface";
import { ISong } from "./interfaces/song.interface";

class BoxEmitter {
  private song: ISong | null = null;
  private lastEmit = 0;

  async load() {
    const response = await fetch("json/falloutboy_centuries.json");
    this.song = await response.json();
  }

  emit(time: number, createBox: (data: IBox) => void) {
    if (!this.song) {
      return;
    }
    const { boxes } = this.song;
    if (boxes[0] && boxes[0].t <= time) {
      const data = boxes.shift();
      createBox(data!);
      this.lastEmit = time;
    }
    if (!boxes.length && this.lastEmit + 0.5 < time) {
      const px = Math.random() * 2 - 1;
      const py = Math.random() - 0.3;
      const dx = Math.random() * 3 - 1;
      const dy = Math.random() * 3 - 1;
      createBox({
        p: new Vector2(px, py),
        d: new Vector2(dx, dy),
        t: 0,
      });
      this.lastEmit = time;
    }
  }
}

export const boxEmitter = new BoxEmitter();
