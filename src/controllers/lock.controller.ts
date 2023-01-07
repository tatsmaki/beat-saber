import { XrController } from "./xr.controller";

export class LockController {
  private canvas: HTMLCanvasElement | null = null;

  constructor(private readonly xrController: XrController) {
    document.onpointerlockchange = this.handlePointerLockChange.bind(this);
  }

  handleClick(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    if (document.pointerLockElement !== this.canvas) {
      this.canvas.requestPointerLock();
    }
  }

  handleExit() {
    if (document.pointerLockElement === this.canvas) {
      document.exitPointerLock();
    }
  }

  private handlePointerLockChange() {
    if (!document.pointerLockElement) {
      this.xrController.handleExit();
    }
  }
}
