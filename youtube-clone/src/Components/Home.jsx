import { Box, Flex, Container, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import axios from "axios";
const Video = () => (
  <Box h={"410px"} w={"390px"} borderRadius={"5px"}>
    <Box w={"full"} h={"280px"} bg={"white"} borderRadius={"5px"}></Box>
    <Heading
      fontSize={"19px"}
      letterSpacing={"0.6px"}
      fontWeight={"500"}
      mt={"10px"}
      color={"white"}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia
      expedita vero iste quas, quam temporibus commodi deleniti.
    </Heading>
  </Box>
);

const Home = () => {

  useEffect(() => {
    const youtube = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
    });

    const fetchData = async () => {
      try {
        const res = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: 5,
            key: "AIzaSyBuF5fiKCYmLjA6NVbz4O4La8kCWgLAq6A", // Replace with your actual API key
            q: "coding",
          },
        });

        console.log(res.data.items); // Save fetched videos to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      pos={"absolute"}
      width={"full"}
      top={"0"}
      left={"0"}
      bg={"black"}
      zIndex={"-19"}
      wrap={"wrap"}
      gap={"20px"}
    >
      <Flex
        gap={"20px"}
        wrap={"wrap"}
        mt={"100px"}
        ml={"124px"}
        alignContent={"center"}
      >
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </Flex>
    </Box>
  );
};

export default Home;
