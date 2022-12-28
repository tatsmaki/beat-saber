import { WebGLRenderer } from "three";
import { scene } from "./components/scene";
import { ground } from "./components/ground";
import { ambientLight } from "./components/ambient-light";
import { camera } from "./components/camera";

scene.add(ground);
scene.add(ambientLight);
scene.add(camera);

const renderer = new WebGLRenderer({ antialias: true });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.xr.enabled = true;

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});

window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const start = async () => {
  if (navigator.xr) {
    const mode = "immersive-vr";
    await navigator.xr.isSessionSupported(mode);
    const options = {
      optionalFeatures: [
        "local-floor",
        "bounded-floor",
        "hand-tracking",
        "layers",
      ],
    };
    const session = await navigator.xr.requestSession(mode, options);
    await renderer.xr.setSession(session);
  }
};

start();
