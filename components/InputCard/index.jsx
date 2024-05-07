"use client";
import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import guessService from "@/services/guessService";
import { useGuessedInfo } from "@/context/guessedInfo";
import Guess from "../Guess";

export default function InputCard() {
  const [name, setName] = useState("");
  const [showData, setShowData] = useState(false);
  const {
    showSpinner,
    setShowSpinner,
    setName: setUserName,
    setAge,
    setGender,
    setNationality,
  } = useGuessedInfo();

  const handleClick = async () => {
    if (!name.length) return;
    setUserName(name);
    setShowSpinner(true);
    await guessService.getAge({ name }).then((response) => {
      if (!response.errors && response.statusCode === 200) {
        setAge(response.data.age);
      }
    });
    await guessService.getGender({ name }).then((response) => {
      if (!response.errors && response.statusCode === 200) {
        setGender(response.data.gender);
      }
    });
    await guessService.getNationality({ name }).then((response) => {
      if (!response.errors && response.statusCode === 200) {
        setNationality(response.data.country[0]["country_id"]);
      }
    });
    setShowSpinner(false);
    setShowData(true);
  };

  return (
    <>
      {showSpinner && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            content: "",
            zIndex: 2,
          }}
        >
          <Spinner
            size="xl"
            sx={{ position: "absolute", top: "50%", left: "50%", zIndex: 3 }}
          />
        </div>
      )}
      {showData ? (
        <Guess />
      ) : (
        <Card maxW="sm">
          <CardBody>
            <Stack mt="6" spacing="3">
              <FormControl>
                <FormLabel fontSize="48px">{`Who's there?`}</FormLabel>
                <Input
                  autoFocus
                  disabled={showSpinner}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              width="full"
              onClick={handleClick}
              disabled={showSpinner}
            >
              {showData ? "Play again?" : "Next"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
