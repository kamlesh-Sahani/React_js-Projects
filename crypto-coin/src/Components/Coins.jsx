import { Container, HStack, Radio, RadioGroup,Image, Heading, Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link, useParams } from 'react-router-dom';

const Coins = () => {

  const [currency, setCurrency] = useState("inr");
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [loading,setLoading] =useState(true);
  useEffect(() => {
    fetchCoins();
  }, [coins,currency,page])

  //Coins Daata fetch code
  const fetchUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency";

  const fetchCoins = async () => {

    try {
      const response = await fetch(`${fetchUrl}=${currency}&page=${page}`);
      const coinsData = await response.json();
      setCoins(coinsData);
      setLoading(false);
    }
    catch (error) {
      setLoading(false);
    }
  }

  return (
    <div>
      {
        loading ? <Loading/>:(  <>
 
          <RadioGroup value={currency} onChange={setCurrency} margin={"10px"} justifyContent={"center"} display={"flex"}>
            <HStack>
              <Radio value='inr'>INR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>
          </RadioGroup>
    
          <HStack wrap={"wrap"} justifyContent={"space-evenly"} margin={"40px 0px"} w={"100vw"} overflow={"hidden"} >
    
            {
              coins.map((item) => (
                <Link to={`/coin/${item.id}`}>
                <HStack key={item.id} h={"240px"} w={"240px"} shadow={"lg"} borderRadius={"5px"} m={"10px"}  display={"flex"} flexDirection={"column"}  justifyContent={"center"}
                transition={"0.3s"}
                css={{
                  "&:hover":{
                    transform:"scale(1.1)",
                    transition:"all 0.3s linear"
                  }
                }}
                
                >
                  <Image src={item.image} alt={item.image}
                  h={"20"}
                  w={"20"}
                  />
                  <Heading size={"md"} >{item.symbol}</Heading>
                  <p>{item.name}</p>
                  <p>{currency === "inr"?"₹" :currency==="usd"?"$":"€"}{item.current_price}</p>
                </HStack>
                </Link>
              ))
            }
    
    
          </HStack>

          <HStack justifyContent={"center"} gap={"50px"}>
            <Button h={"50px"} w={"170px"} bg={"black"} colorScheme={'white'} onClick={() =>{setPage(page+1)}} >Prev</Button>
            <Button>{page}</Button>
            <Button h={"50px"} w={"170px"} bg={"black"} colorScheme={'white'}  onClick={() =>{setPage(page+1)}}>Next</Button>
          </HStack>
        </> )
      }

    </div>
  )
}

export default Coins