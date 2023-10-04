import { Avatar, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { FiMenu } from "react-icons/fi"

const SideBar = () => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      position="stick"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems="flex-start"
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
              changeNavSize("small") 4:50
          }}
        >
        </IconButton>
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems="flex-start"
        mb={4}
      >
       <Divider />
       <Flex mt={4} align="center">
          <Avatar size="md" src="avatar-1.jpg"/>
          <Flex flexDir="column" ml={4}>
              <Heading as="h3" size="sm"> Arthur Guilherme</Heading>
              <Text>Front-End</Text>
          </Flex>
        </Flex> 
      </Flex>
    </Flex>
  )
}

export default SideBar