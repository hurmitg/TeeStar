import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useContext } from "react";
import CartCard from "../components/CartCard";
import { AppContext } from "../context/Context";

const CartPage = () => {
  const { cartArr, setCartArr } = useContext(AppContext);
  const [cartTotal, setCartTotal] = useState(
    cartArr.reduce((partialSum, a) => partialSum + a.price, 0)
  );

  return (
    <Flex flexDir="column" p={10} w="100%">
      <Text
        textAlign="right"
        textDecor="underline"
        fontSize="3xl"
        fontWeight="600"
      >
        Cart Total : {cartTotal}
      </Text>
      {cartArr.map((product) => {
        return (
          <CartCard
            key={product.id}
            setCartTotal={setCartTotal}
            cartTotal={cartTotal}
            product={product}
          />
        );
      })}
    </Flex>
  );
};

export default CartPage;
