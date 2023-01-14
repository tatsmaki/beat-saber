import { renderer } from "../renderer";
import { XrController } from "./xr.controller";

export class LockController {
  constructor(private readonly xrController: XrController) {
    document.onpointerlockchange = this.handlePointerLockChange.bind(this);
  }

  handleClick() {
    if (document.pointerLockElement !== renderer.domElement) {
      renderer.domElement.requestPointerLock();
    }
  }

  handleExit() {
    if (document.pointerLockElement === renderer.domElement) {
      document.exitPointerLock();
    }
  }

  private handlePointerLockChange() {
    if (!document.pointerLockElement) {
      this.xrController.handleExit();
    }
  }
}
