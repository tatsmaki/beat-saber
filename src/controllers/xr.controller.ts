import { renderer } from "../renderer";
import { AudioController } from "./audio.controller";

export class XrController {
  private session: XRSession | null = null;

  constructor(private readonly audioController: AudioController) {
    this.onSessionEnd = this.onSessionEnd.bind(this);
  }

  async handleClick() {
    if (navigator.xr) {
      const mode = "immersive-vr";
      const options = {
        optionalFeatures: ["local", "local-floor", "viewer"],
      };
      this.session = await navigator.xr.requestSession(mode, options);
      await renderer.xr.setSession(this.session);
      this.session.onend = this.onSessionEnd;
    }
  }

  onSessionEnd() {
    this.session = null;
    this.audioController.stop();
    renderer.dispose();
  }

  async handleExit() {
    if (this.session) {
      await this.session.end();
      this.onSessionEnd();
    }
  }
}
