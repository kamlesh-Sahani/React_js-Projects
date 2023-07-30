import React, { useState } from 'react';
import { Box, Image,Heading, Stack } from '@chakra-ui/react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Home = () => {

    return (
        <>
        <Box pos={'absolute'} top={'0'} zIndex={"-10"}>  
            <Carousel  
            autoPlay
            infiniteLoop
            interval={1000}
            showThumbs={false}
            >
                <div>
                    <img src={img1} alt="Image 1" />
              <Heading pos={'absolute'} top={"40%"} left={'35%'} bg={'whiteAlpha.600'}>Future Is Coming</Heading>
                </div>
                <div>
                    <img src={img2} alt="Image 2" />
                    <Heading pos={'absolute'} top={"40%"} left={'35%'} bg={'whiteAlpha.600'}>Future Is gamig</Heading>
                </div>
                <div>
                    <img src={img3} alt="Image 3" />
                    <Heading pos={'absolute'} top={"40%"} left={'35%'} bg={'whiteAlpha.600'}>Future Developer</Heading>
                </div>
                <div>
                    <img src={img4} alt="Image 3" />
                    <Heading pos={'absolute'} top={"40%"} left={'35%'} bg={'whiteAlpha.600'}>Coding Only</Heading>
                </div>
            </Carousel>

            <div>
        <Heading alignItems={'center'} color={"whatsapp.600"}>Services</Heading>
        <Stack>
            <Image src={img4}/>
        </Stack>
        </div>
            </Box>

        


        </>
    )
}

export default Home;