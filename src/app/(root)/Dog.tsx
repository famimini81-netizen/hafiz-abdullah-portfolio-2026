"use client";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";

export default function Dog() {
  return (
    <Canvas
      id="canvas-elem"
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
      gl={{
        antialias: true,
        toneMapping: THREE.NoToneMapping,
        toneMappingExposure: 1.0,
      }}
    >
      <DogMesh />
    </Canvas>
  );
}

const DogMesh = () => {
  const dogTexture = useTexture("/assets/images/ai-brain.png");
  const dogModel = useRef<THREE.Group>(null);

  useThree(({ camera, gl }) => {
    camera.position.z = 0.55;
    gl.toneMapping = THREE.NoToneMapping;
    gl.toneMappingExposure = 1.0;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  dogTexture.colorSpace = THREE.SRGBColorSpace;
  dogTexture.anisotropy = 16;

  useGSAP(() => {
    if (!dogModel.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        endTrigger: "#section-3",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(dogModel.current.position, {
      z: "-=0.75",
      y: "+=0.1",
    })
      .to(dogModel.current.rotation, {
        x: `+=${Math.PI / 15}`,
      })
      .to(
        dogModel.current.rotation,
        {
          y: `-=${Math.PI}`,
        },
        "third"
      )
      .to(
        dogModel.current.position,
        {
          x: "-=0.5",
          z: "+=0.6",
          y: "-=0.05",
        },
        "third"
      );
  }, []);

  return (
    <>
      <group ref={dogModel} position={[0.2, -0.07, -0.45]} rotation={[0, Math.PI / 3.9, 0]}>
        <mesh>
          <planeGeometry args={[1.39, 0.79]} />
          <meshBasicMaterial
            map={dogTexture}
            transparent
            opacity={1}
            alphaTest={0.02}
            depthWrite={false}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={8} castShadow />
      <directionalLight position={[-3, 2, -3]} color={0xffffff} intensity={2} />
    </>
  );
};
