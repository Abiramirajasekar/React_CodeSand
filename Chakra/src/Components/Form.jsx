import React from "react";
import {
  Box,
  Heading,
  Input,
  Stack,
  PinInput,
  PinInputField,
  HStack,
  Select,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
// create a FORM based on the output shown
// explore the docs
// Box, PinInput, input Select Menu Button
function Form() {
  const [loading, setLoading] = useState(false);
  const [otp, setOTP] = useState("");
  return (
    <Box>
      <Stack direction="column" gap="0.5rem">
        <Box>
          <Heading>Form</Heading>
        </Box>
        <Box>
          <Input placeholder="email" />
        </Box>
        <Box>
          <Input placeholder="Password" />
        </Box>
        <HStack>
          <PinInput value={otp} onChange={(value) => setOTP(value)} otp>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Box>{otp}</Box>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }}
          isLoading={loading}
          colorScheme="red"
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
export default Form;
