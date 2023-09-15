import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      w={'full'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      h={'150px'}
      color={'textLight'}
      bgColor={'mainBlue'}
      as={'section'}
    >
      <Box
        as={'nav'}
        w={'full'}
        px={['2rem', null, 0]}
        maxW={'90rem'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={10}
      >
        {isDesktop ? (
          <Flex
            w={'full'}
            alignItems={'center'}
            justifyContent={'center'}
            fontWeight={'bold'}
            letterSpacing={'2px'}
            fontSize={'1.2rem'}
            flex={1}
          >
            <HStack gap={'1rem'} textTransform={'uppercase'}>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'secondBlue',

                    borderBottom: 'medium solid #00b3ff',
                  }}
                >
                  acasă
                </Text>
              </Link>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'secondBlue',

                    borderBottom: 'medium solid #00b3ff',
                  }}
                >
                  despre noi
                </Text>
              </Link>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'secondBlue',

                    borderBottom: 'medium solid #00b3ff',
                  }}
                >
                  brain mapping
                </Text>
              </Link>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'secondBlue',

                    borderBottom: 'medium solid #00b3ff',
                  }}
                >
                  dropdown
                </Text>
              </Link>
              <Link to={'/'}>
                <Image
                  w={'100px'}
                  objectFit={'contain'}
                  src={'/images/cerebrium-w.png'}
                  alt={'Auto Post'}
                />
              </Link>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'secondBlue',

                    borderBottom: 'medium solid #00b3ff',
                  }}
                >
                  heg-nir
                </Text>
              </Link>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'secondBlue',

                    borderBottom: 'medium solid #00b3ff',
                  }}
                >
                  dropdown
                </Text>
              </Link>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'secondBlue',

                    borderBottom: 'medium solid #00b3ff',
                  }}
                >
                  servicii
                </Text>
              </Link>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'secondBlue',

                    borderBottom: 'medium solid #00b3ff',
                  }}
                >
                  contact
                </Text>
              </Link>
            </HStack>
          </Flex>
        ) : (
          <HamburgerIcon
            boxSize={6}
            _hover={'none'}
            _avtive={'none'}
            aria-label="Open Menu"
            onClick={toggle}
          />
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
