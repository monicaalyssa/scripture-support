import { ActionIcon, Flex, Image, Text, Tooltip } from "@mantine/core";
import githubLogo from "../assets/github.svg"
import { Link } from "react-router-dom";
import classes from "./Footer.module.css"

function Footer() {

    return (
        <Flex justify="center" direction="column" gap={5} align="center">

        <Link className={classes.link} to='/resources'>
            <Text c="#000" visibleFrom="xs">Resources</Text>
            <Text c="#000" size="sm" hiddenFrom="xs">Resources</Text>
        </Link>

        <Tooltip label="GitHub - monicaalyssa">
            <ActionIcon component="a" target="_blank" href="https://github.com/monicaalyssa" p="lg" variant="transparent">
            <Image alt="GitHub Logo" w={40} src={githubLogo}></Image>
            </ActionIcon>
        </Tooltip>

        </Flex>    
        )
}

export default Footer;