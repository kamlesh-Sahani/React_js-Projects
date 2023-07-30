import React from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, Icon, cookieStorageManager, DrawerCloseButton, VStack, HStack } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme='whatsapp' top={'4'} left={'4'} height={'10'} width={'10'} size={'10'} color={'black'} onClick={onOpen}>
        <AiOutlineMenu />
      </Button>


      <Drawer isOpen={isOpen} placement='left' onClose={onClose} variant={'outline'}>
        <DrawerContent>
          <DrawerCloseButton />


          <DrawerHeader>
            <h1 color="greeen">CodingMaster</h1>
          </DrawerHeader>



          <DrawerBody>
            <VStack alignItems={'flex-start'} gap={'6'}>


              <Button onClick={onClose} colorScheme='green' variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>



              <Button onClick={onClose} colorScheme='green' variant={'ghost'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>



              <Button onClick={onClose} colorScheme='green' variant={'ghost'}>
                <Link to={'/freevideos'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} colorScheme='green' variant={'ghost'}>
                <Link to={'/uploadvideo'}>Uplaod video</Link>
              </Button>


            </VStack>

            <HStack pos={'absolute'} left={'5'}
            bottom={'10'} gap={'20  '}>

            <Button onClick={onClose} colorScheme='green' variant={'outline'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>


              <Button onClick={onClose} colorScheme='green'>
                <Link to={'/login'}>Login </Link>
              </Button>

            </HStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

};

export default Header;