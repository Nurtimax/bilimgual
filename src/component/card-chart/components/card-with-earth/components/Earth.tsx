import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';

import Banner from '../../../../../assets/images/world.svg';

function Circle() {
   const ref = useRef<Mesh>(null);
   const texture = useLoader(TextureLoader, [Banner.src]);

   useFrame((_, delta) => {
      if (ref.current) {
         ref.current.rotation.y += delta * 0.2; // Adjust the rotation speed here
      }
   });

   return (
      <mesh ref={ref}>
         <sphereGeometry args={[3, 64, 64]} />
         <meshBasicMaterial map={texture.length > 0 ? texture[0] : null} color="#D5D5D5" />
      </mesh>
   );
}

export default function Earth() {
   return (
      <Canvas style={{ width: '210px', height: '180px' }} color="#fff">
         <color attach="background" args={['#fff']} />
         <ambientLight intensity={0.5} />
         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
         <pointLight position={[-10, -10, -10]} />
         <Circle />
      </Canvas>
   );
}
