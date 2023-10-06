//Hooks
import { useState } from "react";
//ChakraUI
import { Avatar, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
//Icons
import { FiMenu, FiHome, FiCalendar, FiUser, FiDollarSign, FiBriefcase, FiSettings } from "react-icons/fi";
import { IoPawOutline } from 'react-icons/io5'
//Components
import NavItems from "./NavItems";
const SideBar = () => {
  const [navSize, changeNavSize] = useState("large");
  
  return (
    <Flex
      position="stick"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={ navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{background: "none"}}
          icon={<FiMenu/>}
          onClick={() => {
            if (navSize == "small")
                changeNavSize("large")
            else
              changeNavSize("small")
          }}
        >
        </IconButton>
      </Flex>
      <NavItems navSize={navSize} icon={FiHome} title={"Dashboard"}/>
      <NavItems navSize={navSize} icon={FiCalendar} title={"Calendar"} active/>
      <NavItems navSize={navSize} icon={FiUser} title={"Clients"}/>
      <NavItems navSize={navSize} icon={IoPawOutline} title={"Animals"}/>
      <NavItems navSize={navSize} icon={FiDollarSign} title={"Stocks"}/>
      <NavItems navSize={navSize} icon={FiBriefcase} title={"Reports"}/>
      <NavItems navSize={navSize} icon={FiSettings} title={"Settings"}/>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={ navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
       <Divider display={navSize == "small" ? "none" : "flex"}/>
       <Flex mt={4} align="center">
          <Avatar size="md" src="avatar-1.jpg"/>
          <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
              <Heading as="h3" size="sm"> Arthur Guilherme</Heading>
              <Text>Front-End</Text>
          </Flex>
        </Flex> 
      </Flex>
    </Flex>
  )
}

export default SideBar