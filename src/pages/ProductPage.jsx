import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { AppContext } from "../context/Context";
import SingleProductCard from "../components/SingleProductCard";

const ProductPage = () => {
  const [typeArr, setTypeArr] = useState([]);
  const [colourArr, setColourArr] = useState([]);

  const [mainProducts, setMainProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { setCartArr, cartArr } = useContext(AppContext);

  const fetchProducts = async () => {
    try {
      await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
        .then((res) => res.json())
        .then((res) => {
          setProducts(res);
          setMainProducts(res);
          let tempType = [];
          let tempColour = [];

          res.forEach((product) => {
            if (!tempType.includes(product.type)) tempType.push(product.type);

            if (!tempColour.includes(product.color))
              tempColour.push(product.color);
          });
          setTypeArr(tempType);
          setColourArr(tempColour);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    let query = e.target.value;
    query = query.toLowerCase();
    let temp = [...mainProducts];
    if (query == "") return;
    let filtered = temp.filter((p) => {
      return (
        p.name.toLowerCase().includes(query) ||
        p.color.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    });
    setProducts(filtered);
  };

  const filterData = async (e) => {
    let select = e.target.value;

    let temp = [...mainProducts];
    if (select === "") {
      setProducts(temp);
      return;
    }

    let filtered = temp.filter((a) => {
      return a.color === select || a.type == select;
    });

    setProducts(filtered);
  };

  const handleAddToCart = (product) => {
    setCartArr([...cartArr, product]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Flex position="relative">
        <Box
          position="sticky"
          h="80vh"
          p={5}
          top="10vh"
          w={["0", "30%", "15%"]}
        >
          <Input
            w="100%"
            onChange={(e) => {
              handleSearch(e);
            }}
            placeholder="Search..."
            my={5}
          />
          <Select
            m="auto"
            placeholder="Filter by Color"
            onChange={(e) => {
              filterData(e);
            }}
            w="100%"
          >
            {colourArr.map((col) => {
              return (
                <option key={col} value={col}>
                  {col}
                </option>
              );
            })}
          </Select>
          <Select
            m="auto"
            mt={4}
            onChange={(e) => {
              filterData(e);
            }}
            placeholder="Filter by Type"
            w="100%"
          >
            {typeArr.map((type) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </Select>
        </Box>

        <SimpleGrid
          w={["100%", "70%", "85%"]}
          columns={[1, 2, 3]}
          p={5}
          spacing={10}
        >
          {products.map((product) => {
            return (
              <SingleProductCard
                key={product.id}
                handleAddToCart={handleAddToCart}
                product={product}
              />
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default ProductPage;
