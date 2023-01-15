import { Color, FogExp2, Scene } from "three";

export const scene = new Scene();

scene.background = new Color(0x05000a);
scene.fog = new FogExp2(0x05000a, 0.02);
