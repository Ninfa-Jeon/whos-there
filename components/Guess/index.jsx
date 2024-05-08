"use client";
import "./style.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  PresentationControls,
  ContactShadows,
  Html,
} from "@react-three/drei";
import Man from "../../public/Man";
import Woman from "../../public/Woman";
import ReactDOM from "react-dom/client";
import { useGuessedInfo } from "@/context/guessedInfo";

function Experience({ age, gender, nationality, name }) {
  return (
    <>
      <ambientLight />
      <directionalLight position={[1, 5, 2]} />
      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        rotation={[-0.13, 0.1, 0]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tenstion: 400 }}
      >
        <Float>
          <Suspense fallback={null}>
            {gender.toLowerCase() == "male" ? (
              <Man scale={0.03} position={[-4, -5, 0]} />
            ) : (
              <Woman scale={0.03} position={[-4, -5, 0]} />
            )}
            <Html transform position={[4, 0, 0]}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <div
                  className={`card card-${gender}`}
                  style={{ background: "ivory" }}
                >
                  <div className="info">{`${name}'s details:`}</div>
                  <div className="info">Age: {age}</div>
                  <div className="info">Gender: {gender}</div>
                  <div className="info">Nationality: {nationality}</div>
                </div>
                <a className="btn--basic" href="/">
                  Play again?
                </a>
              </div>
            </Html>
          </Suspense>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-6} opacity={0.5} scale={15} blur={2} />
    </>
  );
}

export default function Guess() {
  const { age, gender, nationality, name } = useGuessedInfo();
  return (
    <Canvas
      className="r3f"
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 20],
      }}
    >
      <Experience
        age={age}
        gender={gender}
        nationality={nationality}
        name={name}
      />
    </Canvas>
  );
}
