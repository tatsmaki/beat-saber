import { Color, FogExp2, Scene } from "three";

export const scene = new Scene();

scene.background = new Color(0x042036);
scene.fog = new FogExp2(0x042036, 0.02);
