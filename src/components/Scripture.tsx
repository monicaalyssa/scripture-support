import { Box, Button, Flex, Text, Title, Tooltip } from "@mantine/core";
import { IconMoodPlus } from "@tabler/icons-react";

interface emotionsProps {
    selectedEmotions: string[];
    randomScripture: { location: string, verse: string, translation: string, } | null;
    scripturePicker: () => void;
    setInputScreen: React.Dispatch<React.SetStateAction<boolean>>;
    inputScreen: boolean;
}

const Scripture: React.FC<emotionsProps> = ({ inputScreen, setInputScreen, randomScripture, scripturePicker }) => {

    const backToHome = () => {
        if (inputScreen === false) {
            setInputScreen(true);
        }
    };

    // add responsive text size and button size for mobile version

    return(
        <>
        <Box visibleFrom="xs">
        { randomScripture ? (
            <Box mb="xl" pb="md" pt="md" mt="xl"> 
                <Title order={3}>"{randomScripture.verse}"</Title>
                <Flex mt="lg" direction="row" align="center" justify="center" gap={6}>
                <Text  size="xl">({randomScripture.location}</Text> 
                <Tooltip withArrow position="bottom-start" offset={-3} label="Translation"
                 transitionProps={{ transition: 'scale-x', duration: 300 }}>
                <Text c="blue" size="xl">{randomScripture.translation}<Text size="xl" c="#000" span>)</Text></Text>
                </Tooltip>
                </Flex>
            </Box>
        ) : (
            <p>Please select emotions and try again.</p>
        )}
        <Flex justify="center" gap="md" >
        <Button size="md" onClick={backToHome} style={{alignItems: "center"}}  rightSection={<IconMoodPlus  style={{marginLeft: "-0.2rem" }}  stroke={2.2} size={20} />} variant="light">I'm feeling different</Button>
        <Button size="md" onClick={scripturePicker} >Give Me Another <Text mt={1} ml={6} span>✨</Text></Button>
        </Flex>
        </Box>

        <Box hiddenFrom="xs">
        { randomScripture ? (
            <Box mb="lg" pb="sm" pt="md" mt="xl"> 
                <Title order={4}>"{randomScripture.verse}"</Title>
                <Flex mt="lg" direction="row" align="center" justify="center" gap={6}>
                <Text  size="md">({randomScripture.location}</Text> 
                <Text c="blue" size="md">{randomScripture.translation}<Text size="md" c="#000" span>)</Text></Text>
                </Flex>
            </Box>
        ) : (
            <p>Please select emotions and try again.</p>
        )}
        <Flex justify="center" gap="md" >
        <Button size="sm" onClick={backToHome} style={{alignItems: "center"}}  rightSection={<IconMoodPlus  style={{marginLeft: "-0.2rem" }}  stroke={2.2} size={20} />} variant="light">I'm feeling different</Button>
        <Button size="sm" onClick={scripturePicker} >Give Me Another <Text mt={1} ml={6} span>✨</Text></Button>
        </Flex>
        </Box>

        </>
    )
}

export default Scripture;