import React from "react";
import { Box, Divider, Text, Heading, Button } from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <Navbar />
            <Box
                w={'full'}
                h={'100vh'}
                bg={'#FEFBF5'}
                color={'#190041'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Box className="whatsnew"
                    display={'flex'}
                    maxW={'50%'}
                >
                    <Text
                        fontWeight={'bold'}
                    >
                        What's new
                    </Text>
                    <Divider orientation='vertical' color={'black'} />
                    <Text pl={'10px'}>
                        Faster insights with five new features <GoArrowRight fontWeight={'bold'} />
                    </Text>
                </Box>
                <Box className="maintext" px={100} textAlign={'center'}>
                    <Heading fontSize={'50px'}>Welcome to <span style={{ backgroundColor: '#C9B9FF' }}>PlanSmith:</span> <br /> Your <span style={{ backgroundColor: '#C9B9FF' }}>AI-Powered</span> Building Planner & Property Analyst</Heading>
                    <Text>Powered by CMND_ <Image src={'/cmnd.png'} width={50} height={50} /></Text>
                    <Text>Analyze customer data. Manage and share insights. Build products people love.</Text>
                </Box>
                <Box className="buttons" pb={50}>
                    <Link target="_blank" href={'https://app.cmnd.ai/chatbots/16/view'}>
                    <Button
                        p={10}
                        bg='#190041'
                        color='white'
                        border='none'
                        h='50px'
                        w='150px'
                        borderRadius='10px'
                        _hover={{
                            bg: 'black', // Change to the desired hover background color
                            cursor: 'pointer',
                        }}
                    >
                        Try for free
                    </Button>
                    </Link>


                    <Button
                        p={10}
                        ml={5}
                        bg='#FEFBF5'
                        color={'#190041'}
                        border={'1px solid #190041'}
                        h={'50px'}
                        w={'150px'}
                        borderRadius={'10px'}
                        _hover={{
                            bg: 'yellow', // Change to the desired hover background color
                            cursor: 'pointer',
                        }}
                    >
                        Contact sales
                    </Button>
                </Box>
                <Image src={'/hero1.svg'} width={930} height={580} />
            </Box>
            <Image src={'/hero2.svg'} width={360} height={170} style={{ position: 'absolute', left: '0px', top: '450px' }} />
            <Image src={'/hero3.svg'} width={300} height={110} style={{ position: 'absolute', right: '0px', top: '350px' }} />
        </>
    );
}
