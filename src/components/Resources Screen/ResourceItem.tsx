import { Flex, Grid, Image, Text } from "@mantine/core";
import classes from "./ResourceItem.module.css"

function ResourceItem() {
    const ResourcesList = [
        {
            image: "https://play-lh.googleusercontent.com/ibA2d02ITLWo_lTKtGus4afMzh48II_wHv9hQAhf9sQfoYXiR8j05Ps94k6fM4eESZ8",
            title: "YouVersion Bible",
            desc: "Free app and website offering the Bible in multiple translations and a variety of reading plans.",
            link: "https://www.bible.com/",
            altDesc: "Bible App",
            altTitle: "YouVersion"
        },
        {
            image: "https://res-3.cloudinary.com/sparkbible/image/upload/c_fit,h_150,w_150/v1/resource_providers/BibleProject_agfqdk.png",
            title: "BibleProject",
            desc: "Free online resources, including videos and other tools, to help learn and study the Bible.",
            link: "https://bibleproject.com/",
            altDesc: "Study Guides",
            altTitle: "BibleProject",
        },
        {
            image: "https://i.iheart.com/v3/url/aHR0cHM6Ly9wYmNkbjEucG9kYmVhbi5jb20vaW1nbG9nby9pbWFnZS1sb2dvLzM3MzYxNjUvSGlnaF9SZXNfaDNiM2J1LnBuZw?ops=fit(960%2C960)",
            title: "The Bible Recap",
            desc: "My Bible plan recommendation for those who aren't sure where to start.",
            link: "https://www.bible.com/reading-plans/42398-the-bible-recap-new-testament",
            altDesc: "Reading Plan",
            altTitle: "Bible Recap"
        },

    ]

    return (
        <>
        {ResourcesList.map((item, index) => (
            <Grid.Col key={index} span={{ base: 0, md: 3, lg: 3 }}>
            <Flex target="_blank" className={classes.a} component="a" href={item.link} px={2} align="center" justify="center" direction="column"> 
                <Image visibleFrom="md" w={60} src={item.image}></Image>
                <Image hiddenFrom="md" mt="xs" w={45} src={item.image}></Image>
                <Text visibleFrom="md" mt="xl" fw={600}>{item.title}</Text>
                <Text hiddenFrom="md" mt="sm" size="xs"  fw={600}>{item.altTitle}</Text>
                <Text visibleFrom="md" mt={4} size="sm">{item.desc}</Text>
                <Text hiddenFrom="md" mt={4} size="xs">{item.altDesc}</Text>
            </Flex>
        </Grid.Col>
        ))}
        </>
    )
}

export default ResourceItem;