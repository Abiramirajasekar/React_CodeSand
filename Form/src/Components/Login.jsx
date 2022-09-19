import { Button, Container, Input, Spinner, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/listing");
    }, 1500);
  };

  return (
    <>
      <Container maxW="md">
        <Stack>
          <Input
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input placeholder="Enter password" type="password" />
          <Button bgColor="blueviolet" onClick={handleSubmit}>
            Submit
            {isLoading && <Spinner color="red.500" />}
          </Button>
        </Stack>
      </Container>
    </>
  );
};
