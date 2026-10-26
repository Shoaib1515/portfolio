import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export function createMonitorHead(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 0.1, 30);
  camera.position.z = 7;
  const head = new THREE.Group();
  head.rotation.z = -0.06;
  scene.add(head);
  scene.add(new THREE.HemisphereLight(0xe8efff, 0x182137, 2.4));
  for (const [color, intensity, position] of [
    [0x9eeeff, 3, [-3, 3, 5]],
    [0xd0adff, 3, [3, 2, 2]],
    [0xffb36c, 2, [3, -2, -4]],
  ]) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...position);
    scene.add(light);
  }
  const metal = new THREE.MeshStandardMaterial({
    color: 0x333b4b,
    metalness: 0.55,
    roughness: 0.4,
  });
  const dark = new THREE.MeshStandardMaterial({
    color: 0x111722,
    metalness: 0.35,
    roughness: 0.55,
  });
  const cyan = new THREE.MeshBasicMaterial({ color: 0x67e8f9 });
  const amber = new THREE.MeshBasicMaterial({ color: 0xffba7a });
  const add = (geometry, material, x, y, z) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    head.add(mesh);
    return mesh;
  };
  add(new RoundedBoxGeometry(2.7, 2.15, 1.65, 4, 0.17), metal, 0, 0, 0);
  add(new RoundedBoxGeometry(2.48, 1.94, 0.13, 3, 0.13), dark, 0, 0.02, 0.85);
  add(new RoundedBoxGeometry(2.31, 1.72, 0.08, 3, 0.12), metal, 0, 0.04, 0.94);

  const face = document.createElement("canvas");
  face.width = 512;
  face.height = 384;
  const context = face.getContext("2d");
  const texture = new THREE.CanvasTexture(face);
  texture.colorSpace = THREE.SRGBColorSpace;
  const screen = new THREE.MeshBasicMaterial({
    map: texture,
    toneMapped: false,
  });
  add(new THREE.PlaneGeometry(2.2, 1.59), screen, 0, 0.05, 0.99);
  function setEyes(x = 0, y = 0) {
    context.fillStyle = "#07101f";
    context.fillRect(0, 0, 512, 384);
    context.lineWidth = 1;
    for (let i = 0; i < 23; i++) {
      const px = 20 + ((i * 67) % 470);
      const py = 15 + ((i * 43) % 90);
      context.strokeStyle = "#7958bd80";
      context.beginPath();
      context.moveTo(px, py);
      context.lineTo((px + 51) % 490, (py + 29) % 120);
      context.stroke();
      context.fillStyle = "#ad8aff";
      context.beginPath();
      context.arc(px, py, 2, 0, Math.PI * 2);
      context.fill();
    }
    for (const cx of [166, 346]) {
      context.shadowBlur = 24;
      context.shadowColor = "#33d9ff";
      const glow = context.createRadialGradient(cx, 214, 5, cx, 214, 65);
      glow.addColorStop(0, "#e2ffff");
      glow.addColorStop(0.55, "#69eaff");
      glow.addColorStop(1, "#1a9cd0");
      context.fillStyle = glow;
      context.beginPath();
      context.ellipse(cx, 218, 54, 63, 0, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;
      context.fillStyle = "#061421";
      context.beginPath();
      context.ellipse(cx + x * 15, 203 + y * 12, 23, 32, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#f0ffff";
      context.beginPath();
      context.arc(cx - 7 + x * 15, 190 + y * 12, 7, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = "#67e8f9";
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(cx - 43, 135);
      context.quadraticCurveTo(cx, 105, cx + 42, 129);
      context.stroke();
    }
    context.fillStyle = "#67e8f909";
    for (let y = 0; y < 384; y += 4) context.fillRect(0, y, 512, 1);
    texture.needsUpdate = true;
  }
  setEyes();
  for (const side of [-1, 1]) {
    const dial = add(
      new THREE.CylinderGeometry(0.34, 0.34, 0.13, 28),
      dark,
      side * 1.38,
      0,
      -0.05,
    );
    dial.rotation.z = Math.PI / 2;
    const ring = add(
      new THREE.TorusGeometry(0.28, 0.025, 8, 32),
      side < 0 ? cyan : amber,
      side * 1.46,
      0,
      -0.05,
    );
    ring.rotation.y = Math.PI / 2;
    for (let i = 0; i < 5; i++)
      add(
        new THREE.BoxGeometry(0.025, 0.055, 0.4),
        dark,
        side * 1.36,
        0.62 - i * 0.12,
        -0.25,
      );
  }
  add(new RoundedBoxGeometry(1.9, 1.35, 0.1, 2, 0.1), dark, 0, 0, -0.86);
  for (let i = 0; i < 7; i++)
    add(
      new THREE.BoxGeometry(1.25, 0.045, 0.035),
      metal,
      0,
      0.43 - i * 0.13,
      -0.93,
    );
  add(new THREE.BoxGeometry(0.35, 0.18, 0.04), metal, -0.48, -0.81, -0.87);
  add(new THREE.BoxGeometry(0.24, 0.12, 0.045), dark, 0.22, -0.81, -0.9);
  for (let i = 0; i < 3; i++)
    add(
      new THREE.SphereGeometry(0.025, 8, 8),
      amber,
      0.75 + i * 0.1,
      -0.95,
      0.9,
    );
  for (const x of [-1.14, 1.14])
    for (const y of [-0.84, 0.85])
      add(new THREE.SphereGeometry(0.035, 8, 8), metal, x, y, 0.95);

  return {
    head,
    setEyes,
    resize(width, height) {
      const halfWidth = (width / height) * 1.5;
      camera.left = -halfWidth;
      camera.right = halfWidth;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    },
    render() {
      renderer.render(scene, camera);
    },
    dispose() {
      const geometries = new Set();
      const materials = new Set();
      head.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) materials.add(object.material);
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      texture.dispose();
      renderer.dispose();
    },
  };
}
