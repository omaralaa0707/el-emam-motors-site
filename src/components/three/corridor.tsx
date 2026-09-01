"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, Suspense } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/use-browser";
import { useWebglHealth } from "@/lib/use-webgl-health";

/**
 * Signature technique for this site: the camera flies down a corridor of
 * handover photographs, so scrolling walks you past customers collecting their
 * cars. Distinct from a rotating carousel — the movement here is depth, not
 * spin.
 */
function Hall({
  urls,
  progressRef,
}: {
  urls: string[];
  progressRef: React.RefObject<number>;
}) {
  const textures = useLoader(THREE.TextureLoader, urls);
  const camRef = useRef(0);
  const spacing = 3.6;

  const panels = useMemo(
    () =>
      textures.flatMap((tex, i) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        // Alternate walls so the eye is pulled left/right down the hall.
        const side = i % 2 === 0 ? -1 : 1;
        return [
          {
            tex,
            position: new THREE.Vector3(side * 2.9, 0, -i * spacing),
            rotation: new THREE.Euler(0, side * -0.42, 0),
          },
        ];
      }),
    [textures]
  );

  useFrame((state, delta) => {
    const p = progressRef.current ?? 0;
    const target = -p * (textures.length - 1) * spacing;
    camRef.current = THREE.MathUtils.damp(camRef.current, target, 3.4, delta);
    state.camera.position.z = camRef.current + 5.4;
    state.camera.position.x = Math.sin(p * Math.PI * 2) * 0.28;
    state.camera.lookAt(0, 0, camRef.current - 2);
  });

  return (
    <group>
      {panels.map((p, i) => (
        <mesh key={i} position={p.position} rotation={p.rotation}>
          <planeGeometry args={[2.55, 3.2]} />
          <meshBasicMaterial map={p.tex} toneMapped={false} side={THREE.DoubleSide} />
        </mesh>
      ))}
      {/* Ivory fog so panels resolve out of the page colour rather than black. */}
      <fog attach="fog" args={["#f6f2e9", 9, 30]} />
    </group>
  );
}

export function Corridor({
  urls,
  progressRef,
  className,
  onLost,
}: {
  urls: string[];
  progressRef: React.RefObject<number>;
  className?: string;
  /** Fires when the GPU drops this context so the caller can show images. */
  onLost?: (lost: boolean) => void;
}) {
  const reduced = useReducedMotion();
  const { lost, bind } = useWebglHealth();

  useEffect(() => {
    onLost?.(lost);
  }, [lost, onLost]);

  if (reduced || lost) return null;

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 55 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true }}
        onCreated={({ gl }) => bind(gl.domElement)}
      >
        <color attach="background" args={["#f6f2e9"]} />
        <Suspense fallback={null}>
          <Hall urls={urls} progressRef={progressRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
