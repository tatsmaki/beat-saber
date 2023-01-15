import {
  ACESFilmicToneMapping,
  PCFSoftShadowMap,
  sRGBEncoding,
  WebGLRenderer,
} from "three";

export const renderer = new WebGLRenderer({
  antialias: true,
  powerPreference: "high-performance",
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.xr.enabled = true;
renderer.outputEncoding = sRGBEncoding;
renderer.toneMapping = ACESFilmicToneMapping;
