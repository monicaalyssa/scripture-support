import { ActionIcon, Flex, Image, Tooltip } from "@mantine/core";
import githubLogo from "../assets/github.svg"

function GitHub() {

    return (
        <Flex justify="center">
            <Tooltip label="GitHub - monicaalyssa">
            <ActionIcon component="a" target="_blank" href="https://github.com/monicaalyssa" p="lg" variant="transparent">
            <Image alt="GitHub Logo" w={40} src={githubLogo}></Image>
            </ActionIcon>
            </Tooltip>
        </Flex>    
        )
}

export default GitHub;