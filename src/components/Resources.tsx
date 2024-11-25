import { Grid } from "@mantine/core";
import ResourceItem from "./ResourceItem";

function Resources() {
  return (
    <>
      <Grid justify="space-between" visibleFrom="md" > 
        <ResourceItem></ResourceItem>
      </Grid>

      <Grid px="xl" mx="xl" justify="center" hiddenFrom="md" > 
        <ResourceItem></ResourceItem>
      </Grid>

    </>
  );
};

export default Resources;
