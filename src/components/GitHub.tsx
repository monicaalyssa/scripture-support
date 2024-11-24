import { ActionIcon, Flex, Image, Text, Tooltip } from "@mantine/core";
import githubLogo from "../assets/github.svg"
import { Link } from "react-router-dom";

function GitHub() {

    return (
        <Flex justify="center" direction="column" gap={5} align="center">
        <Link to='resources'>
            <Text visibleFrom="xs">Resources</Text>
            <Text size="sm" hiddenFrom="xs">Resources</Text>
        </Link>

            <Tooltip label="GitHub - monicaalyssa">
            <ActionIcon component="a" target="_blank" href="https://github.com/monicaalyssa" p="lg" variant="transparent">
            <Image alt="GitHub Logo" w={40} src={githubLogo}></Image>
            </ActionIcon>
            </Tooltip>
        </Flex>    
        )
}

export default GitHub;