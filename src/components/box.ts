import {
  BoxGeometry,
  BufferGeometry,
  Color,
  FrontSide,
  Group,
  Mesh,
  MeshPhongMaterial,
  Vector3,
} from "three";

const boxGeometry = new BoxGeometry(0.4, 0.4, 0.4);
const boxMaterial = new MeshPhongMaterial({
  color: 0x2164a1,
  emissive: new Color(0x2164a1),
  emissiveIntensity: 1,
});

const arrowGeometry = new BufferGeometry().setFromPoints([
  new Vector3(0, 0),
  new Vector3(0.3, 0),
  new Vector3(0.15, 0.15),
]);
arrowGeometry.computeVertexNormals();
const arrowMaterial = new MeshPhongMaterial({
  color: 0xffffff,
  emissive: new Color(0xffffff),
  emissiveIntensity: 5,
  side: FrontSide,
});
const arrowMesh = new Mesh(arrowGeometry, arrowMaterial);
arrowMesh.rotation.z = Math.PI;
arrowMesh.position.set(0.15, 0.1, 0.2001);

const boxMesh = new Mesh(boxGeometry, boxMaterial);

export const box = new Group();
box.add(boxMesh);
box.add(arrowMesh);
