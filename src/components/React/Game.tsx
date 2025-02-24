import React from 'react';
import { Canvas } from "@react-three/fiber";
import Experience from './Experience';


const GameComponent: React.FC = () => {

  return (
    <section className=" h-screen ">
      <Canvas>
        <Experience />

      </Canvas>
    </section>

  );
};

export default GameComponent;
