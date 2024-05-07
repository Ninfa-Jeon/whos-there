"use client";
import Image from "next/image";
import InputCard from "@/components/InputCard";
import { useGuessedInfo } from "@/context/guessedInfo";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function GuessedInfo() {
  const router = useRouter();
  return <Button onClick={() => router.push("/user")}>Knock Knock</Button>;
}
