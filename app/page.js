import Image from "next/image";
import styles from "./page.module.css";
import { Center, ChakraProvider } from "@chakra-ui/react";
import Knock from "@/components/Knock";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <ParticlesBackground />
        <Knock />
      </main>
    </ChakraProvider>
  );
}
