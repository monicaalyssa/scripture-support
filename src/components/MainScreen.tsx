import { Box, Button, Container, Flex, MultiSelect, Text, Title, Transition } from "@mantine/core";
import classes from "./MainScreen.module.css"
import { useEffect, useState } from "react";
import Scripture from "./Scripture";
import { SAD_SCRIPTURES } from "../constants/scriptures.tsx"
import { ANXIOUS_SCRIPTURES } from "../constants/scriptures.tsx"
import { SCARED_SCRIPTURES } from "../constants/scriptures.tsx"


function MainScreen() {
    const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
    const [inputScreen, setInputScreen] = useState<boolean>(true);
    const [randomScripture, setRandomScriptue] = useState<any | null>(null);
    const [lastScripture, setLastScripture] = useState<any | null>(null);
    const [mounted, setMounted] = useState<boolean>(false)

    function alertText() {
        if (selectedEmotions.length === 0) {
            alert('Please select your emotions first!');
        } else {
            setInputScreen(false)
            scripturePicker();
            setMounted(false) 
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
        setMounted(true)
    }, []);

    // add emotions happy, lost, betrayed, joyful, heartbroke, insecure, and angry
    // when user is done adding any amount of items in the input box and presses enter, run get my scripture
    // when the nothing found message shows up move button down
    // when user types an input and presses enter if it matches the data add it as a pill
    // add loading button when get my scripture is clicked
    // add gradient button
    // MAX 3 emotions legend OR warning notificaiton
    // when Jesus is speaking add red text!
    // add download as pwa button
    // add copy scritpure button, and maybe save as image
    // pwa logic to show a "new version available" prompt so users can refresh the app
    // on smaller verses on mobile the button does not take full width
    // add resources section like the bible app, bibleproject, etc

    return (
        <>
        
            <Container visibleFrom="xs" px="xl" pb="xl">
                <Text size="lg" mt="xs" fw={900} variant="gradient" gradient={{ from: 'grape', to: 'cyan', deg: 90 }}>Scripture Support</Text>
                <Flex direction="column" style={{ minHeight: "78vh" }} m="0" align="center" justify="center">
                {inputScreen ? (
                    <>
                    <Transition transition="fade-up" mounted={mounted} duration={400}>
                    {(styles) => (
                    <Box style={styles}>
                    <Title>I'm feeling...</Title>
                    <MultiSelect
                        placeholder="How are you feeling?"
                        data={["Sad", "Anxious", "Scared", "Placeholder"]}
                        searchable
                        clearable
                        size="lg"
                        mt="xl"
                        radius="lg"
                        className={classes.responsive}
                        nothingFoundMessage="Nothing found, try one of the options from the menu :-)"
                        maxValues={3}
                        value={selectedEmotions}
                        onChange={setSelectedEmotions}
                        hidePickedOptions
                        comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                    />
                    <Button bg="teal" onClick={alertText} size="lg" mt="xl" >Get my scripture<Text mt={1} ml={6} size="22" span>☺️</Text></Button>

                    </Box>
                    )}
                    </Transition>
                    </>  ) : (
                    <>
                        <Scripture setMounted={setMounted} setInputScreen={setInputScreen} inputScreen={inputScreen} scripturePicker={scripturePicker} randomScripture={randomScripture} selectedEmotions={selectedEmotions} />

                    </>
 
            )}
                </Flex>
            </Container>
              <Flex mt={-20} direction="column" style={{ minHeight: "80vh" }} hiddenFrom="xs" p="sm" pb="xs">
                <Text size="lg" fw={900} variant="gradient" gradient={{ from: 'grape', to: 'cyan', deg: 90 }}>Scripture Support</Text>
                <Flex direction="column" flex={1}  m="0" align="center" justify="center">

                {inputScreen ? (
                    <>
                    <Transition transition="fade-up" mounted={mounted} duration={400}>
                    {(styles) => (
                    <Box style={styles}>
                    <Title order={2} >I'm feeling...</Title>
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
                        comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                    />
                    <Button bg="teal" onClick={alertText} size="md" mt="lg">Get my scripture<Text mt={1} ml={6} size="21" span>☺️</Text></Button>
                    </Box>
                    )}
                    </Transition>
                    
                    </>  ) : (
                    <>
                        <Scripture setMounted={setMounted} setInputScreen={setInputScreen} inputScreen={inputScreen} scripturePicker={scripturePicker} randomScripture={randomScripture} selectedEmotions={selectedEmotions} />
                    </>
                )}
                </Flex>
            </Flex>
        </>
    );
}

export default MainScreen;
