import { Flex, HStack, Image, Input, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeSearchKeyword } from "../../Redux/ReduxSlices";
import { Link } from "@chakra-ui/react";
import IMAGE from "../../assets/RichieLogo.png";

export default function NavBar() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);
  const dispatch = useDispatch();
  const imageSource = IMAGE;
  return (
    <>
      <HStack px={25} py={25} justifyContent={"space-between"}>
        <Image src={imageSource} height={"50px"} marginRight={"10px"} />
        <Input
          placeholder="Search for pizzas!"
          width={"50%"}
          onChange={(e) => dispatch(storeSearchKeyword(e.target.value))}
        ></Input>

        <HStack>
          <Button colorScheme="orange">
            <ReactRouterLink style={{ color: "white" }} to="/history">
              Order History
            </ReactRouterLink>
          </Button>
          <Image
            src="https://cdn.icon-icons.com/icons2/2807/PNG/512/notification_bell_icon_178938.png"
            height={"24px"}
            marginRight={"10px"}
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRooM22Fi4LqecV8flMPPpVIqHaGpGOfMTIQ&usqp=CAU"
            height={"40px"}
            marginRight={"10px"}
          />
        </HStack>
      </HStack>
    </>
  );
}
