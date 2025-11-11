"use client";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function SpinningKnot() {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh>
        <torusKnotGeometry args={[1.2, 0.35, 220, 32]} />
        <meshStandardMaterial
          metalness={0.85}
          roughness={0.2}
          color={"#D4AF37"}
          envMapIntensity={2.5}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="h-[420px] w-full rounded-3xl overflow-hidden glass">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <SpinningKnot />
        <Environment preset="city" />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
