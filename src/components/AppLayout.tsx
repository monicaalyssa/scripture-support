import { Container, Flex, Text} from "@mantine/core";
import { ReactNode } from "react";
import React from "react";

interface childrenProps {
    children: ReactNode; 
}

const MainScreen: React.FC<childrenProps> = ({ children }) => {

    const firstChild = React.Children.toArray(children)[0];
    const secondChild = React.Children.toArray(children)[1];

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
                <Flex visibleFrom="xs" direction="column" style={{ minHeight: "73vh" }} m="0" align="center" justify="center">
                {firstChild}
                </Flex>
            </Container>

            <Flex mt={-20} direction="column" style={{ minHeight: "75vh" }} hiddenFrom="xs" p="sm" pb="xs">
            <Text size="lg" fw={900} variant="gradient" gradient={{ from: "grape", to: "cyan", deg: 90 }}>
                Scripture Support
             </Text>
             <Flex direction="column" flex={1} m="0" align="center" justify="center">
                {secondChild}
            </Flex>
            </Flex>
        </>
    );
}

export default MainScreen;
