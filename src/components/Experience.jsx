import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const texture = useTexture("textures/gradient_akatsuki.png");
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <OrbitControls />
      <Avatar position={[0, -2, 0]} scale={2} />
      <Environment preset="sunset" />
      <mesh>
        {/* <planeGeometry args={[viewport.width, viewport.height]} /> */}
        {/* <planeGeometry args={[viewport.width, viewport.height]} rotateX={90} /> */}
        {/* <meshBasicMaterial map={texture} /> */}
        {/* <meshBasicMaterial color="blue" /> */}
      </mesh>
      <mesh position={[0, 0, -5]}>
        <boxGeometry args={[10, 10, 0.1]} />
        <meshBasicMaterial color="blue" map={texture}/>
      </mesh>
      <mesh position={[0, 0, 5]}>
        {/* <boxGeometry args={[1, 1, 1]} /> */}
        {/* <planeGeometry args={[10,10]}/> */}
        <meshBasicMaterial color="blue" transparent opacity={0} />
      </mesh>
      <mesh position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 10, 0.1]} />
        <meshBasicMaterial color="blue" map={texture}/>
      </mesh>
      <mesh position={[5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 10, 0.1]} />
        <meshBasicMaterial color="blue" map={texture}/>
      </mesh>
      <mesh position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[10, 10, 0.1]} />
        <meshBasicMaterial color="blue" map={texture}/>
      </mesh>
      <mesh position={[0, -5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[10, 10, 0.1]} />
        <meshBasicMaterial color="blue" map={texture}/>
      </mesh>
    </>
  );
};
