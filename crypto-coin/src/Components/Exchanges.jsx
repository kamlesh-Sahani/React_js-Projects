import React, { useEffect, useState } from 'react';
import { HStack,Image,Heading,Button } from '@chakra-ui/react';
import Loading from './Loading';

const Exchanges = () => {

  const [exchange,setExchange] = useState([]);
  const [loding, setLoading]=useState(true);

  useEffect(()=>{
    fetchData();
  },[])


  const fetchData =async()=>{
    try{
      const response = await fetch('https://api.coingecko.com/api/v3/exchanges');
      const data = await response.json();
      console.log(data);
      setExchange(data);
      setLoading(false);
    }catch(err){
      setLoading(false)
    }
    
  }
  return (
    <div>

      {
        loding ? <Loading /> :(
          <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"} margin={"40px 0px"} w={"100vw"} overflow={"hidden"} >
  
            {
              exchange.map((item) => (
                <a href={item.url} target='blank'  key={item.id}>
                <HStack h={"240px"} w={"240px"} shadow={"lg"} borderRadius={"5px"} m={"10px"} display={"flex"} flexDirection={"column"} justifyContent={"center"}
                  transition={"0.3s"}
                  css={{
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "all 0.3s linear"
                    }
                  }}
  
                >
                  <Image src={item.image} alt={item.image}
                    h={"20"}
                    w={"20"}
                  />
                  <Heading size={"md"} >{item.symbol}</Heading>
                  <p>{item.name}</p>
                  <p>{item.trust_score_rank}</p>
                </HStack>
                </a>
              ))
            }
  
  
          </HStack>
  
        </>
        )
      }
     
    </div>
  )
}

export default Exchanges