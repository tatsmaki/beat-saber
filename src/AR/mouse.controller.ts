import { Vector2, Vector3 } from "three";
import { cube } from "./cube";
import { raycaster } from "./raycaster";
import { renderer } from "../renderer";

export class MouseController {
  private touched = false;
  private clientX = 0;
  private clientY = 0;

  constructor() {
    document.ontouchstart = this.onTouchStart.bind(this);
    document.ontouchmove = this.onTouchMove.bind(this);
    document.ontouchend = this.onTouchEnd.bind(this);
  }

  onTouchStart() {
    this.touched = true;
  }

  onTouchMove(event: TouchEvent) {
    if (this.touched) {
      const { touches } = event;
      const { clientX, clientY } = touches[0];
      const movementX = clientX - this.clientX;
      const movementY = this.clientY - clientY;
      this.clientX = clientX;
      this.clientY = clientY;
      const camera = renderer.xr.getCamera();
      const movement = new Vector3(movementX, movementY, 0)
        .normalize()
        .applyQuaternion(camera.quaternion);
      // console.log(movement);
      // const x = touches[0].clientX / window.innerWidth - 0.5;
      // const y = touches[0].clientY / window.innerHeight - 0.5;

      cube.position.x += movement.x;
      cube.position.y += movement.y;
      console.log(camera.quaternion);
      // raycaster.setFromCamera(new Vector2(x, y), camera);
      // const [intersection] = raycaster.intersectObject(cube);
      // if (intersection) {
      // const position = cube.position.add(raycaster.ray.direction);
      // cube.position.x = touches[0].posotip
      // cube.position.y = -position.y;
      // cube.position.y = position.z;
      // }
    }
  }

  onTouchEnd() {
    this.touched = false;
  }
}
