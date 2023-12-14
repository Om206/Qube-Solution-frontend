import React from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/react';

const CustomeCard2 = ({ image, title, dec }) => {
  return (
    <>
      <Card maxW="md" height={'80vh'} marginBottom={'4rem'} overflow={'hidden'}>
        <CardBody>
          <Image src={image} alt={title} borderRadius="lg" />
          <Divider />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{dec}</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default CustomeCard2;
