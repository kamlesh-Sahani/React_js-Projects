import { HStack, RadioGroup, Radio, Container, VStack, Text, Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress, Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Chart from './chart';
import axios from 'axios';
import Loading from './Loading';
import { useParams } from 'react-router-dom';


const CoinsDetails = () => {
  const [currency, setCurrency] = useState('inr');
  const [data, setData] = useState({});
  const [charData, setCharData] = useState([])  
  const [day, setDays] = useState("24h");
  const[loading, setLoading] = useState(true);

  const {id} = useParams();
console.log(id);
  const btnDays = ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"];

  useEffect(() => {
    fetchCoins();
    setLoading(false)
  }, [day,id,data,currency,charData]);

const is ="ripple";
  const fetchCoins = async () => {
    try {
    
      const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
      const {data:chart} = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${day}`);
      setCharData(chart.prices);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };



 const Handler = (i) =>{
 switch (i) {
  case "24h":
    setDays("24h");
    setLoading(true);
    break;
  case "7d":
    setDays("7d");
    setLoading(true);
    break;
  case "14d":
    setDays("14d");
    setLoading(true);
    break;
  case "30d":
    setDays("30d");
    setLoading(true);
    break;
  case "60d":
    setDays("60d");
    setLoading(true);
    break;
  case "200d":
    setDays("200d");
    setLoading(true);
    break;
  case "1y":
    setDays("365d");
    setLoading(true);
    break;
  case "max":
    setDays("max");
    setLoading(true);
    break;

  default:
    setDays("24h");
    setLoading(true);
    break;
}
};


  return (
    <Container maxW={'container.xl'}>
    {loading ? <Loading /> :(
        <>
        <Chart arr={charData} days={day} currency={currency} id={is}/>
  
  
        <HStack gap={"5"} my={"5"} overflowX={"auto"}>
  
          {
            btnDays.map((i)=>(
              <Button bg={"black"} disabled={day == i} color={"white"} key={i} onClick={() => Handler(i)}>
              {i}
            </Button>
            
            ))
  
  
          }
        </HStack>
        <RadioGroup value={currency} onChange={setCurrency}>
          <HStack p={'4'} w={'full'} gap={'4'}>
            <Radio value={'inr'}>INR</Radio>
            <Radio value={'usd'}>USD</Radio>
            <Radio value={'eur'}>EUR</Radio>
          </HStack>
        </RadioGroup>
  
        <VStack alignItems={'flex-start'} gap={'10px'}>
          <Text color={'gray.400'} p={'10'} alignSelf={'center'}>
            Last update on {data?.last_updated}
          </Text>
  
          <Image src={data?.image?.small} />
  
          <Stat p={'2'}>
            <VStack alignItems={'flex-start'} gap={'20px'}>
              <StatLabel>{data?.name}</StatLabel>
              <StatNumber>
                {currency === 'usd' ? '$' : currency === 'inr' ? '₹' : '€'}{' '}
                {data?.market_data?.current_price?.[currency] || 'N/A'}
              </StatNumber>
  
              <StatHelpText>
                <StatArrow type={data?.market_data?.price_change_percentage_24h > 0 ? 'increase' : 'decrease'} />
                {data?.market_data?.price_change_percentage_24h ?? 'N/A'}%
                {data?.market_data?.price_change_percentage_24h > 0 ? (
                  <Progress value={(data?.market_data?.price_change_percentage_24h || 0) * 100} colorScheme={'green'} w={'500px'} />
                ) : (
                  <Progress value={(data?.market_data?.price_change_percentage_24h || 0) * 100} colorScheme={"red"} w={'500px'} />
                )}
              </StatHelpText>
            </VStack>
          </Stat>
  
          <Badge fontSize={'30'} bg={'black'} color={'white'}>
            #{data?.market_cap_rank || 'N/A'}
          </Badge>
  
          <Item title={'Max Supply'} value={data?.market_data?.total_supply || 'N/A'} />
          <Item title={'Community Score'} value={data?.community_score || 'N/A'} />
          <Item title={'Categories'} value={data?.categories?.[0] || 'N/A'} />
          <Item title={'Trust Score'} value={data?.tickers?.[0]?.trust_score || 'N/A'} />
        </VStack>
        </>
    )
    }
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
    <Text fontFamily={'sans-serif'}  >
      {title}
    </Text>
    <Text fontWeight={"600"}>{value}</Text>
  </HStack>
);

export default CoinsDetails;
