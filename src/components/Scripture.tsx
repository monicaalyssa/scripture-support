import { Button, Flex, Text } from "@mantine/core";
import { IconMoodPlus } from "@tabler/icons-react";

interface emotionsProps {
    selectedEmotions: string[];
    randomScripture: { location: string, verse: string } | null;
    scripturePicker: () => void;
    setInputScreen: React.Dispatch<React.SetStateAction<boolean>>;
    inputScreen: boolean;
}

const Scripture: React.FC<emotionsProps> = ({ selectedEmotions, inputScreen, setInputScreen, randomScripture, scripturePicker }) => {

    const backToHome = () => {
        if (inputScreen === false) {
            setInputScreen(true);
        }
    };

    return(
        <>
        { randomScripture ? (
            <div>
                <p>
                    {randomScripture.location}
                    {randomScripture.verse}
                </p>
            </div>
        ) : (
            <p>Please select emotions and try again.</p>
        )}
        <Flex gap="md" >
        <Button size="md" onClick={backToHome} style={{alignItems: "center"}}  rightSection={<IconMoodPlus  style={{marginLeft: "-0.2rem" }}  stroke={2.2} size={20} />} variant="subtle">I'm feeling different</Button>
        <Button size="md" onClick={scripturePicker} >Give Me Another <Text mt={1} ml={6} span>✨</Text></Button>
        </Flex>
        </>
    )
}

export default Scripture;