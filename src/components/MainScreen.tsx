import { Button, Container, Flex, MultiSelect, Text, Title } from "@mantine/core";
import classes from "./MainScreen.module.css"
import { useState } from "react";
import Scripture from "./Scripture";
import { SAD_SCRIPTURES } from "../constants/scriptures.tsx"
import { ANXIOUS_SCRIPTURES } from "../constants/scriptures.tsx"


function MainScreen() {
    const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
    const [inputScreen, setInputScreen] = useState<boolean>(true);
    const [randomScripture, setRandomScriptue] = useState<any | null>(null);
    const [lastScripture, setLastScripture] = useState<any | null>(null);

    function alertText() {
        if (selectedEmotions.length === 0) {
            alert('Please select your emotions first!');
        } else {
            setInputScreen(false)
            scripturePicker();
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

      let randomIndex;
      let selectedScripture;
      do {
        randomIndex = Math.floor(Math.random() * combinedSciptureLists.length);
        selectedScripture = combinedSciptureLists[randomIndex];
      } while (selectedScripture === lastScripture);
      setRandomScriptue(selectedScripture);
      setLastScripture(selectedScripture);
    };

    // add emotions happy, lost, betrayed, joyful, heartbroke, insecure, and angry
    // when user is done adding any amount of items in the input box and presses enter, run get my scripture
    // when the nothing found message shows up move button down
    // when user types an input and presses enter if it matches the data add it as a pill
    // add loading button when get my scripture is clicked
    // add gradient button
    // MAX 3 emotions legend

    return (
        <>
        
            <Container visibleFrom="xs" p="xl">
                <Text size="lg" fw={900} variant="gradient" gradient={{ from: 'grape', to: 'cyan', deg: 90 }}>Scripture Support</Text>
                <Flex direction="column" style={{ minHeight: "80vh" }} m="0" align="center" justify="center">
                    
                {inputScreen ? (
                    <>
                    <Title>I'm feeling...</Title>
                    <MultiSelect
                        placeholder="How are you feeling?"
                        data={["Sad", "Anxious", "Scared"]}
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
                    </>  ) : (
                    <>
                        <Scripture setInputScreen={setInputScreen} inputScreen={inputScreen} scripturePicker={scripturePicker} randomScripture={randomScripture} selectedEmotions={selectedEmotions} />
                    </>
                )}         
                </Flex>
            </Container>
              <Container hiddenFrom="xs" p="xl">
                <Text size="lg" fw={900} variant="gradient" gradient={{ from: 'grape', to: 'cyan', deg: 90 }}>Scripture Support</Text>
                <Flex direction="column" style={{ minHeight: "80vh" }} m="0" align="center" justify="center">

                {inputScreen ? (
                    <>
                    
                    <Title order={2} >I'm feeling...</Title>
                    <MultiSelect
                        placeholder="How are you feeling?"
                        data={["Sad", "Anxious", "Happy", "Lost", "Betrayed", "Joyful", "Heartbroken", "Scared", "Insecure", "Angry"]}
                        searchable
                        clearable
                        size="md"
                        mt="lg"
                        radius="lg"
                        className={classes.responsive}
                        nothingFoundMessage="Nothing found, try one of the options from the menu :-)"
                        maxValues={3}
                        hidePickedOptions
                        comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                    />
                    <Button bg="teal" onClick={alertText} size="md" mt="lg">Get my scripture<Text mt={1} ml={6} size="21" span>☺️</Text></Button>
                    </>  ) : (
                    <>
                        <Scripture setInputScreen={setInputScreen} inputScreen={inputScreen} scripturePicker={scripturePicker} randomScripture={randomScripture} selectedEmotions={selectedEmotions} />
                    </>
                )}
                </Flex>
            </Container>
        </>
    );
}

export default MainScreen;
