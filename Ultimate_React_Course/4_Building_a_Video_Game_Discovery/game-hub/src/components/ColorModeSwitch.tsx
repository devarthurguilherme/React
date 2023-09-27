import { HStack, Switch, Text } from "@chakra-ui/react"

const ColorModeSwitch = () => {
  return (
    <HStack>
        <Switch />
        <Text>DarkMode</Text>
    </HStack>
  )
}

export default ColorModeSwitch