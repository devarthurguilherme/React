import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const PlatformSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>2:00    
        <MenuList>
            <MenuItem>
                Item 1
            </MenuItem>
            <MenuItem>
                Item 2
            </MenuItem>
            <MenuItem>
                Item 3
            </MenuItem>
        </MenuList>
        
    </Menu>
  )
}

export default PlatformSelector