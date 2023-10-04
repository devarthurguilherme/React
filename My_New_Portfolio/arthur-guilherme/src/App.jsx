//Chakra UI Elements
import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
//Components
import NavMobile from "./components/NavMobile";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"NavMobile" "Main"`,
        lg: `"SideBar Main"`
      }
    }
    >
      <Hide above='lg'>
        <GridItem
          area="NavMobile"
          bg="coral"  
        >
          <NavMobile />
        </GridItem>
      </Hide>
      <GridItem
        area="Main"
        bg="dodgerblue"  
      >
        Main
      </GridItem>
      <Show above="lg">
        <GridItem
          area="SideBar"
          bg="blue"  
        >
          <SideBar />
        </GridItem>
      </Show>
     
    </Grid>
  )
}

export default App
