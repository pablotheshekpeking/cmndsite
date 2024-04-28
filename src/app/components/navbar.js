import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Navbar(){
    return(
        <Box
        w={'full'}
        bg={'#FEFBF5'}
        pb={50}
        >
            <Box
            display={'flex'}
            justifyContent={'space-between'}
            px={'20%'}
            color={'#190041'}
            >
                <Image src={'/logo.png'} width={300} height={50} />
                <Text>
                    About us
                </Text>
                <Text>
                    Pricing
                </Text>
                <Text>
                    Resources
                </Text>
                <Text>
                    CMND_
                </Text>
            </Box>
        </Box>
    );
}