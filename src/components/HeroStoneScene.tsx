"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mix(from: number, to: number, progress: number) {
  return from + (to - from) * progress;
}

function createStoneGeometry() {
  const geometry = new THREE.IcosahedronGeometry(1, 5);
  const position = geometry.attributes.position as THREE.BufferAttribute;
  const vertex = new THREE.Vector3();

  for (let index = 0; index < position.count; index += 1) {
    vertex.fromBufferAttribute(position, index);

    const directionalNoise =
      Math.sin(vertex.x * 4.6 + vertex.y * 2.1) * 0.07 +
      Math.cos(vertex.y * 5.3 + vertex.z * 3.4) * 0.055 +
      Math.sin(vertex.z * 6.2 + vertex.x * 1.7) * 0.045;
    const heightBias = vertex.y > 0.4 ? -0.08 : 0;

    vertex.multiplyScalar(1 + directionalNoise + heightBias);
    vertex.x *= 1.08;
    vertex.y *= 0.92;
    vertex.z *= 0.86;
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }

  geometry.computeVertexNormals();

  return geometry;
}

export function HeroStoneScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;

    if (!container || window.innerWidth < 768) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    const pointer = new THREE.Vector2();
    const smoothPointer = new THREE.Vector2();
    const stoneTarget = new THREE.Vector3();
    const stonePosition = new THREE.Vector3();
    const clock = new THREE.Clock();
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    let scrollProgress = 0;
    let animationFrame = 0;
    let isDisabled = mediaQuery.matches;

    renderer.setClearAlpha(0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    camera.position.set(0, 0, 5.2);

    const stone = new THREE.Mesh(
      createStoneGeometry(),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#cbc3b3"),
        emissive: new THREE.Color("#17120d"),
        emissiveIntensity: 0.06,
        metalness: 0.02,
        roughness: 0.86,
      }),
    );

    stone.castShadow = false;
    stone.receiveShadow = false;
    scene.add(stone);

    const rimLight = new THREE.DirectionalLight("#fff5e3", 2.7);
    rimLight.position.set(-2.6, 3.2, 3.5);
    scene.add(rimLight);

    const keyLight = new THREE.DirectionalLight("#e5d2b8", 3.4);
    keyLight.position.set(3.8, 2.4, 4.4);
    scene.add(keyLight);

    const fillLight = new THREE.HemisphereLight("#fff7ef", "#7f7568", 2.4);
    scene.add(fillLight);

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const updateScrollProgress = () => {
      const about = document.querySelector<HTMLElement>("#about");
      const aboutTop = about
        ? about.getBoundingClientRect().top + window.scrollY
        : window.innerHeight * 1.2;
      const end = Math.max(aboutTop - window.innerHeight * 0.28, 1);

      scrollProgress = clamp(window.scrollY / end, 0, 1);
    };

    const updatePointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * -2;
    };

    const updateMedia = () => {
      isDisabled = mediaQuery.matches;
      renderer.domElement.style.display = isDisabled ? "none" : "block";
    };

    const render = () => {
      const elapsed = clock.getElapsedTime();
      const progress = prefersReducedMotion ? 0 : scrollProgress;
      const ease = progress * progress * (3 - 2 * progress);

      smoothPointer.lerp(pointer, prefersReducedMotion ? 1 : 0.055);

      stoneTarget.set(
        mix(1.35, 0, ease),
        mix(0.25, -1.45, ease),
        mix(0, -0.18, ease),
      );
      stonePosition.lerp(stoneTarget, prefersReducedMotion ? 1 : 0.08);

      stone.position.copy(stonePosition);
      stone.scale.setScalar(mix(0.95, 0.66, ease));
      stone.rotation.x =
        mix(-0.18, 0.36, ease) + smoothPointer.y * 0.12;
      stone.rotation.y =
        mix(-0.56, 1.25, ease) + smoothPointer.x * 0.2 + elapsed * 0.035;
      stone.rotation.z = mix(0.08, -0.36, ease) + smoothPointer.x * 0.05;

      if (!isDisabled) {
        renderer.render(scene, camera);
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    updateScrollProgress();
    updateMedia();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    mediaQuery.addEventListener("change", updateMedia);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("pointermove", updatePointer);
      mediaQuery.removeEventListener("change", updateMedia);
      container.removeChild(renderer.domElement);
      stone.geometry.dispose();
      (stone.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-10 hidden md:block"
      aria-hidden="true"
    />
  );
}
