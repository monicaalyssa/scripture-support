import { ActionIcon, Box, Button, Flex, Text, Title, Tooltip, Transition } from "@mantine/core";
import { IconMoodPlus, IconCopy, IconCopyCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import classes from "./Scripture.module.css"

interface emotionsProps {
    selectedEmotions: string[];
    randomScripture: { location: string, verse: string, translation: string, } | null;
    scripturePicker: () => void;
    setInputScreen: React.Dispatch<React.SetStateAction<boolean>>;
    inputScreen: boolean;
    setMounted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Scripture: React.FC<emotionsProps> = ({ inputScreen, setMounted, setInputScreen, randomScripture, scripturePicker }) => {
    const [scriptureMounted, setScriptureMounted] = useState<boolean>(false)
    const [newScriptureMounted, setNewScriptureMounted] = useState<boolean>(true)
    const [copied, setCopied] = useState<boolean>(false)

    useEffect(() => {
        setScriptureMounted(true)
    }, [])

    const backToHome = () => {
        if (inputScreen === false) {
            setInputScreen(true);
            setTimeout(() => {
                setMounted(true); 
            }, 100);
        }
    };

    const giveMeAnother = () => {
        setNewScriptureMounted(false)
        setTimeout(() => {
            scripturePicker()
            setNewScriptureMounted(true); 
        }, 300);
    }
    const scriptureCopy = ("\"" + randomScripture?.verse + "\" (" + randomScripture?.location + " " + randomScripture?.translation + ")")

    const copyScripture = () => {
        navigator.clipboard.writeText(scriptureCopy)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return(
        <>
        <Transition transition="fade-up" mounted={scriptureMounted} duration={400}>
        {(styles) => (
        <Box style={styles}>
        <Box visibleFrom="xs">
        { randomScripture ? (
            <Transition transition="fade" mounted={newScriptureMounted} duration={400}>
            {(styles) => (
            <Box style={styles} mb="xl" pb="md" mt="sm"> 
                <ActionIcon onClick={copyScripture} mb="xs" color="gray" size="lg" variant="transparent">
                    {copied ? (<IconCopyCheck color="#868e96" size={24} />) : (<IconCopy color="#868e96" size={24} />)}    
                </ActionIcon>
                <Title mt="xs" order={3}>"{randomScripture.verse}"</Title>
                <Flex mt="lg" direction="row" align="center" justify="center" gap={6}>
                <Text  size="xl">({randomScripture.location}</Text> 
                <Tooltip withArrow position="bottom-start" offset={-3} label="Translation"
                 transitionProps={{ transition: 'scale-x', duration: 300 }}>
                <Text c="blue" size="xl">{randomScripture.translation}<Text size="xl" c="#000" span>)</Text></Text>
                </Tooltip>
                </Flex>
            </Box>
            )}
            </Transition>
        ) : (
            <p>Please select emotions and try again.</p>
        )}
        <Flex justify="center" gap="md" >
        <Button size="md" onClick={backToHome} style={{alignItems: "center"}}  rightSection={<IconMoodPlus  style={{marginLeft: "-0.2rem" }}  stroke={2.2} size={20} />} variant="light">Add Feelings</Button>
        <Button size="md" onClick={giveMeAnother} >Give Me Another <Text mt={1} ml={6} span>✨</Text></Button>
        </Flex>
        </Box>
        </Box>
        )}
        </Transition>

        <Transition transition="fade-up" mounted={scriptureMounted} duration={400}>
        {(styles) => (
        <Box style={styles}>
        <Box hiddenFrom="xs">
        <ActionIcon onClick={copyScripture} color="gray" size="lg" variant="transparent">
            {copied ? (<IconCopyCheck color="#868e96" size={20} />) : (<IconCopy color="#868e96" size={20} />)}    
        </ActionIcon>
        { randomScripture ? (
            <Transition transition="fade" mounted={newScriptureMounted} duration={400}>
            {(styles) => (
            <Box style={styles} pb="sm" mt="xs"> 
                <Title className={classes.test} order={4}>"{randomScripture.verse}"</Title>
                <Flex mt="md" mb="sm" direction="row" align="center" justify="center" gap={6}>
                <Text size="md">({randomScripture.location}</Text> 
                <Text c="blue" size="md">{randomScripture.translation}<Text size="md" c="#000" span>)</Text></Text>
                </Flex>
            </Box>
            )}
            </Transition>
        ) : (
            <p>Please select emotions and try again.</p>
        )}
        <Flex direction="column" justify="center" gap="xs">
        <Button size="sm" onClick={backToHome} style={{alignItems: "center"}}  rightSection={<IconMoodPlus  style={{marginLeft: "-0.3rem" }}  stroke={2.2} size={18} />} variant="light">Add Feelings</Button>
        <Button size="sm" onClick={giveMeAnother}>  Give Me Another <Text mt={1} ml={6} span>✨</Text></Button>
        </Flex>
        </Box>
        </Box>
        )}
        </Transition>
        </>
    )
}

export default Scripture;