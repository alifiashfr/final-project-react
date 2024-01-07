import { Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { rupiah } from "../utils/currencyConvert";

export default function Bill() {
  const getCartData = useSelector((state) => state.pizza.cartData);
  const price = getCartData.reduce((acc, pizza) => {
    const itemTotalPrice = pizza.price * pizza.quantity;
    return acc + itemTotalPrice;
  }, 0);

  const ppn = (price * 10) / 100;
  const service = (price * 5) / 100;
  const totalPrice = price + ppn + service;

  return getCartData.length !== 0 ? (
    <Stack>
      <h1>
        Price : <b>{rupiah(price)}</b>{" "}
      </h1>
      <h1>
        PPN :<b>{rupiah((price * 10) / 100)} </b>
      </h1>
      <h1>
        Service Charge : <b>{rupiah((price * 5) / 100)}</b>
      </h1>
      <h1>
        Total Price : <b>{rupiah(totalPrice)}</b>{" "}
      </h1>
    </Stack>
  ) : (
    ""
  );
}