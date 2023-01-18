import {
  CanvasTexture,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
} from "three";

const canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 100;
export const context = canvas.getContext("2d")!;
context.fillStyle = "#fff";
context.fillRect(0, 0, canvas.width, canvas.height);
context.font = "32px arial";
context.fillStyle = "#000";

export const texture = new CanvasTexture(context.canvas);
export const display = new Mesh(
  new PlaneGeometry(2, 1),
  new MeshStandardMaterial({ map: texture })
);
display.position.set(-3, 1, -5);
display.rotation.y = 0.3;
