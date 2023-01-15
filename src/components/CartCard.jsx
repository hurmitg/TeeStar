import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const CartCard = ({ product, setCartTotal, cartTotal }) => {
  const [itemCount, setItemCount] = useState(1);
  const toast = useToast();

  const handleQuantity = (num) => {
    if (num == 1 && itemCount >= product.quantity) {
      toast({
        title: "Could not update the quantity",
        description: `${product.name} has a limited stock`,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setItemCount(itemCount + num);
    setCartTotal(cartTotal + product.price * num);
  };

  return (
    <Flex
      p={10}
      w="100%"
      flexDir={["column", "row", "row"]}
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid grey"
    >
      <Image src={product.imageURL} w={["90%", "15%", "15%"]} />
      <Box textAlign="left" w="60%">
        <Text
          fontSize="3xl"
          fontStyle="italic"
          textDecor="underline"
          fontWeight="bold"
        >
          {product.name}
        </Text>
        <Flex alignItems="center">
          <Button
            size="sm"
            variant="ghost"
            isDisabled={itemCount <= 1}
            onClick={() => handleQuantity(-1)}
          >
            -
          </Button>
          <Text mx={2}>{itemCount}</Text>
          <Button size="sm" variant="ghost" onClick={() => handleQuantity(1)}>
            +
          </Button>
        </Flex>
      </Box>
      <Text w={["100%", "100%", "15%"]} fontWeight="bold" fontSize="2xl" mr={1}>
        ₹ {product.price * itemCount}
      </Text>
    </Flex>
  );
};

export default CartCard;
