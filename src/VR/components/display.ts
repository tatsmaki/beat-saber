import {
  CanvasTexture,
  Color,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
} from "three";

const canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 100;
export const context = canvas.getContext("2d")!;
// context.fillStyle = "#fff";
context.clearRect(0, 0, canvas.width, canvas.height);
context.font = "32px arial";
context.fillStyle = "#ffffff";

export const texture = new CanvasTexture(context.canvas);
export const display = new Mesh(
  new PlaneGeometry(2, 1),
  new MeshStandardMaterial({
    map: texture,
    transparent: true,
    emissive: new Color(0xffffff),
    emissiveIntensity: 5,
  })
);
display.position.set(-2, 0.5, -5);
display.rotation.y = 0.3;

export const STATE = {
  score: 0,
  multiply: 1,
};
