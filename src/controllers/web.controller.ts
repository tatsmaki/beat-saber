import { AudioController } from "./audio.controller";
import { LockController } from "./lock.controller";
import { XrController } from "./xr.controller";

export class WebController {
  button = document.getElementById("root") as HTMLButtonElement;

  constructor(
    private readonly xrController: XrController,
    private readonly lockController: LockController,
    private readonly audioController: AudioController,
    private readonly setAnimationLoop: () => void
  ) {
    this.button.onclick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setAnimationLoop();
    this.xrController.handleClick();
    this.audioController.handleClick();
    setTimeout(() => this.lockController.handleClick(), 500);
  }
}
