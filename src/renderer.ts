import { PCFSoftShadowMap, WebGLRenderer, ReinhardToneMapping } from "three";

export const renderer = new WebGLRenderer({
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.xr.enabled = true;
renderer.toneMapping = ReinhardToneMapping;
