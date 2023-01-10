import { Color } from "three";
import { ambientLight } from "../components/ambient-light";
import { scene } from "../components/scene";
import { directionalLight, sun } from "../components/sun";

enum TimesOfDay {
  Day = "day",
  Night = "night",
}

let timeOfDay = TimesOfDay.Night;

const dayTransitionValues = [
  [0.1, 0.2],
  [0.2, 0.2],
  [0.3, 0.2],
  [0.4, 0.2],
  [0.5, 0.25],
  [0.6, 0.3],
  [0.7, 0.35],
  [0.8, 0.4],
  [0.9, 0.45],
  [1, 0.5],
];

const dayTransition = () => {
  timeOfDay = TimesOfDay.Day;
  dayTransitionValues.forEach(([dli, ali], index) => {
    setTimeout(() => {
      directionalLight.intensity = dli;
      ambientLight.intensity = ali;
    }, index * 500);
  });
};

const nightTransition = () => {
  timeOfDay = TimesOfDay.Night;
  [...dayTransitionValues].reverse().forEach(([dli, ali], index) => {
    setTimeout(() => {
      directionalLight.intensity = dli;
      ambientLight.intensity = ali;
    }, index * 500);
  });
};

export const sunFrame = () => {
  sun.rotation.z -= 0.001;
  const time = (sun.rotation.z / Math.PI) % 2;
  if (time > -0.8 && timeOfDay === TimesOfDay.Night) {
    dayTransition();
  }
  if (time < -0.8 && timeOfDay === TimesOfDay.Day) {
    nightTransition();
  }
};
