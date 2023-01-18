import { Color, FogExp2, Scene } from "three";
import { boxes } from "./components/boxes";
import { display } from "./components/display";
import { equalizer } from "./components/equalizer";
import { ground } from "./components/ground";
import { head } from "./components/head";
import { ladder } from "./components/ladder";
import { particles } from "./components/particles";
import { rightHand } from "./components/right-hand";
import { pointLight } from "./point-light";

export const scene = new Scene();
scene.background = new Color(0x042036);
scene.fog = new FogExp2(0x042036, 0.02);

scene.add(ground);
scene.add(head, rightHand);
scene.add(equalizer);
scene.add(boxes);
scene.add(particles);
scene.add(pointLight);
scene.add(ladder);
scene.add(display);
