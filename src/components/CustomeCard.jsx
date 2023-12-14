import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react';

const CustomeCard = ({ image, title, dec }) => {
  return (
    <>
      <Card
        padding={'1rem'}
        margin={'1rem'}
        width={'47%'}
        height={'100vh'}
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          borderRadius={'0.5rem'}
          objectFit="cover"
          maxW={{ base: '100%', sm: '400px' }}
          src={image}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="lg">{title}</Heading>

            <Text overflow={'hidden'} py="2">
              {dec}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
};

export default CustomeCard;
