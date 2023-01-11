import { Color, Fog, Scene } from "three";

export const scene = new Scene();

// scene.background = new Color(0xb8dbf1); // blue
scene.background = new Color(0x1a1917); // dark warm
scene.fog = new Fog(0x1a1917, 1, 10);
