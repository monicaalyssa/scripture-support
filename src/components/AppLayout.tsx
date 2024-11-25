import { Container, Flex, Text} from "@mantine/core";
import { ReactNode } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface childrenProps {
    children: ReactNode; 
}

const MainScreen: React.FC<childrenProps> = ({ children }) => {
    const navigate = useNavigate();
    const firstChild = React.Children.toArray(children)[0];
    const secondChild = React.Children.toArray(children)[1];

    const clickTitle = () => {
        navigate('/');
    }

    // when user types an input and presses enter if it matches the data add it as a pill
    // add gradient button
    // MAX 3 emotions legend OR warning notification
    // add download/install as pwa button or popup

    return (
        <>
            <Container visibleFrom="xs" px="xl" pb="xl">
                <Text onClick={clickTitle} style={{ cursor: "pointer"}} size="lg" mt="xs" fw={900} variant="gradient" gradient={{ from: 'grape', to: 'cyan', deg: 90 }}>Scripture Support</Text>
                <Flex visibleFrom="xs" direction="column" style={{ minHeight: "73vh" }} m="0" align="center" justify="center">
                {firstChild}
                </Flex>
            </Container>

            <Flex mt={-20} direction="column" style={{ minHeight: "75vh" }} hiddenFrom="xs" p="sm" pb="xs">
            <Text size="lg" onClick={clickTitle} style={{ cursor: "pointer"}} fw={900} variant="gradient" gradient={{ from: "grape", to: "cyan", deg: 90 }}>
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
