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
import { FaBars } from "react-icons/fa";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { PiVideoFill } from "react-icons/pi";
import { RiVideoFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { TbHistoryToggle } from "react-icons/tb";
import { BiLike } from "react-icons/bi";
import { FcNeutralTrading } from "react-icons/fc";
import { useDisclosure } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { BsMusicNote } from "react-icons/bs";
import { AiOutlineTrophy } from "react-icons/ai";
import { HiOutlineSignal } from "react-icons/hi2";
import { PiNewspaperLight } from "react-icons/pi";
import { LiaGamepadSolid } from "react-icons/lia";
import { BiMoviePlay } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { MdReportOff } from "react-icons/md";
import { BiCommentError } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import React from "react";
import YoutubeIcon from "../img/ytLogo.png";

import SideBar from "./SideBar";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Btn = ({ name, icon }) => (
    <Button
      colorScheme="white"
      variant={"solid"}
      _hover={{ bg: "#464646" }}
      height={"50px"}
    >
      {icon}
      <Text ml={"30px"} fontWeight={"medium"}>
        {name}
      </Text>
    </Button>
  );

  return (
    <Box w={"full"}>
      <Box bg={"black"} p={"20px"} w={"full"}>
        <HStack gap={"20px"} justifyContent={"space-between"}>
          <HStack>
          <Button colorScheme="black" onClick={onOpen}>
            <FaBars />
          </Button>
            <Img src={YoutubeIcon} h={"22px"} w={"90px"} />
          </HStack>

          <HStack>
            <Input
              placeholder="Search something .."
              borderRadius={"100px 0 0 100px"}
              borderColor={"gray"}
              width={"lg"}
              color={"white"}
            />
            <Button
              borderRadius={"0 100px 100px 0"}
              fontSize={"30px"}
              bg={"gray.50"}
              ml={"-8px"}
            >
              <AiOutlineSearch />
            </Button>
            <Button colorScheme="white" fontSize={"30px"}>
              <IoMdMic />
            </Button>
          </HStack>

          <HStack>
            <Button colorScheme="white" fontSize={"28px"}>
              <AiOutlineVideoCameraAdd />
            </Button>
            <Button colorScheme="white" fontSize={"28px"}>
              <AiOutlineBell />
            </Button>
            <Button colorScheme="white" fontSize={"28 px"}>
              <CgProfile />
            </Button>
          </HStack>
        </HStack>

        <Box>
         
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg={"black"} color={"white"} overflow={"auto"}>
              <DrawerHeader borderBottomWidth="1px">
                <HStack gap={"20px"}>
                  <Button colorScheme="black" onClick={onClose}>
                    <FaBars />
                  </Button>
                  <Img src={YoutubeIcon} h={"22px"} w={"90px"} />
                </HStack>
                <VStack mt={"40px"} alignItems={"flex-start"} gap={"20px"}>
                  <Btn name={"Home"} icon={<AiFillHome fontSize={"23px"} />} />
                  <Btn
                    name={"Subscription"}
                    icon={<PiVideoFill fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Shorts"}
                    icon={<RiVideoFill fontSize={"23px"} />}
                  />
                  <Btn
                    name={"History"}
                    icon={<FaHistory fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Watch Later"}
                    icon={<TbHistoryToggle fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Like Video"}
                    icon={<BiLike fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Trading"}
                    icon={<FcNeutralTrading fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Shoping"}
                    icon={<FiShoppingBag fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Music"}
                    icon={<BsMusicNote fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Movie"}
                    icon={<BiMoviePlay fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Live"}
                    icon={<HiOutlineSignal fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Gaming"}
                    icon={<LiaGamepadSolid fontSize={"23px"} />}
                  />
                  <Btn
                    name={"News"}
                    icon={<PiNewspaperLight fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Sports"}
                    icon={<AiOutlineTrophy fontSize={"23px"} />}
                  />

                  <Btn
                    name={"Setting"}
                    icon={<CiSettings fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Report"}
                    icon={<MdReportOff fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Help"}
                    icon={<FiHelpCircle fontSize={"23px"} />}
                  />
                  <Btn
                    name={"Feedback"}
                    icon={<BiCommentError fontSize={"23px"} />}
                  />
                </VStack>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
      <SideBar/>
    </Box>
  );
};

export default Header;
