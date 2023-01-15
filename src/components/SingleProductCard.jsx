import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const SingleProductCard = ({ product, handleAddToCart }) => {
  return (
    <Flex
      borderRadius={5}
      p={5}
      _hover={{ borderBottom: "2px solid rgb(70,54,197, 0.7)" }}
      flexDir="column"
      justifyContent="center"
      alignItems="flex-end"
    >
      <Image src={product.imageURL} w="300px" />
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          my={4}
        >
          {product.name}
        </Text>
        <Text fontWeight="bold" fontSize="lg">
          ₹ {product.price}
        </Text>
      </Flex>
      <Button
        onClick={(e) => {
          handleAddToCart(product);
          e.target.disabled = true;
          e.target.innerText = "Added to Cart";
        }}
      >
        Add to Cart
      </Button>
    </Flex>
  );
};

export default SingleProductCard;
