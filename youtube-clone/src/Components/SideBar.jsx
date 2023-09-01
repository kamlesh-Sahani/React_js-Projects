import {
  Box,
  Img,
  VStack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { PiVideoFill } from "react-icons/pi";
import { RiVideoFill } from "react-icons/ri";
import { FcNeutralTrading } from "react-icons/fc";
import React from "react";


const SideBar = () => {
  const Btnx = ({ name, icon }) => (
    <Button
      colorScheme="white"
      variant={"solid"}
      _hover={{ opacity: "0.5" }}
      height={"50px"}
    >
      <VStack>
        {icon}
        <Text fontSize={"14px"} fontWeight={"medium"}>{name}</Text>
      </VStack>
    </Button>
  );

  return (
    <VStack bg={"black"} gap={"18px"} h={"100vh"} w={"110px"}>
        <Btnx name={"Home"} icon={<AiFillHome fontSize={"20px"} />} />
        <Btnx name={"Shorts"} icon={<RiVideoFill fontSize={"20px"} />} />
        <Btnx name={"Subscription"} icon={<PiVideoFill fontSize={"20px"} />} />
        <Btnx name={"Trading"} icon={<FcNeutralTrading fontSize={"20px"} />} />
      </VStack>
  );
};

export default SideBar;
