import { WebGLRenderer } from "three";
import { XrController } from "./xr.controller";

export class LockController {
  constructor(
    private readonly xrController: XrController,
    private readonly renderer: WebGLRenderer
  ) {
    document.onpointerlockchange = this.handlePointerLockChange.bind(this);
  }

  handleClick() {
    if (document.pointerLockElement !== this.renderer.domElement) {
      this.renderer.domElement.requestPointerLock();
    }
  }

  handleExit() {
    if (document.pointerLockElement === this.renderer.domElement) {
      document.exitPointerLock();
    }
  }

  private handlePointerLockChange() {
    if (!document.pointerLockElement) {
      this.xrController.handleExit();
    }
  }
}
