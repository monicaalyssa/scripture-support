import { Button, Text } from "@mantine/core";
import { IconMoodPlus } from "@tabler/icons-react";

interface emotionsProps {
    selectedEmotions: string[];
    randomScripture: { location: string, verse: string } | null;
    scripturePicker: () => void;
}

const Scripture: React.FC<emotionsProps> = ({ selectedEmotions, randomScripture, scripturePicker }) => {
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
            <p>Error: No scipture found, please try to input emotions again.</p>
        )}
        <Button size="md" style={{alignItems: "center"}}  rightSection={<IconMoodPlus  style={{marginLeft: "-0.2rem" }}  stroke={2.2} size={20} />} variant="subtle">I'm feeling different</Button>
        <Button size="md" onClick={scripturePicker} >Give Me Another <Text mt={1} ml={6} span>✨</Text></Button>
        </>
    )
}

export default Scripture;