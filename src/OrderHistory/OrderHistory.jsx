import React from "react";
import { Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  VStack,
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

export default function OrderHistory() {
  const getOrderData = useSelector((state) => state.pizza.orderPlace);

  const sortedOrderData = getOrderData
    .slice()
    .sort((a, b) => b.orderId - a.orderId);

  return (
    <>
      <VStack spacing={4} align="center">
        <Button
          leftIcon={<ArrowBackIcon />}
          alignSelf={"flex-start"}
          colorScheme="red"
        >
          <ReactRouterLink style={{ color: "white" }} to="/">
            Back to menu
          </ReactRouterLink>
        </Button>

        {getOrderData.length <= 0 ? (
          <VStack h="full" justifyContent={"center"} height="100%">
            <img src="src/assets/NoResults.png" style={{ height: 200 }}></img>

            <Text color="gray.400" width="325px">
              Tidak ada history tersedia, yuk belanja dulu
            </Text>
          </VStack>
        ) : (
          sortedOrderData.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <Accordion allowToggle width="full">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Order Number #ID{data["orderId"]}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <TableContainer>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th minW="250px">Nama Makanan</Th>
                          <Th maxW="100px">Jumlah Pesanan</Th>
                          <Th>Notes</Th>
                          <Th isNumeric>Price</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.cartData // Create a new array before sorting
                          .map((item) => (
                            <Tr key={item.id}>
                              <Td>{item.pizzaName}</Td>
                              <Td>{item.quantity}</Td>
                              <Td>{item.notes}</Td>
                              <Td isNumeric>{`${
                                item.price * item.quantity
                              }`}</Td>
                            </Tr>
                          ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))
        )}
      </VStack>
    </>
  );
}
