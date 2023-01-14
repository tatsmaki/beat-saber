import { renderer } from "../renderer";
import { AudioController } from "./audio.controller";

export class XrController {
  private session: XRSession | null = null;

  constructor(private readonly audioController: AudioController) {}

  async handleClick() {
    if (navigator.xr) {
      const mode = "immersive-vr";
      const options = {
        optionalFeatures: [
          "local",
          "local-floor",
          "viewer",
          "anchor",
          "depth-sensing",
          "layers",
        ],
      };
      this.session = await navigator.xr.requestSession(mode, options);
      await renderer.xr.setSession(this.session);
    }
  }

  async handleExit() {
    if (this.session) {
      await this.session.end();
      this.session = null;
      this.audioController.stop();
      renderer.dispose();
    }
  }
}
