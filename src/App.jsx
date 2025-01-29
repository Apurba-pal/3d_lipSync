import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 35, near: 0.1, far: 1000 }}>
      <color attach="background" args={["black"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
