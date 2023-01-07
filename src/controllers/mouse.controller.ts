import { Euler, Group } from "three";

export class MouseController {
  private euler = new Euler(0, 0, 0, "YXZ");

  constructor(private readonly head: Group) {
    document.onmousemove = this.handleMouseMove.bind(this);
  }

  private handleMouseMove(event: MouseEvent) {
    if (document.pointerLockElement) {
      const { movementX, movementY } = event;
      this.euler.setFromQuaternion(this.head.quaternion);
      this.euler.y -= movementX * 0.004;
      this.euler.x -= movementY * 0.004;
      this.euler.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, this.euler.x)
      );
      this.head.quaternion.setFromEuler(this.euler);
    }
  }
}
