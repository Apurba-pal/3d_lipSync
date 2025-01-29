import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 90 }}>
      <color attach="background" args={["black"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
