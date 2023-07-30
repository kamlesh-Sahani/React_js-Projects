import { Box ,Image, keyframes} from '@chakra-ui/react';
import React from 'react';
import bitSrc from '../image/btc.png';
import { motion } from 'framer-motion';
const Home = () => {

  return (
    <Box w={"full"} h={"94vh"} bg={"blackAlpha.900"}> 

<motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "50px",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={bitSrc}
    
        />
      </motion.div>
    </Box>
  )
}

export default Home;