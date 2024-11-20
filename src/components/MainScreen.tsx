import { Button, Container, Flex, MultiSelect, Text, Title } from "@mantine/core";
import classes from "./MainScreen.module.css"

function MainScreen() {

    function alertText() {
        alert('Scripture loading..!')
    }

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
                    <Title>I'm feeling...</Title>
                    <MultiSelect
                        placeholder="How are you feeling?"
                        data={["Sad", "Anxious", "Happy", "Lost", "Betrayed", "Joyful", "Heartbroken", "Scared", "Insecure", "Angry"]}
                        searchable
                        clearable
                        size="lg"
                        mt="xl"
                        radius="lg"
                        className={classes.responsive}
                        nothingFoundMessage="Nothing found, try one of the options from the menu :-)"
                        maxValues={3}
                        hidePickedOptions
                        comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                    />
                    <Button bg="teal" onClick={alertText} size="lg" mt="xl" >Get my scripture<Text mt={1} ml={6} size="22" span>☺️</Text></Button>
                </Flex>
            </Container>
            <Container hiddenFrom="xs" p="xl">
                <Text size="lg" fw={900} variant="gradient" gradient={{ from: 'grape', to: 'cyan', deg: 90 }}>Scripture Support</Text>
                <Flex direction="column" style={{ minHeight: "80vh" }} m="0" align="center" justify="center">
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
                    <Button bg="teal" onClick={alertText} size="md" mt="lg" >Get my scripture<Text mt={1} ml={6} size="21" span>☺️</Text></Button>
                </Flex>
            </Container>
        </>
    );
}

export default MainScreen;
