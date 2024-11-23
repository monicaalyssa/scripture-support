import { Button, Text } from "@mantine/core";
import { IconMoodPlus } from "@tabler/icons-react";
import { SAD_SCRIPTURES } from "../constants/scriptures.tsx"

function Scripture() {


    return(
        <>
        {SAD_SCRIPTURES.map((item, index) => (
            <div key={index}>
                <p>"{item.verse}"</p>
            </div>
        ))}
        <Button size="md" style={{alignItems: "center"}}  rightSection={<IconMoodPlus  style={{marginLeft: "-0.2rem" }}  stroke={2.2} size={20} />} variant="subtle">I'm feeling different</Button>
        <Button size="md">Give Me Another <Text mt={1} ml={6} span>✨</Text></Button>
        </>
    )
}

export default Scripture;