import { WebGLRenderer } from "three";
import { LockController } from "./lock.controller";
import { XrController } from "./xr.controller";

export class WebController {
  button = document.getElementById("root") as HTMLButtonElement;

  constructor(
    private readonly xrController: XrController,
    private readonly lockController: LockController,
    private readonly renderer: WebGLRenderer
  ) {
    this.button.onclick = this.handleClick.bind(this);
  }

  handleClick() {
    this.xrController.handleClick();
    setTimeout(() => {
      this.lockController.handleClick(this.renderer.domElement);
    }, 500);
  }
}
