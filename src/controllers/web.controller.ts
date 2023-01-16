import { boxEmitter } from "../box-emitter";
import { AudioController } from "./audio.controller";
import { LockController } from "./lock.controller";
import { XrController } from "./xr.controller";

export class WebController {
  button = document.getElementById("root") as HTMLButtonElement;

  constructor(
    private readonly xrController: XrController,
    // private readonly lockController: LockController,
    private readonly audioController: AudioController,
    private readonly animation: () => void
  ) {
    this.button.onclick = this.handleClick.bind(this);
  }

  async handleClick() {
    this.audioController.handleClick();
    this.animation();
    await this.xrController.handleClick();
    await boxEmitter.load();
    await this.audioController.play();
    // setTimeout(() => this.lockController.handleClick(), 500);
  }
}
