import Image from "next/image";
import styles from "../page.module.css";
import { Center, ChakraProvider } from "@chakra-ui/react";
import InputCard from "@/components/InputCard";
import { GuessedInfoProvider } from "@/context/guessedInfo";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function User() {
  return (
    <ChakraProvider>
      <GuessedInfoProvider>
        <main className={styles.main}>
          <ParticlesBackground />
          <InputCard />
        </main>
      </GuessedInfoProvider>
    </ChakraProvider>
  );
}
