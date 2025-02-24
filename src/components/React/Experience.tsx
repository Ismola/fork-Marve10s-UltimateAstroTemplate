import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Chess_board } from './Chess_board';


const Experience: React.FC = () => {

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />


      <OrbitControls />
      <Chess_board />

    </>
  );
};

export default Experience;
