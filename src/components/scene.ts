import { Color, FogExp2, Scene } from "three";

export const scene = new Scene();

scene.background = new Color(0x0d0217);
scene.fog = new FogExp2(0x0d0217, 0.02);
