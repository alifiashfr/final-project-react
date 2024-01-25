import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import Cart from "../../Components/Cart/Cart";
import Menu from "../../Components/Menu/Menu";
import Bill from "../../Components/Bill/Bill";
import NavBar from "../../Components/NavBar/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Flex>
        <Menu />
        <Stack>
          <Cart />
          <Bill />
        </Stack>
      </Flex>
    </>
  );
}
