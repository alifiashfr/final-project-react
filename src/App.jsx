import { Flex, Stack } from "@chakra-ui/react";
import "./App.css";
import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";
import Bill from "./Bill/Bill";
import NavBar from "./NavBar/NavBar";
import OrderModal from "./Modal/OrderModal";

function App() {
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

export default App;
