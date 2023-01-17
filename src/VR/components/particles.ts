import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Points,
  PointsMaterial,
} from "three";

const count = 1000;
const geometry = new BufferGeometry();
const points = new Float32Array(count);
for (let i = 0; i < count; i += 1) {
  points[i] = (Math.random() - 0.5) * 30;
}
geometry.setAttribute("position", new BufferAttribute(points, 3));

const material = new PointsMaterial({
  color: 0xffffff,
  size: 0.005,
  blending: AdditiveBlending,
  transparent: true,
  opacity: 0.5,
});

export const particles = new Points(geometry, material);
