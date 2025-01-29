import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 35, near: 0.1, far: 1000 }}>
      <color attach="background" args={["black"]} />
      <Experience />
       {/* Post-processing effects */}
       {/* <EffectComposer>
        <DepthOfField
          focusDistance={0.02} // Distance to focus on (between 0 and 1)
          focalLength={0.1} // Lens focal length
          bokehScale={2} // Bokeh intensity (higher = more blur)
        />
      </EffectComposer> */}

    </Canvas>
  );
}

export default App;
