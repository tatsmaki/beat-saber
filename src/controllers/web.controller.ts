import { boxEmitter } from "../VR/box-emitter";
import { AudioController } from "./audio.controller";
import { XrController } from "./xr.controller";

export class WebController {
  button = document.getElementById("vr") as HTMLButtonElement;

  constructor(
    private readonly xrController: XrController,
    private readonly audioController: AudioController,
    private readonly vr: () => void
  ) {
    this.button.onclick = this.handleClick.bind(this);
  }

  async handleClick() {
    this.audioController.handleClick();
    this.vr();
    await this.xrController.startSession();
    await boxEmitter.load();
    await this.audioController.play();
  }
}
