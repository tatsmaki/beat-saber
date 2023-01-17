import { Vector2 } from "three";
import { cube } from "./cube";
import { raycaster } from "./raycaster";
import { renderer } from "../renderer";

export class MouseController {
  private touched = false;

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
      const x = touches[0].clientX / window.innerWidth - 0.5;
      const y = touches[0].clientY / window.innerHeight - 0.5;
      const camera = renderer.xr.getCamera();
      raycaster.setFromCamera(new Vector2(x, y), camera);
      const [intersection] = raycaster.intersectObject(cube);
      // if (intersection) {
      const position = raycaster.ray.origin.add(
        raycaster.ray.direction.normalize()
      );
      cube.position.x = position.x;
      cube.position.y = -position.y;
      cube.position.y = position.z;
      // }
    }
  }

  onTouchEnd() {
    this.touched = false;
  }
}
