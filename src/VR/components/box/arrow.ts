import {
  BufferGeometry,
  Color,
  FrontSide,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from "three";

const arrowGeometry = new BufferGeometry().setFromPoints([
  new Vector3(0, 0),
  new Vector3(0.3, 0),
  new Vector3(0.15, 0.1),
]);
arrowGeometry.computeVertexNormals();

const arrowMaterial = new MeshStandardMaterial({
  color: 0x95bfe5,
  emissive: new Color(0x95bfe5),
  emissiveIntensity: 20,
  side: FrontSide,
});

export const arrowMesh = new Mesh(arrowGeometry, arrowMaterial);
arrowMesh.rotation.z = Math.PI;
arrowMesh.position.set(0.15, 0.12, 0.21);
