// frontend/src/components/Scene.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ChessBoard() {
  const squares = useMemo(() => {
    const arr = [];
    for (let x = 0; x < 8; x++) {
      for (let z = 0; z < 8; z++) {
        arr.push({
          key: `${x}-${z}`,
          pos: [x - 3.5, 0, z - 3.5],
          color: (x + z) % 2 === 0 ? '#E8E3D9' : '#2C241B'
        });
      }
    }
    return arr;
  }, []);

  return (
    <group rotation={[0, Math.PI / 4, 0]} position={[0, -0.5, 0]}>
      {squares.map((sq) => (
        <mesh key={sq.key} position={sq.pos as any} receiveShadow>
          <boxGeometry args={[1, 0.2, 1]} />
          <meshStandardMaterial color={sq.color} roughness={0.8} metalness={0.1} />
        </mesh>
      ))}
      <ContactShadows opacity={0.6} scale={12} blur={2} far={4} color="#000" />
    </group>
  );
}

function ParticleExplosion({ position }: { position: [number, number, number] }) {
  const pointsRef = useRef<THREE.Points>(null!);
  
  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= delta * 2;
      positions[i] += (Math.random() - 0.5) * delta;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  const particles = useMemo(() => {
    const count = 100;
    const pos = new Float32Array(count * 3);
    for(let i=0; i<count*3; i++) pos[i] = (Math.random() - 0.5) * 0.5;
    return pos;
  }, []);

  return (
    <points ref={pointsRef} position={position}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={100} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00F0FF" transparent opacity={0.8} />
    </points>
  );
}

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
      <color attach="background" args={['#0A0A0F']} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <ChessBoard />
      <ParticleExplosion position={[0, 1, 0]} />
      <OrbitControls enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.5} />
      <Environment preset="city" />
    </Canvas>
  );
}