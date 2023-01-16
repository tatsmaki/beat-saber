import { boxEmitter } from "../box-emitter";
import { AudioController } from "./audio.controller";
import { XrController } from "./xr.controller";

export class WebController {
  vrButton = document.getElementById("vr")!;
  arButton = document.getElementById("ar")!;

  constructor(
    private readonly xrController: XrController,
    private readonly audioController: AudioController,
    private readonly vr: () => void,
    private readonly ar: () => void
  ) {
    this.vrButton.onclick = this.handleClick.bind(this);
    this.arButton.onclick = this.enterAr.bind(this);
  }

  async handleClick() {
    this.audioController.handleClick();
    this.vr();
    await this.xrController.enterVrSession();
    await boxEmitter.load();
    await this.audioController.play();
  }

  async enterAr() {
    this.ar();
    await this.xrController.enterArSession();
  }
}
