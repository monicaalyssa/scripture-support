import { Box, Button, Flex, MultiSelect, Text, Title, Transition } from "@mantine/core";
import Scripture from "./Scripture";
import { useEffect, useState } from "react";
import { SAD_SCRIPTURES } from "../constants/scriptures.tsx";
import { ANXIOUS_SCRIPTURES } from "../constants/scriptures.tsx";
import { SCARED_SCRIPTURES } from "../constants/scriptures.tsx";
import classes from "./MainScreen.module.css";

const MobileComponent = () => {
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [inputScreen, setInputScreen] = useState<boolean>(true);
  const [randomScripture, setRandomScriptue] = useState<any | null>(null);
  const [lastScripture, setLastScripture] = useState<any | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  function alertText() {
    if (selectedEmotions.length === 0) {
      alert("Please select your emotions first!");
    } else {
      setInputScreen(false);
      scripturePicker();
      setMounted(false);
    }
  }

  const scripturePicker = () => {
    let combinedSciptureLists: any[] = [];

    if (selectedEmotions.includes("Sad")) {
      combinedSciptureLists = [...combinedSciptureLists, ...SAD_SCRIPTURES];
    }

    if (selectedEmotions.includes("Anxious")) {
      combinedSciptureLists = [...combinedSciptureLists, ...ANXIOUS_SCRIPTURES];
    }

    if (selectedEmotions.includes("Scared")) {
      combinedSciptureLists = [...combinedSciptureLists, ...SCARED_SCRIPTURES];
    }

    let randomIndex;
    let selectedScripture;
    do {
      randomIndex = Math.floor(Math.random() * combinedSciptureLists.length);
      selectedScripture = combinedSciptureLists[randomIndex];
    } while (selectedScripture === lastScripture);
    setRandomScriptue(selectedScripture);
    setLastScripture(selectedScripture);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
        <Flex direction="column" flex={1} m="0" align="center" justify="center">
          {inputScreen ? (
            <>
              <Transition transition="fade-up" mounted={mounted} duration={400}>
                {(styles) => (
                  <Box style={styles}>
                    <Title order={2}>I'm feeling...</Title>
                    <MultiSelect
                      placeholder="How are you feeling?"
                      data={["Sad", "Anxious", "Scared", "Placeholder"]}
                      searchable
                      clearable
                      size="md"
                      mt="lg"
                      radius="lg"
                      value={selectedEmotions}
                      onChange={setSelectedEmotions}
                      className={classes.responsive}
                      nothingFoundMessage="Nothing found, try one of the options from the menu :-)"
                      maxValues={3}
                      hidePickedOptions
                      comboboxProps={{ transitionProps: { transition: "pop", duration: 200 } }}
                    />
                    <Button bg="teal" onClick={alertText} size="md" mt="lg">
                      Get my scripture
                      <Text mt={1} ml={6} size="21" span>
                        ☺️
                      </Text>
                    </Button>
                  </Box>
                )}
              </Transition>
            </>
          ) : (
            <>
              <Scripture
                setMounted={setMounted}
                setInputScreen={setInputScreen}
                inputScreen={inputScreen}
                scripturePicker={scripturePicker}
                randomScripture={randomScripture}
                selectedEmotions={selectedEmotions}
              />
            </>
          )}
        </Flex>
    </>
  );
};

export default MobileComponent;
