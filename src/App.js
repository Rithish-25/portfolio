import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="scene-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Stars radius={60} depth={30} count={1500} factor={3.5} saturation={0} fade speed={0.5} />
          <ambientLight intensity={0.3} />
        </Canvas>
      </div>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
