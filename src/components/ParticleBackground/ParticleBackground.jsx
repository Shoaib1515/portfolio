"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    const shapeDefs = [
      { geo: new THREE.IcosahedronGeometry(3.1, 0), color: 0x22d3ee, pos: [-7.5, 3, -5] },
      { geo: new THREE.OctahedronGeometry(2.5, 0), color: 0xe879f9, pos: [6.5, -2.2, -3] },
      { geo: new THREE.TorusGeometry(2.3, 0.5, 8, 40), color: 0xfb923c, pos: [1, 4.2, -9] },
    ];

    const meshes = shapeDefs.map((def) => {
      const material = new THREE.MeshBasicMaterial({
        color: def.color,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      });
      const mesh = new THREE.Mesh(def.geo, material);
      mesh.position.set(...def.pos);
      group.add(mesh);
      return mesh;
    });
    scene.add(group);

    let mouseX = 0,
      mouseY = 0;
    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    }
    container.addEventListener("mousemove", onMouseMove);

    let frameId;
    function renderFrame() {
      if (!prefersReduced) {
        meshes[0].rotation.x += 0.0035;
        meshes[0].rotation.y += 0.0045;
        meshes[1].rotation.x += 0.005;
        meshes[1].rotation.y -= 0.0035;
        meshes[2].rotation.x += 0.0025;
        meshes[2].rotation.z += 0.004;
        group.rotation.y += (mouseX * 0.4 - group.rotation.y) * 0.04;
        group.rotation.x += (-mouseY * 0.3 - group.rotation.x) * 0.04;
      }
      renderer.render(scene, camera);
      if (!prefersReduced) frameId = requestAnimationFrame(renderFrame);
    }
    renderFrame();

    function onResize() {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      meshes.forEach((m) => {
        m.geometry.dispose();
        m.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
