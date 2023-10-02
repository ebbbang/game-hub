import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevant</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};
